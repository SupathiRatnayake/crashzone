import React,{Component} from 'react';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


class DisplayAd extends React.Component{

  constructor() {
    super();
    this.slideRef = React.createRef();
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.state = {
      current: 0
    };
  }

  //classification of audience
  requestAd(){
    let outfitClasses =[
      't-shirt',
      'shirt',
      'dress',
      'blouse',
      'skirt',
      'shoes',
      'shorts',
      'pants',
      'outwear'
    ]

    var predictionResult = '';


    if(predictionResult == 'shirt' || predictionResult == 'dress') {
      console.log('ad class = professional! ')
    }else if( predictionResult == 't-shirt' || predictionResult == 'shorts' || predictionResult == 'blouse') {
      console.log('ad class = non professional!')
    }else if(predictionResult == 'outwear' || predictionResult =='shoes'){
      console.log('ad class = casual!')
    }else{
      console.log('ad class = genaral!')
    }

  }

  //button to previous ad
  back() {
    this.slideRef.current.goBack();
  }

  //button to next button
  next() {
    this.slideRef.current.goNext();
  }

  
  render() {
    const properties = {
      duration: 5000,
      autoplay: false,
      transitionDuration: 500,
      arrows: false,
      infinite: true,
      easing: "ease",
      indicators: (i) => <div className="indicator">{i + 1}</div>
    };
    const slideImages = [

      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(1).jpg?alt=media&token=4f18d446-7507-4f75-83d7-fa84464dcaf8",
      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(2).jpg?alt=media&token=63295d2f-0a0a-49d3-803d-0d94f2cd5579",
      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(3).jpg?alt=media&token=6f8432a0-62fa-46e2-89c0-ec4c687c4991",
      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(4).jpg?alt=media&token=4b14993d-968e-4668-881d-1f2f3070d9cc",
      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(5).png?alt=media&token=c2b9a183-59e8-49ca-b2db-33075fe9cf8a",
      "https://firebasestorage.googleapis.com/v0/b/crash-zone.appspot.com/o/ad(6).png?alt=media&token=d8ee66d7-1453-4c9a-8ae2-51ee4d888c10",
  
    ];
    return (
      <div class="App">
        <div class="slide-container">
          <Slide ref={this.slideRef} {...properties}>
            {slideImages.map((each, index) => (
              <div key={index} className="each-slide">
                <div class="imgCard">
                <img className="lazy" src={each} alt="sample" />
                </div>
              </div>
            ))}
          </Slide>
        </div>

        <div className="slide-container buttons">
          <button onClick={this.back} type="button">
            Go Back
          </button>
          <button onClick={this.next} type="button">
            Go Next
          </button>
        </div>
      </div>
    );
  }

    
}
export default DisplayAd;