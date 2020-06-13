import React from "react";
import "./App.css";
//import {Link} from 'react-router-dom';

function Landing2() {
  return (
    <div className="LandingWrapper">
      <div className="header">
        <div className="logoWrapper">
          <h2 className="logo">LOGO</h2>
        </div>

        <div className="loginSignupWrapper">
        <a data-toggle="modal"href  ="#loginmodal" className ="btn">Login</a>
        <a data-toggle ="modal" href ="#signupModal" className ="btn">Sign up</a>
          {/* <button
            type="button"
            className="btn btn-primary signup"
            data-toggle="modal"
            data-target="#signupModal"
          >
            Sign up
          </button> */}
</div>
</div>
      <div className="landingBody">
        <div className="landingSearch">
          <input type="text" placeholder="Conference room" id="search"></input>
        </div>
      </div>
    </div>
  );
}

export default Landing2;
