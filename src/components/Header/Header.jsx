import React from "react";
import "../../App.css";
import bg from "../../assets/bg.jpg";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import PinIcon from "@mui/icons-material/Flag";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import CabSelect from "../CabSelect/CabSelect";

const Header = () => {
  const [pickUp, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [isCabSelect, setIsCabSelect] = useState(false);
  const confirm = () => {
    if(pickUp !== "" && destination !== ""){
        setIsCabSelect(true)
    }else{
        alert("Enter a valid location!")
    }
  };
  if (!isCabSelect) {
    return (
      <div className="head">
        <img className="bg" src={bg} alt="" />
        <div className="ride">
          <h1>Get on a ride in just a few clicks!</h1>
          <h2 className="p1">Pick-Up Location</h2>
          <p>(don't include muzaffarpur)</p>
          <div>
            <input
              type="text"
              value={pickUp}
              onChange={(e) => setPickUp(e.target.value)}
            />
            <Button variant="text">
              <GpsFixedIcon />
            </Button>
          </div>
          <h2>Drop Location</h2>
          <p>(don't include muzaffarpur)</p>
          <div>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
            <Button variant="text">
              <PinIcon />
            </Button>
          </div>

          <button onClick={() => confirm()}>Book Now</button>
        </div>
      </div>
    );
  }else{
    return (
        <CabSelect pickUp={pickUp} destination={destination}/>
      )
  }
};

export default Header;
