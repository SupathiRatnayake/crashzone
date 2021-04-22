import React, {Component, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import objectDetectionSketch from '../ObjectDetectionSketch';
import P5Wrapper from 'react-p5-wrapper';

class Main extends React.Component{
      render() {
        return (
          <div>
            <video id="videoId" mute autoPlay loop controls>
              <source src="assest/bgvideo.mp4" type="video/mp4"></source>
            </video>
          </div> 
        )
    }
}
export default Main; 