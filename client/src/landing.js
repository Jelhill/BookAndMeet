import React from 'react';
import './App.css';

function Landing() {
  return (
    <div className="LandingWrapper">
        <div className="header">
            <div className='logoWrapper'>
                <h2 className="logo">LOGO</h2> 
            </div>
            <div className="loginSignupWrapper">
                <a href="#" id="login">Login</a>
                <a href= "#" id ="signup">Sign up</a>
            </div>
        </div>
        <div className="landingBody">
            <div className="landingSearch">
                <input type ='text' placeholder= 'Conference room' id ="search"></input>
            </div>
        </div>
    </div>
  );
}

export default Landing;
