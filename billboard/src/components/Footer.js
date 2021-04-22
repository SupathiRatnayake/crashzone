import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <div class="footer-dark">
                <footer>
                    <div>
                        <div class="footerInfo">
                            <h4>Info </h4>
                            <ul class="footerLink">
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/team">Team</Link></li>
                            </ul>
                        </div>
                        <div>
                            <img  class="footerimg" src="assest/logo2.png" alt="l2"></img>
                        </div>
                        <div class="footerComp">
                            <h3>ADS GO</h3>
                            <p>We are here to provide good service to the customer <br></br>
                            and  the  advertiser by  contacting  them  in smart way <br></br>
                            and  help advertiser  to  promote  thier product  to the <br>
                            </br>customer easliy ad eficiently</p>
                        </div>
                        <div claa="icons">
                            <img class="fbicon" src="assest/facebook.png" alt="fb"></img>
                            <img class="twittericon" src="assest/twitter.png" alt="fb"></img>
                            <img class="wtapicon" src="assest/whatsapp.png" alt="fb"></img>
                            <img class="callicon" src="assest/call_icon.png" alt="fb"></img>
                        </div>
                    </div>
                </footer>
                <p class="copyrightText">ADS GO  ©  2021</p>
            </div>
        );
    }
}

export default Footer;