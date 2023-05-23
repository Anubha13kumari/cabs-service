import React, { useState } from "react";
import "./CabSelect.css";

import bg1 from "../../assets/bg1.webp";
import car from "../../assets/360-spin.webp";

const CabSelect = ({ pickUp, destination }) => {
  const [seats, setSeats] = useState(4);
  const checkSeats = (e) => {
    setSeats(e.target.value)
  };
  return (
    <div className="cabSelect">
      <div className="cabSelect__container">
        <div className="locations">
          <div className="c1">
            <div className="c1_2">
              <div className="circle1"></div>
              <p className="c1_p1">|</p>
            </div>
            <h3>{pickUp}</h3>
          </div>

          <div className="c2">
            <div className="c2_2">
              <div className="circle2"></div>
              <p className="c2_p1">|</p>
            </div>
            <h3>{destination}</h3>
          </div>
        </div>
        <div className="cab_details">
          <h2>
            Distance : <span>1.7km</span>
          </h2>
          <h2>
            Price: <span>₹67</span>
          </h2>
          <h2>
            Time: <span>22min</span>
          </h2>
          <button>Confirm ride</button>
        </div>
        <div className="cab_footer">
          <img src={car} alt="" />
          <div className="cab_footer_info">
            <h3>Vintage Alto</h3>
            <h5>BR-06-BH-9971</h5>
          </div>
          <div className="seats">
            <h3>{`Seats : ${seats}`}</h3>
            <input
              type="range"
              name=""
              id=""
              max={6}
              min={1}
              value={seats}
              onChange={(e) => checkSeats(e)}
            />
          </div>
        </div>
      </div>
      <img className="bgCab" src={bg1} alt="" />
    </div>
  );
};

export default CabSelect;
