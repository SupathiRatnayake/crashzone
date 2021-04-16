'use strict';

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById("snap");
const errorMsgElement = document.querySelector('span#errorMsg');

const constraints = {
    audio: false,
    video: {
        width: 300, height: 300
    }
};
var x = false;
// Access webcam
async function init() {
    
    try {
        
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        x = true;
        handleSuccess(stream);
        
    } catch (e) {
        errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
    }
}

// Success
function handleSuccess(stream) {
    window.stream = stream;
    video.srcObject = stream;
}

// Load init
init();


var i = 1;
console.log(x)
window.setInterval(function(){
    console.log(x)
    checkPermission();
   captureImage();
   i++;
}, 15000);

// Draw image

function checkPermission(){

    if(x == false){
        window.clearInterval();
    }

}
function captureImage(){

    if(x == true){
       
    context.canvas.hidden = true;
    context.filter = "grayscale(100%)";
    context.drawImage(video, 0, 0, 28, 28);
    
    
    
    var img    =  canvas.toDataURL("image/png");
    console.log(img)
   
    download(img,"test "+i+".png");
    
    }

}

var context = canvas.getContext('2d');
// snap.addEventListener("click", function() {
    
   
//          context.canvas.hidden = true;
//          context.filter = "grayscale(100%)";
//          context.drawImage(video, 0, 0, 300, 300);
         
         
         
//          var img    =  canvas.toDataURL("image/png");
//          console.log(img)
        
//         download(img,"test.png");
        
     
          
    
    
    
// });
function download(dataurl, filename) {
    var a = document.createElement("a");
    a.href = dataurl;
    a.setAttribute("download", filename);
    a.click();
  }

  function hello(){
      window.alert("It works");
  }