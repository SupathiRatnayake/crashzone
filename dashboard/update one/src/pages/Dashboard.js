import React, { Component } from 'react';

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.streamCamVideo= this.streamCamVideo.bind(this)
      }
      streamCamVideo() {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            var video = document.querySelector("video");
            mediaStream.getAudioTracks()[0].enabled = false;
    
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
              video.play();
            };
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); // always check for errors at the end.
      }

      stopCamVideo() {
        var constraints = { audio: true, video: { width: 1280, height: 720 } };
        navigator.mediaDevices
          .getUserMedia(constraints)
          .then(function(mediaStream) {
            var video = document.querySelector("video");
            mediaStream.getAudioTracks()[0].enabled = false;
    
            video.srcObject = mediaStream;
            video.onloadedmetadata = function(e) {
              video.pause();

            };
          })
          .catch(function(err) {
            console.log(err.name + ": " + err.message);
          }); // always check for errors at the end.
      }

      

      
      render() {
        return (
          <div>
            <div calss="camera">
              <video autoPlay={true} id="videoElement" controls></video>
            </div>
            <br/>
                <button class="btnstart" onClick={this.streamCamVideo}>Start Video</button>
            <br/>
            <button class="btnstop" onClick={this.stopCamVideo}>Stop Video</button>
            <div class="footer">
                <div class="date">
                <div calss="date" id="datetime"></div>
                </div>
                <div class="time"  id="txt"></div>
            </div>
          </div>
        );
      }
}

export default Dashboard