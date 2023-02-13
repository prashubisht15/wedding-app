import React from 'react'
import Header from './components/Header';
import Registration from './components/Registration';
import './home.css'
const Home = () => {
  return (
    <>
        <Header/>
        <div className='background'>
        <div className='banner-text'>
            <h1 className='banner-text1'>FIND YOUR 'THE ONE' <br/> WITH 100 YEARS OF <br/>ABP LEGACY </h1>
            <br/>
            <p className='banner-text2'>Begin the new chapter of life with India's top Marathi Matrimony Service</p>
        </div>
        <Registration/>
        </div>
    </>
  )
}

export default Home