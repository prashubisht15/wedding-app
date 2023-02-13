import React, { useState } from "react";
import Astrological from "./components/feature components/Astrological";
import EducationDetails from "./components/feature components/EducationDetails";
import Personal from "./components/feature components/Personal";
import ProfessionDetails from "./components/feature components/ProfessionDetails";
import image1 from "./Image resources/Educationdetails.jpg";
import image2 from "./Image resources/Astro.jpg";
import "./details.css";
import Footer from "./components/feature components/Footer";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const navigate = useNavigate()
  const handleClick = () => {
      navigate(`/`);
    };
  const [count, setCount] = useState(1);
  const educationComponents = [];
  for (let i = 0; i < count; i++) {
    educationComponents.push(<EducationDetails />);
  }
  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
    <div className="details">
      <p className="info-text">
        A complete profile gathers more interest from other members. Fill in the
        details below to get more suitable matches
      </p>

      <div className="details-content">
        <div className="container">
          {educationComponents}
          <button onClick={handleIncrease} className="btn-css">
            +Add educational Details
          </button>
          {count > 1 ? (
            <button onClick={handleDecrease} className="btn-css">
              -Delete educational Details
            </button>
          ) : (
            <></>
          )}
          <ProfessionDetails />
          <hr className="line" />
          <h4 className="info-header">Astrological & Personal Information</h4>
          <Astrological />
          <Personal />
          <hr className="line" />
        </div>
        <div>
          <div className="two-images">
            <img src={image1} alt="first" />
          </div>
          <div className="two-images">
            <img src={image2} alt="first" />
          </div>
        </div>
      </div>
      <button className="home-btn" type="button" onClick={handleClick}>View My Home</button> 
    </div>
    <Footer/>
    </>
  );
};

export default Details;
