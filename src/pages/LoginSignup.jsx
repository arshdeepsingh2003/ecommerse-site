import React from 'react'
import './CSS/LoginSignup.css'
export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>SIGNUP</h1>
        <div className="loginsignup-fields">
          <input type=" text" placeholder='Your Name' />
          <input type="email" placeholder='Email Id' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Alrady Have An Account <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By Continuing I agree to the use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup;