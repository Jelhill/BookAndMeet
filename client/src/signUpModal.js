import React from 'react';
import './App.css';

function SignUpModal(){
    return (
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
    )
}

export default SignUpModal;