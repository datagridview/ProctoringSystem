(function(Op1){var TQfGSH2=function(options){this['\x6f\x70\x74\x69\x6f\x6e\x73']={fftSize:512,bufferLen:512,voice_start:function(){},voice_stop:function(){},smoothingTimeConstant:0.99,energy_offset:1e-8,energy_threshold_ratio_pos:2,energy_threshold_ratio_neg:0.5,energy_integration:1,filter:[{f:20,v:0},{f:1000,v:1}],source:null,context:null,startStamp:null,endStamp:null};for(var Yv3 in CUCh4){if(CUCh4['\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79'](Yv3)){this['\x6f\x70\x74\x69\x6f\x6e\x73'][Yv3]=CUCh4[Yv3]}}if(!this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x6f\x75\x72\x63\x65'])throw new window["\x45\x72\x72\x6f\x72"]("\x54\x68\x65 \x6f\x70\x74\x69\x6f\x6e\x73 \x6d\x75\x73\x74 \x73\x70\x65\x63\x69\x66\x79 \x61 \x4d\x65\x64\x69\x61\x53\x74\x72\x65\x61\x6d\x41\x75\x64\x69\x6f\x53\x6f\x75\x72\x63\x65\x4e\x6f\x64\x65\x2e");this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x6f\x75\x72\x63\x65']['\x63\x6f\x6e\x74\x65\x78\x74'];this['\x68\x65\x72\x74\x7a\x50\x65\x72\x42\x69\x6e']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x73\x61\x6d\x70\x6c\x65\x52\x61\x74\x65']/this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x66\x66\x74\x53\x69\x7a\x65'];this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x46\x72\x65\x71\x75\x65\x6e\x63\x79']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x73\x61\x6d\x70\x6c\x65\x52\x61\x74\x65']/this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x62\x75\x66\x66\x65\x72\x4c\x65\x6e'];this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x50\x65\x72\x69\x6f\x64']=1/this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x46\x72\x65\x71\x75\x65\x6e\x63\x79'];var GytSk5=true;if(GytSk5)console['\x6c\x6f\x67']('\x56\x61\x64 \x7c \x73\x61\x6d\x70\x6c\x65\x52\x61\x74\x65\x3a '+this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x73\x61\x6d\x70\x6c\x65\x52\x61\x74\x65']+' \x7c \x68\x65\x72\x74\x7a\x50\x65\x72\x42\x69\x6e\x3a '+this['\x68\x65\x72\x74\x7a\x50\x65\x72\x42\x69\x6e']+' \x7c \x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x3a '+this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x46\x72\x65\x71\x75\x65\x6e\x63\x79']+' \x7c \x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x50\x65\x72\x69\x6f\x64\x3a '+this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x50\x65\x72\x69\x6f\x64']);this['\x73\x65\x74\x46\x69\x6c\x74\x65\x72']=function($dfSWeVI6){this['\x66\x69\x6c\x74\x65\x72']=[];for(var GXT7=0,jjyhNs8=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x66\x66\x74\x53\x69\x7a\x65']/2;GXT7<jjyhNs8;GXT7++){this['\x66\x69\x6c\x74\x65\x72'][GXT7]=0;for(var zmBu9=0,ns10=$dfSWeVI6['\x6c\x65\x6e\x67\x74\x68'];zmBu9<ns10;zmBu9++){if(GXT7*this['\x68\x65\x72\x74\x7a\x50\x65\x72\x42\x69\x6e']<$dfSWeVI6[zmBu9]['\x66']){this['\x66\x69\x6c\x74\x65\x72'][GXT7]=$dfSWeVI6[zmBu9]['\x76'];break}}}}this['\x73\x65\x74\x46\x69\x6c\x74\x65\x72'](this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x66\x69\x6c\x74\x65\x72']);this['\x72\x65\x61\x64\x79']={};this['\x76\x61\x64\x53\x74\x61\x74\x65']=false;this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74'];this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x70\x6f\x73']=this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']*this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x72\x61\x74\x69\x6f\x5f\x70\x6f\x73'];this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x6e\x65\x67']=this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']*this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x72\x61\x74\x69\x6f\x5f\x6e\x65\x67'];this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']=0;this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x61\x78']=10;this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x69\x6e']=-10;this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x53\x74\x61\x72\x74']=5;this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x45\x6e\x64']=-5;this['\x61\x6e\x61\x6c\x79\x73\x65\x72']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x63\x72\x65\x61\x74\x65\x41\x6e\x61\x6c\x79\x73\x65\x72']();this['\x61\x6e\x61\x6c\x79\x73\x65\x72']['\x73\x6d\x6f\x6f\x74\x68\x69\x6e\x67\x54\x69\x6d\x65\x43\x6f\x6e\x73\x74\x61\x6e\x74']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x6d\x6f\x6f\x74\x68\x69\x6e\x67\x54\x69\x6d\x65\x43\x6f\x6e\x73\x74\x61\x6e\x74'];this['\x61\x6e\x61\x6c\x79\x73\x65\x72']['\x66\x66\x74\x53\x69\x7a\x65']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x66\x66\x74\x53\x69\x7a\x65'];this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61']=new Float32Array(this['\x61\x6e\x61\x6c\x79\x73\x65\x72']['\x66\x72\x65\x71\x75\x65\x6e\x63\x79\x42\x69\x6e\x43\x6f\x75\x6e\x74']);this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61\x4c\x69\x6e\x65\x61\x72']=new Float32Array(this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61']['\x6c\x65\x6e\x67\x74\x68']);this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x6f\x75\x72\x63\x65']['\x63\x6f\x6e\x6e\x65\x63\x74'](this['\x61\x6e\x61\x6c\x79\x73\x65\x72']);this['\x73\x63\x72\x69\x70\x74\x50\x72\x6f\x63\x65\x73\x73\x6f\x72\x4e\x6f\x64\x65']=this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x63\x72\x65\x61\x74\x65\x53\x63\x72\x69\x70\x74\x50\x72\x6f\x63\x65\x73\x73\x6f\x72'](this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x62\x75\x66\x66\x65\x72\x4c\x65\x6e'],1,1);this['\x73\x63\x72\x69\x70\x74\x50\x72\x6f\x63\x65\x73\x73\x6f\x72\x4e\x6f\x64\x65']['\x63\x6f\x6e\x6e\x65\x63\x74'](this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x63\x6f\x6e\x74\x65\x78\x74']['\x64\x65\x73\x74\x69\x6e\x61\x74\x69\x6f\x6e']);var dMk11=this;this['\x73\x63\x72\x69\x70\x74\x50\x72\x6f\x63\x65\x73\x73\x6f\x72\x4e\x6f\x64\x65']['\x6f\x6e\x61\x75\x64\x69\x6f\x70\x72\x6f\x63\x65\x73\x73']=function(CWTr12){dMk11['\x61\x6e\x61\x6c\x79\x73\x65\x72']['\x67\x65\x74\x46\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61'](dMk11['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61']);dMk11['\x75\x70\x64\x61\x74\x65']();dMk11['\x6d\x6f\x6e\x69\x74\x6f\x72']()};this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x73\x6f\x75\x72\x63\x65']['\x63\x6f\x6e\x6e\x65\x63\x74'](this['\x73\x63\x72\x69\x70\x74\x50\x72\x6f\x63\x65\x73\x73\x6f\x72\x4e\x6f\x64\x65']);this['\x6c\x6f\x67\x67\x69\x6e\x67']=false;this['\x6c\x6f\x67\x5f\x69']=0;this['\x6c\x6f\x67\x5f\x6c\x69\x6d\x69\x74']=1000;this['\x74\x72\x69\x67\x67\x65\x72\x4c\x6f\x67']=function(JeotMsKw13){this['\x6c\x6f\x67\x67\x69\x6e\x67']=true;this['\x6c\x6f\x67\x5f\x69']=0;this['\x6c\x6f\x67\x5f\x6c\x69\x6d\x69\x74']=typeof JeotMsKw13==='\x6e\x75\x6d\x62\x65\x72'?JeotMsKw13:this['\x6c\x6f\x67\x5f\x6c\x69\x6d\x69\x74']}this['\x6c\x6f\x67']=function(msg){if(this['\x6c\x6f\x67\x67\x69\x6e\x67']&&this['\x6c\x6f\x67\x5f\x69']<this['\x6c\x6f\x67\x5f\x6c\x69\x6d\x69\x74']){this['\x6c\x6f\x67\x5f\x69']++;console['\x6c\x6f\x67'](msg)}else{this['\x6c\x6f\x67\x67\x69\x6e\x67']=false}}this['\x75\x70\x64\x61\x74\x65']=function(){var XOTswQv14=this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61'];for(var t15=0,dQ16=XOTswQv14['\x6c\x65\x6e\x67\x74\x68'];t15<dQ16;t15++){this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61\x4c\x69\x6e\x65\x61\x72'][t15]=window["\x4d\x61\x74\x68"]['\x70\x6f\x77'](10,XOTswQv14[t15]/10)}this['\x72\x65\x61\x64\x79']={}}this['\x67\x65\x74\x45\x6e\x65\x72\x67\x79']=function(){if(this['\x72\x65\x61\x64\x79']['\x65\x6e\x65\x72\x67\x79']){return this['\x65\x6e\x65\x72\x67\x79']}var RSUtmAvhl17=0;var rehh18=this['\x66\x6c\x6f\x61\x74\x46\x72\x65\x71\x75\x65\x6e\x63\x79\x44\x61\x74\x61\x4c\x69\x6e\x65\x61\x72'];for(var zTaLVYM19=0,hU20=rehh18['\x6c\x65\x6e\x67\x74\x68'];zTaLVYM19<hU20;zTaLVYM19++){RSUtmAvhl17+=this['\x66\x69\x6c\x74\x65\x72'][zTaLVYM19]*rehh18[zTaLVYM19]*rehh18[zTaLVYM19]}this['\x65\x6e\x65\x72\x67\x79']=RSUtmAvhl17;this['\x72\x65\x61\x64\x79']['\x65\x6e\x65\x72\x67\x79']=true;return RSUtmAvhl17}this['\x6d\x6f\x6e\x69\x74\x6f\x72']=function(){var NpSrsGT21=this['\x67\x65\x74\x45\x6e\x65\x72\x67\x79']();var P22=NpSrsGT21-this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74'];if(P22>this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x70\x6f\x73']){this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']=(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']+1>this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x61\x78'])?this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x61\x78']:this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']+1}else if(P22<-this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x6e\x65\x67']){this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']=(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']-1<this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x69\x6e'])?this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x4d\x69\x6e']:this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']-1}else{if(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']>0){this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']--}else if(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']<0){this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']++}}var o23=false,sjbD24=false;if(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']>this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x53\x74\x61\x72\x74']){o23=true}else if(this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']<this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x45\x6e\x64']){sjbD24=true}var GJbWV25=P22*this['\x69\x74\x65\x72\x61\x74\x69\x6f\x6e\x50\x65\x72\x69\x6f\x64']*this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x69\x6e\x74\x65\x67\x72\x61\x74\x69\x6f\x6e'];if(GJbWV25>0||!sjbD24){this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']+=GJbWV25}else{this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']+=GJbWV25*10}this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']=this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']<0?0:this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74'];this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x70\x6f\x73']=this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']*this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x72\x61\x74\x69\x6f\x5f\x70\x6f\x73'];this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x6e\x65\x67']=this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']*this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x72\x61\x74\x69\x6f\x5f\x6e\x65\x67'];if(o23&&!this['\x76\x61\x64\x53\x74\x61\x74\x65']){this['\x76\x61\x64\x53\x74\x61\x74\x65']=true;this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x76\x6f\x69\x63\x65\x5f\x73\x74\x61\x72\x74']()}if(sjbD24&&this['\x76\x61\x64\x53\x74\x61\x74\x65']){this['\x76\x61\x64\x53\x74\x61\x74\x65']=false;this['\x6f\x70\x74\x69\x6f\x6e\x73']['\x76\x6f\x69\x63\x65\x5f\x73\x74\x6f\x70']()}this['\x6c\x6f\x67']('\x65\x3a '+NpSrsGT21+' \x7c \x65\x5f\x6f\x66\x3a '+this['\x65\x6e\x65\x72\x67\x79\x5f\x6f\x66\x66\x73\x65\x74']+' \x7c \x65\x2b\x5f\x74\x68\x3a '+this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x70\x6f\x73']+' \x7c \x65\x2d\x5f\x74\x68\x3a '+this['\x65\x6e\x65\x72\x67\x79\x5f\x74\x68\x72\x65\x73\x68\x6f\x6c\x64\x5f\x6e\x65\x67']+' \x7c \x73\x69\x67\x6e\x61\x6c\x3a '+P22+' \x7c \x69\x6e\x74\x3a '+GJbWV25+' \x7c \x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64\x3a '+this['\x76\x6f\x69\x63\x65\x54\x72\x65\x6e\x64']+' \x7c \x73\x74\x61\x72\x74\x3a '+o23+' \x7c \x65\x6e\x64\x3a '+sjbD24);return P22}};Op1['\x56\x41\x44']=TQfGSH2})(Op1);