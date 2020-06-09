// user information
let forwardTimes = [];
let withFaceLandmarks = false;
let withBoxes = true;
let faceMatcher = null;
let username = "user";

// absent
let absentCount = 0;
let is_absent = false;

// reference
const faceCount = 20;
let collected = 0;
let faceArray = new Array();

//voice interval
let start = null;
let stop = null;
let is_speaking = false;

//expression
let expr = null;

//payloads
let payloadLength = 0;
let payloads = new Array();

//package seq
let seq = 0;
let starttime = null;
let endtime = null;

$("#monitor").draggable();


/**
 * Section Split
 * Part: face detection
 * realize a realtime detection and recognition
 * towards the users and their expressions
 */
function onChangeWithFaceLandmarks(e) {
    withFaceLandmarks = $(e.target).prop('checked')
}

function onChangeHideBoundingBoxes(e) {
    withBoxes = !$(e.target).prop('checked')
}

// update the fps label
function updateTimeStats(timeInMs) {
    forwardTimes = [timeInMs].concat(forwardTimes).slice(0, 30);
    const avgTimeInMs = forwardTimes.reduce((total, t) => total + t) / forwardTimes.length;
    $('#time').val(`${Math.round(avgTimeInMs)} ms`);
    $('#fps').val(`${faceapi.round(1000 / avgTimeInMs)}`);
}

// return the feature of the username
// function getFeatures(username, password) {
//     let result = axios.get("http://162.105.142.2:8000/api/persons/?name=" + username,
//         {
//             auth: {
//                 username: username,
//                 password: password
//             }
//         })
//         .then(function (response) {
//             return response.data.results[0].features;
//         })
//         .catch(function (e) {
//             console.log(e);
//         });
//     return result;
// }

// calculate the average of the cols
function calculateAverCol(array){
    let averArray = new Array();
    for(let j=0;j<array[j%array.length].length;j++) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i][j];
        }
        let aver = sum / array.length;
        averArray.push(aver);
    }
    return averArray;
}

// cycle function of video capture
async function onPlay(videoEl) {

    if (!videoEl.currentTime || videoEl.paused || videoEl.ended || !isFaceDetectionModelLoaded())
        return setTimeout(() => onPlay(videoEl));

    const options = getFaceDetectorOptions();
    const ts = Date.now();
    const drawBoxes = withBoxes;
    const drawLandmarks = withFaceLandmarks;
    // operations to detect the facelandmarks, faceExpressions, faceDescriptors
    let results = await faceapi.detectAllFaces(videoEl, options)
        .withFaceLandmarks()
        .withFaceExpressions()
        .withFaceDescriptors();
    updateTimeStats(Date.now() - ts);
    const canvas = $('#overlay').get(0);
    const dims = faceapi.matchDimensions(canvas, videoEl, true);

    // serialize the recognition results
    const resizedResults = faceapi.resizeResults(results, dims);
    // get the features of the reference user stored in the SessionStorage
    // pasre the data into Float32Array
    // unite the username and the features referred before
    if (collected < faceCount && resizedResults.length === 1){
        faceArray.push(resizedResults[0].descriptor);
        collected++;

    }else if (collected === faceCount){
        collected++;
        labeldFeatures = new Float32Array(calculateAverCol(faceArray));
        console.log(labeldFeatures);
    }else{
        const labeledDescriptors = [
            new faceapi.LabeledFaceDescriptors(
                username,
                [labeldFeatures]
            ),
        ];

        // create a object to store the username
        // TODO: simplify the names
        let faceObject = {};
        faceObject.names = [];
        if (results.length) {
            // realize the faceMatcher to match the face captured in the camera with the labeledFeatures
            faceMatcher = new faceapi.FaceMatcher(labeledDescriptors);
            resizedResults.forEach(({detection, descriptor, expressions}) => {
                const expression = Object.keys(expressions).sort(function (a, b) {
                    return expressions[b] - expressions[a]
                })[0];
                expr = expression;

                // get the label: username or unknown, pick one in the bi-set
                const label = faceMatcher.findBestMatch(descriptor).toString();
                // console.log(label);
                faceObject.names.push((label !== "unknown") ? label.split(' ')[0] : label);
                const options = {label};
                const drawBox = new faceapi.draw.DrawBox(detection.box, options);
                drawBox.draw(canvas);
            });
        }

        // note the user that he is absent in the camera in 50 frames
        if (-1 === faceObject.names.indexOf(username)) {
            absentCount++;
            if (absentCount === 5) {
                // let audioUrl = "http://audio.dict.cc/speak.audio.php?type=mp3&lang=en&text=where are you?";
                // $('#audio').attr('src', audioUrl);
                // let audio = $('#audio');
                absentCount = 0;
                is_absent = true;
            }
        }
        else {
            is_absent = false;
        }

        // draw the boxes
        if (drawBoxes) {
            // faceapi.draw.drawDetections(canvas, resizedResults);
            faceapi.draw.drawFaceExpressions(canvas, resizedResults, minConfidence);
        }
        if (drawLandmarks) {
            faceapi.draw.drawFaceLandmarks(canvas, resizedResults);
            faceapi.draw.drawFaceExpressions(canvas, resizedResults, minConfidence);
        }
        let now = new Date().getTime();
        is_speaking = !(stop !== null && now > stop || start === null);
        let payload = {"is_absent":is_absent,"expression":expr,"timestamp": now, "is_speaking":is_speaking}
        deliverStatus(payload);
    }
    setTimeout(() => onPlay(videoEl));
}

// the async function the initalize the Model
async function run() {
    await changeFaceDetector(SSD_MOBILENETV1);
    await faceapi.loadFaceLandmarkModel('models');
    await faceapi.loadFaceExpressionModel('models');
    await faceapi.loadFaceRecognitionModel('models');
    changeInputSize(224);

    // try to access users webcam and stream the images
    // to the video element
    const stream = await navigator.mediaDevices.getUserMedia({video: {width: 400, height: 225}});
    const videoEl = $('#inputVideo').get(0);
    videoEl.srcObject = stream;
}


/**
 * Section Split
 * Part: voice activity detection
 * based on vad.js
 * detect the voice who may be cheating
 * with the function of interactive communication
 * json format deliverd
 */

// Create AudioContext
window.AudioContext = window.AudioContext || window.webkitAudioContext;
let audioContext = new AudioContext();


// Define function called by getUserMedia
function startUserMedia(stream) {
    // Create MediaStreamAudioSourceNode
    audioContext.resume().then(() => {
        let source = audioContext.createMediaStreamSource(stream);

        // Setup options
        let options = {
            source: source,
            voice_start: function () {
                console.log('voice_start');
                start = new Date().getTime();
            },
            voice_stop: function () {
                console.log('voice_stop');
                stop = new Date().getTime();
                console.log(stop-start);
                start = null;
                stop = null;
            },
        };

        // Create VAD
        let vad = new VAD(options);
    });
}

// Ask for audio device
navigator.getUserMedia = navigator.getUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.webkitGetUserMedia;
navigator.getUserMedia({audio: true}, startUserMedia, function(e) {
    console.log("No live audio input in this browser: " + e);
});


/**
 * Section Split
 * Communicate with the server
 * send json
 * @is_absent
 * @expression
 * @is_speaking
 * @timestamp
 * TODO: @content, @keyframe
 */
function deliverStatus(payload){
    if (payloadLength === 0) starttime = new Date().getTime();
    payloads.push(payload);
    if (payloadLength > 200){
        endtime = new Date().getTime();
        let status = {"seq": seq++, "start": starttime, "end": endtime, "status": payloads};
        let jsonObj = JSON.stringify(status);
        //deliver jsonobj
        console.log(jsonObj);
        payloadLength = 0;
        payloads.length = 0;
    } else {
        payloadLength++;
    }
}

$(document).ready(function () {
    initFaceDetectionControls();
    run();
});