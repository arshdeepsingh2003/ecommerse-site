import React from 'react'
import './NewsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offer on Your Email</h1>
        <p>Subscribe to our newsletter and stay UPDATED</p>
        <div>
            <input type='email' placeholder='Your E-mail Id'/>
            <button>Subscribe</button>
        </div>

    </div>
  )
}
export default NewsLetter;