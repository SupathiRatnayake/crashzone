import React, {Component, useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



class Main extends React.Component{
    constructor(props){
        super(props)

        this.streamCamVideo= this.streamCamVideo.bind(this)
    }
    streamCamVideo() {
        var constraints = { audio: false, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            var video = document.querySelector("video");
    
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
              video.play();
            };
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); 
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