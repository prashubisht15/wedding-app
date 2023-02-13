import React from 'react'
import image from '../../Image resources/logo-english.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div>
            <div className='footer-img'>
                <img src={image} id='logo' alt='logo'/>
            </div>
        </div>
        <hr className='line'/>
        <p>Copyright © 2022 ABP Weddings. All rights reserved</p>
    </div>
  )
}

export default Footer