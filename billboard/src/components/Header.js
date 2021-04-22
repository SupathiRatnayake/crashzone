import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    render(){
        return(
        <div>
            <header>
                <nav>
                <img class="imgLogo" src="assest/logo.png" alt="a">
                </img>
                    <ul>
                        <Link to="/"  class="navLink">Home</Link>
                        <Link to="/advertisements" class="navLink">Advertisements</Link>
                        <Link to= "/display"  class="navLink">DisplayAd</Link>
                        <a  class="navLink" href ="https://kwq2oy7mgnlb1tjbzla72w-on.drv.tw/www.sdgp-object-detection.com/outfit-recognition.html">Dashboard</a>
                    </ul>
              </nav>
            </header>
        </div>
        );
    }
}

export default Header;