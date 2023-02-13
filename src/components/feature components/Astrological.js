import React from 'react'

const Astrological = () => {
  return (
    <div className="all-fields">
      <div className="title">Astrological</div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Mangalik</option>
            <option value="saab">Saab</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Gothra</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
      <div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Rashi</option>
            <option value="saab">Gan</option>
          </select>
        </div>
        <div>
          <select className="selection-fields">
            <option value="volvo">Gan</option>
            <option value="saab">Saab</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Astrological