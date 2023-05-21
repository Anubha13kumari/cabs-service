import "./App.css";
import logo from "./assets/vintage.png";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <img src={logo} alt="" />
        <button>I'm a driver</button>
      </div>
      <div className="head">
        <img className="bg" src={bg} alt="" />
        <div className="ride">
          <h1>Get on a ride in just a few clicks!</h1>
          <h2>Pick-Up Location</h2>
          <input type="text" />
          <h2>Drop Location</h2>
          <input type="text" />
          <button>Book Now</button>

        </div>
      </div>
    </div>
  );
}

export default App;
