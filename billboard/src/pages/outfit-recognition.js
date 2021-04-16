let canvas, ctx, saveButton, clearButton;
let pos = { x: 0, y: 0 };
let rawImage;
let model;
let mousePressed = false;
let lastX, lastY;

//load model to the browser
const main = async () => {
  model = await tf.loadLayersModel("http://127.0.0.1:8080/model/outfit-detection-model/model.json");
  console.log(model.summary());

  //Enable webcam:
  enableWebcamButton.classList.remove('invisible');
  enableWebcamButton.innerHTML = 'Start camera';
  
  predictWebcam();
};

const video = document.getElementById('webcam');
const liveView = document.getElementById('liveView');
const webcamPredictions = document.getElementById('webcamPredictions');
const demosSection = document.getElementById('demos');
const enableWebcamButton = document.getElementById('webcamButton');

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
var vidWidth = 0;
var vidHeight = 0;
var xStart = 0;
var yStart = 0;

var modelHasLoaded = false;

// Check if webcam access is supported.
function getUserMediaSupported() {
  return !!(navigator.mediaDevices &&
    navigator.mediaDevices.getUserMedia);
}

// If webcam supported, add event listener to button for when user
// wants to activate it to call enableCam function
if (getUserMediaSupported()) {
  const enableWebcamButton = document.getElementById('webcamButton');
  enableWebcamButton.addEventListener('click', enableCam);
} else {
  console.warn('getUserMedia() is not supported by your browser');
}

//Enable the live webcam view and start classification.
function enableCam(event) {
  // Only continue if the COCO-SSD has finished loading.
  if (!model) {
    console.log('Wait! Model is not loaded yet')
    return;
  }
  
  // Hide the button once clicked.
  enableWebcamButton.classList.add('removed');
  
  // getUsermedia parameters to force video but not audio.
  const constraints = {
    video: true
  };

  navigator.mediaDevices.getUserMedia({
    video: {
      facingMode: "environment"
    },
  }).then(stream => {
    let $video = document.querySelector('video');
    $video.srcObject = stream;
    $video.onloadedmetadata = () => {
      vidWidth = $video.videoHeight;
      vidHeight = $video.videoWidth;
      //The start position of the video (from top left corner of the viewport)
      xStart = Math.floor((vw - vidWidth) / 2);
      yStart = (Math.floor((vh - vidHeight) / 2)>=0) ? (Math.floor((vh - vidHeight) / 2)):0;
      $video.play();
      //Attach detection model to loaded data event:
      $video.addEventListener('loadeddata', predictWebcam);
    }
  });
}

var children = [];

function predict() {
  let raw = tf.browser.fromPixels(rawImage, 1);
  let resize = tf.image.resizeBilinear(raw, [28, 28]);
  let tensor = resize.expandDims(0);
  let predictions = model.predict(tensor);
  let pindex = tf.argMax(predictions, 1).dataSync();
  var classNames = [
    "T-shirt/top",
    "Trouser",
    "Pullover",
    "Dress",
    "Coat",
    "Sandal",
    "Shirt",
    "Sneaker",
    "Bag",
    "Ankle boot",
  ];

  alert(classNames[pindex]);
}

function init() {
  canvas = document.getElementById("canvas");
  rawImage = document.getElementById("canvasimg");
  ctx = canvas.getContext("2d");
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 280, 280);

  $("#canvas").mousedown(function (e) {
    console.log(1);
    mousePressed = true;
    Draw(
      e.pageX - $(this).offset().left,
      e.pageY - $(this).offset().top,
      false
    );
  });

  $("#canvas").mousemove(function (e) {
    if (mousePressed) {
      Draw(
        e.pageX - $(this).offset().left,
        e.pageY - $(this).offset().top,
        true
      );
    }
  });

  $("#canvas").mouseup(function (e) {
    mousePressed = false;
  });
  $("#canvas").mouseleave(function (e) {
    mousePressed = false;
  });

  saveButton = document.getElementById("sb");
  saveButton.addEventListener("click", predict);
  clearButton = document.getElementById("cb");
  clearButton.addEventListener("click", erase);
}

function Draw(x, y, isDown) {
  if (isDown) {
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 24;
    ctx.lineJoin = "round";
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    rawImage.src = canvas.toDataURL("image/png");
  }
  lastX = x;
  lastY = y;
}

function erase() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 280, 280);
}


