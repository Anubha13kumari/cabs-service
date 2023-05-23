import React from "react";
import "./CabSelect.css";

import bg from "../../assets/bg.jpg";

const CabSelect = ({ pickUp, destination }) => {
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
      </div>
      <img className="bgCab" src={bg} alt="" />
    </div>
  );
};

export default CabSelect;
