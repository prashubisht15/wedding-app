import React, { useState } from "react";
import "./registration.css";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const Registration = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [formData, setData] = useState({
    creater: "",
    fullname: "",
    gender: "",
    password: "",
    email: "",
    contact: "",
    year: null,
    month: null,
    date: null,
    pin: null,
    location: "",
    language: "",
  });
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    let flag = true
    if(formData==='female' && formData.year>2005)
    {
      enqueueSnackbar("Underage for female", { variant: "error" });
      flag = false;
    }
    if(formData==='female' && formData.year>2002)
    {
      enqueueSnackbar("Underage for male", { variant: "error" });
      flag = false;
    }
    if(formData.password.length<6)
    {
      enqueueSnackbar("Please enter good length of password", { variant: "error" });
      flag = false;
    }
    if(formData.contact.length!==10)
    {
      enqueueSnackbar("Please check contact number", { variant: "error" });
      flag = false;
    }
    if (validate(formData)&& flag) {
      navigate(`/details`);
    } else {
      enqueueSnackbar("Fill the from correctly", { variant: "Warning" });
    }
  };
  const updateVal = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const toggle = () => {
    setCheck(!check);
  };
  console.log(formData)
  const validate = (data) => {
    if (data.creater === "") {
      enqueueSnackbar("creater is a required field", { variant: "warning" });
      return false;
    } else if (data.fullname === "") {
      enqueueSnackbar("full name is a required field", { variant: "warning" });
      return false;
    } else if (data.gender === "") {
      enqueueSnackbar("gender is a required field", { variant: "warning" });
      return false;
    } else if (data.password === "") {
      enqueueSnackbar("full name is a required field", { variant: "warning" });
      return false;
    } else if (data.email === "") {
      enqueueSnackbar("full name is a required field", { variant: "warning" });
      return false;
    } else if (data.contact === "") {
      enqueueSnackbar("fill contact field according to format", {
        variant: "warning",
      });
      return false;
    } else if (
      data.year === null ||
      data.month === null ||
      data.date === null
    ) {
      enqueueSnackbar("date is a required field", { variant: "warning" });
      return false;
    } else if (data.pin === null) {
      enqueueSnackbar("pin code is a required field", { variant: "warning" });
      return false;
    } else if (data.location === "") {
      enqueueSnackbar("location is a required field", { variant: "warning" });
      return false;
    } else if (data.language === "") {
      enqueueSnackbar("full name is a required field", { variant: "warning" });
      return false;
    } else if (check === false) {
      enqueueSnackbar("check is a required field", { variant: "warning" });
    } else {
      return true;
    }
  };
  return (
    <div className="registration">
      <h4 className="text1">
        Register to best Marathi Matrimony Service For Free
      </h4>
      <p className="text2">
        Just fill out the form below & begin your new journey!
      </p>
      <form>
        <label htmlFor="creater">Profile Created By*</label>
        <input
          value={formData.creater}
          name="creater"
          className="inputs"
          id="creater"
          type="text"
          placeholder="Profile Created By*"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="name">Full Name*</label>
        <input
          value={formData.name}
          name="fullname"
          className="inputs"
          id="name"
          type="text"
          placeholder="Full Name*"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="gender">Gender*</label>
        <select
          className="inputs gender"
          value={formData.gender}
          name="gender"
          onChange={(e) => updateVal(e)}
        >
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
        <br />

        <label htmlFor="password">Password*</label>
        <input
          value={formData.password}
          name="password"
          className="inputs"
          type="password"
          id="password"
          placeholder="password"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="email">Email ID*</label>
        <input
          value={formData.email}
          name="email"
          className="inputs"
          type="email"
          id="email"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="phone">Mobile no*</label>
        <input
          value={formData.contact}
          name="contact"
          className="inputs"
          type="tel"
          id="phone"
          placeholder="1235467890"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="dob"> Date of Birth*</label>
        <span className="dob-container">
          <input
            value={formData.year}
            name="year"
            className="birthdate"
            type="number"
            placeholder="Year"
            min="1991"
            max="2002"
            onChange={(e) => updateVal(e)}
          />
          <input
            value={formData.month}
            className="birthdate"
            name="month"
            type="number"
            placeholder="month"
            min="1"
            max="12"
            onChange={(e) => updateVal(e)}
          />
          <input
            value={formData.date}
            name="date"
            className="birthdate"
            type="number"
            placeholder="date"
            min="1"
            max="31"
            onChange={(e) => updateVal(e)}
          />
        </span>
        <br />

        <label htmlFor="pin">PinCode*</label>
        <input
          value={formData.pin}
          name="pin"
          className="inputs"
          type="text"
          id="pin"
          placeholder="PinCode*"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="location">City,State & Country*</label>
        <input
          value={formData.location}
          name="location"
          className="inputs"
          type="text"
          id="location"
          placeholder="Enter your location"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <label htmlFor="language">Mother Tongue*</label>
        <input
          value={formData.language}
          name="language"
          className="inputs"
          type="text"
          id="language"
          placeholder="Mother Tongue"
          onChange={(e) => updateVal(e)}
        />
        <br />

        <input
          value={check}
          className="inputs"
          type="checkbox"
          id="accept"
          onChange={toggle}
        />
        <label htmlFor="accept">
          <p className="click">
            *By clicking on Register Now, you agree to the T&C and privacy
            policy
          </p>
        </label>
        <br />

        <button id="register-btn" onClick={handleClick}>
          Register Now
        </button>
      </form>
    </div>
  );
};

export default Registration;
