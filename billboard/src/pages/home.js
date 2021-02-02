import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div class="login-wrap">
	            <div class="login-html">
		            <input id="tab-1" type="radio" name="tab" class="sign-in" checked></input><label for="tab-1" class="tab">Sign In</label>
		            <input id="tab-2" type="radio" name="tab" class="sign-up"></input><label for="tab-2" class="tab">Sign Up</label>
		            <div class="login-form">
			            <div class="sign-in-htm">
				            <div class="group">
					            <label for="user" class="label">Username</label>
					            <input type="text" name="fname" id="user" type="text" class="input" required></input>
				            </div>
				            <div class="group">
					            <label for="pass" class="label">Password</label>
					            <input id="pass" type="password" class="input" data-type="password" required></input>
				            </div>
				            <div class="group">
					            <input id="check" type="checkbox" class="check" checked></input>
					            <label for="check"><span class="icon"></span> Keep me Signed in</label>
				            </div>
				            <div class="group">
					            <input value="Submit" type="submit" class="button" ></input>
				            </div>
				            <div class="hr"></div>
				            <div class="foot-lnk">
				            	<a href="#forgot">Forgot Password?</a>
				            </div>
			            </div>
			            <div class="sign-up-htm">
				            <div class="group">
				            	<label for="user" class="label">Username</label>
					            <input id="user" type="text" class="input" required></input>
				            </div>
				            <div class="group">
					            <label for="pass" class="label">Password</label>
					            <input id="pass" type="password" class="input" data-type="password" required></input>
				            </div>
				            <div class="group">
				            	<label for="pass" class="label">Repeat Password</label>
				            	<input id="pass" type="password" class="input" data-type="password" required></input>
	            			</div>
	            			<div class="group">
	            				<label for="pass" class="label">Email Address</label>
	            				<input id="pass" type="text" class="input" required></input>
	            			</div>
	            			<div class="group">
	            				<input type="submit" class="button" value="Sign Up" onClick to='/main'></input>
	            			</div>
	            			<div class="hr"></div>
	            			<div class="foot-lnk">
                            <Link to="/main">next</Link><br></br>
		            			<label for="tab-1">Already Member?</label>
	            			</div>
	            		</div>
	            	</div>
	            </div>
            </div>
        );
        }
    }

export default Home;