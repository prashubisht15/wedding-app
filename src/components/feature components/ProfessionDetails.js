import React from "react";
import './feature.css'
const ProfessionDetails = () => {
  return (
    <div className="all-fields">
      <div className="title">Profession</div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Occupation</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Designation</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Prospect's Annual Income</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>

      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Industry</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <input type="text" className="selection-fields" placeholder="Enter Company name"/>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Family Annual Income</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProfessionDetails;
