import React from "react";
import { FiShoppingBag, FiMenu} from "react-icons/fi";
import "../../css/About.css";
import Navbar from "../../components/Navbar";
import logo from "../../assets/logo with name.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import { useNavigate } from "react-router-dom";


function About() {
  const navigate = useNavigate();

    const backToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

    return (
    <>
    <Navbar />
    <div className="bg-radial-custom min-h flex flex-col">
      {/* <header className="about-header">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={backToHome}/>
        </div>
        <div className="icons">
          <FiShoppingBag className="icon" />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <main className="about-content">
        <h1>
          THE STORY OF <br/> <span className="highlight">ALTITUD</span>
        </h1>

        <div className="about-images">
            <div className="img-left">
                <img src={about2} alt="brewing" />
            </div>
            <div className="img-right">
                <img src={about1} alt="grinding" />
            </div>
        </div>

        <p className="about-text">
          Altitud began in our garage back in 2021, inspired by both our love
          for coffee and the mountains we climb. The name comes from "altitude,"
          symbolizing height and elevation — a nod to the complex flavors that
          higher elevations bring to coffee, our beans sourced from Philippine
          mountain origins, and our founders' passion as mountaineers. This
          spirit lives in our café's theme, blending industrial touches,
          greenery, and snapshots from our hikes.
        </p>
      </main>

    </div>
    </>
  );
}

export default About;
