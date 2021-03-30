import React,{Component} from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

class DisplayAd extends React.Component{

      slideImages =  [
        {
          "name" : "Hits On Fire",
          "targetProfessionals": false,
          "imageURL": "",
        },
        {
          "name" : "So Far So Good",
          "targetProfessionals": true,
          "imageURL": "",
        },
        {
          "name" : "The Best of Me",
          "targetProfessionals": false,
          "imageURL": "",
        },
        {
          "name" : "Run to You",
          "targetProfessionals": true,
          "imageURL": "",
        },
        {
          "name" : "Summer of '69",
          "targetProfessionals": true,
          "imageURL": "",
        },
        {
          "name" : "Victim of Love",
          "targetProfessionals": false,
          "imageURL": "",
        }
      ];

       Slideshow = () => {
        return (
          <div className="slide-container">
            <Slide>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
                  <span>Slide 1</span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
                  <span>Slide 2</span>
                </div>
              </div>
              <div className="each-slide">
                <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
                  <span>Slide 3</span>
                </div>
              </div>
            </Slide>
          </div>
        )
    }

    render(){
        return(
            <div>
                <h1>Hello</h1>
            </div>

        )
    }
}
export default DisplayAd;