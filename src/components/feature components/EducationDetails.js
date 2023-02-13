import React from "react";
import "./feature.css";
const EducationDetails = () => {
  return (
    <div className="all-fields">
      <div className="title">Education</div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Highest Education</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Specialization</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <input type="text" className="selection-fields" placeholder="Name of College/University"/>
        </div>
        <div>
          <input  type="text" className="selection-fields" placeholder="Other (Specialization)"/>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default EducationDetails;
