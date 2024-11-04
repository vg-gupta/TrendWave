import React from 'react';
import './CSS/loginsignup.css';

const Loginsignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-feild">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Email Address'/>
          <input type='password' placeholder='Password'/>
        </div>
        <button>Continue</button>
        <p className='loginsign-login'> Already have an account? <span>Login Here</span> </p>
        <div className="loginsignup-agree">
          <p>
            By continuing, I agree to all the <a href="#">terms and conditions</a> and <a href="#">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loginsignup;
