import React from 'react'
import'./newsletter.css'

export default function Newsletter() {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newletter and stay updated</p>
      <input type='email'/>
      <button>Subscribe</button>
    </div>
  )
}
