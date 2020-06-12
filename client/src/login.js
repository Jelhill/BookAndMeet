import React from 'react';
import './App.css';

function Login(){
 return (
    <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Welcome</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
            <div className='form-group'>
                <input type='text' className='form-control' placeholder='Username or email'/>
                <input type='password ' className='form-control' placeholder='enter your password'/>
                <p><a href = "#">forget password?</a></p>
                <input type= 'submit' className="form-control" value='Login'/>
            </div>
            {/* <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> */}
        </form>
      </div>
    </div>
  </div>
</div>
 )   
}

export default Login;