import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
      <div className='newsletter'>
          <h1>Get Exclusive Offerws On Your Email</h1>
          <p>subscribe to our newletter and stay updated</p>
          <div className="">
              <input type="email" placeholder='Your Email id' />
              <button>Subscribe</button>
           </div>
      </div>
  )
}

export default NewsLetter