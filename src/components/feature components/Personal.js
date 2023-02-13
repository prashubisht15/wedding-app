import React from 'react'
import './feature.css'
const Personal = () => {
  return (
    <div className="all-fields">
      <div className="title">Personal</div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Highest Education</option>
            <option value="saab">Specialization</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Smoking</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Food Habbits</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Body type</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Drinking</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Personal