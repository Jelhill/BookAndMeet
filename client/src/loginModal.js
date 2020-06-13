import React from 'react';
import './App.css';

function LoginModal(){
    return (
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
    )
}

export default LoginModal;
