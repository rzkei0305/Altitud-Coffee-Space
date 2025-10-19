import React from "react";
import { FiShoppingBag, FiMenu,} from "react-icons/fi";
import "../../css/Menu.css";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo with name.png";
import Navbar from "../../components/Navbar";
import pastries from "../../assets/pastries.png";
import coffee from "../../assets/coffee.png";
import noncoffee from "../../assets/non -coffee.png";
import specials from "../../assets/specials.png";


function Menu() {
     const navigate = useNavigate();
  return (
    <>
    <Navbar />      
    <div className="menu-page">
       {/* <header className="menu-header">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="icons">
          <FiShoppingBag className="icon" />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <h1 className="menu-title">WHAT'S BREWING?</h1>

        <div className="menu-grid" >
          <div className="menu-card" onClick={() => navigate("/pastries")}> 
            <div className="menu-img-wrapper">
              <img src={pastries} alt="Pastries" />
            </div>
            <p className="menu-label">PASTRIES</p>
          </div>

          <div className="menu-card" onClick={() => navigate("/coffees")}>
            <div className="menu-img-wrapper">
              <img src={coffee} alt="Coffee" />
            </div>
            <p className="menu-label">COFFEE</p>
          </div>

          <div className="menu-card" onClick={() => navigate("/noncoffees")}>
            <div className="menu-img-wrapper">
              <img src={noncoffee} alt="Non Coffee" />
            </div>
            <p className="menu-label">NON COFFEE</p>
          </div>

          <div className="menu-card" onClick={() => navigate("/specials")}>
            <div className="menu-img-wrapper">
              <img src={specials} alt="Altitud Specials" />
            </div>
            <p className="menu-label">ALTITUD SPECIALS</p>
          </div>
        </div>
    </div>
    </>
  );
}

export default Menu;