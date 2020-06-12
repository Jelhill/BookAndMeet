import React from "react";
import "./App.css";

function Landing2() {
  return (
    <div className="LandingWrapper">
      <div className="header">
        <div className="logoWrapper">
          <h2 className="logo">LOGO</h2>
        </div>

        <div className="loginSignupWrapper">
          <button
            type="button"
            className="btn btn-primary login"
            data-toggle="modal"
            data-target="#loginModal"
          >
            Login
          </button>
          <button
            type="button"
            className="btn btn-primary signup"
            data-toggle="modal"
            data-target="#signupModal"
          >
            Sign up
          </button>
                  <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                          <div className="modal-content">
                              <div className="modal-header">
                                  <h5 className="modal-title" id="modallabel">Welcome</h5>
                                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                      <span aria-hidden="true">&times;</span>
                                  </button>
                              </div>
                              <div className="modal-body">
                                  <form>
                                      <div className='form-group'>
                                          <input type='text' className='form-control forminput' placeholder='Username or email' />
                                          <input type='password ' className='form-control forminput' placeholder='enter your password' />
                                          <a href="#" className='forgetpassword'>forget password?</a><br/>
                                          <input type='submit' value='Login' className="submit" />
                                      </div>
                                      {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
                                  </form>
                                  <div className="alternatesignup"><p>Don't have an account<a href='#'> Sign up</a></p></div>
                                  <div className="googlesignup"><p className="googlesignuptext">Login with <a href='#'> Google</a></p></div>
                                  <div className="facebooksignup"><p className='facebooksignuptext'>Login with<a href='#'> Facebook</a></p></div>
                              </div>
                          </div>
                      </div>
                  </div>
<div className="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="signupModalLabel">Sign up to continue</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
            <div className='form-group'>
                <input type= 'text' className='form-control forminput' placeholder="Firstname"/>
                <input type='text' className='form-control formiput' placeholder='Lastname'/>
                <input type='text' className='form-control forminput' placeholder='Othername'/>
                <input type='password' className='form-control forminput' placeholder='password'/>
                <input type = 'submit' value='Create Account'/>
            </div>
        </form>
        <p>Already have an account? <a href='#'>Login</a></p>
        <div><p>Sign up with <a href='#'>Facebook</a></p></div>
        <div><p>Sign up with <a href='#'>Google</a></p></div>
      </div>
    </div>
  </div>
</div>

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
