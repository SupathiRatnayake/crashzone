import React, {Component, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import objectDetectionSketch from '../ObjectDetectionSketch';

import P5Wrapper from 'react-p5-wrapper';

class Main extends React.Component{
    constructor(props){
        super(props)

        this.streamCamVideo= this.streamCamVideo.bind(this)
    }
    streamCamVideo() {


      window.location.href = "https://kwq2oy7mgnlb1tjbzla72w-on.drv.tw/www.sdgp-object-detection.com/outfit-recognition.html";
      
      }
    stopStream(){
        var constraints = { audio: false, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            var video = document.querySelector("video");
    
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
              video.pause();
            };
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); 
    }
      render() {
        return (
          <div>
              <Calendar class="cal"></Calendar>
            <div id="container">
              <video autoPlay={true} id="videoElement" controls></video>

            </div>
            <br/>
            <button class="startBtn"onClick={this.streamCamVideo}>Start streaming</button>
            <button class="stopBtn"onClick={this.stopStream}>stop streaming</button>
          </div>
        );
    }
}
export default Main