import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Selection extends React.Component{
    render(){
        return(
            <div class="selection">
                <div class="btnOne">
                <Link to="/dashboard">
                        Dashboard 
                </Link>
                </div>
                <div class="btnTwo">
                <br></br>
                <Link to="/ads">
                        Advertiesments 
                </Link>
                </div>
            </div>
        )
    }
} 

export default Selection