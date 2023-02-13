import React from 'react'
import image from '../Image resources/logo-english.png'
import './header.css'
import PersonIcon from '@mui/icons-material/Person';
const Header = () => {
  return (
    <div className='top-header'>
        <div className='img'>
            <img src={image} id='logo' alt='logo'/>
        </div>
        <div className='login'>
            <PersonIcon/>
            <p>  Already a member</p>
            <button className='login-button'>Log In</button>
        </div>
        
    </div>
  )
}

export default Header