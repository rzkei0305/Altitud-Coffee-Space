import React, { useState } from "react";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import "../../css/Pastries.css";
import logo from "../../assets/logo with name.png";
import { useBasket } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";

import revelbar from "../../assets/pastries/revel bar.png";
import cookies from "../../assets/pastries/chocolate chip cookie.png";
import cheesecake from "../../assets/pastries/rustique cheesecake.png";
import chococroissant from "../../assets/pastries/chocolate croissant.png";
import beefpie from "../../assets/pastries/beef pie.png";
import tunapie from "../../assets/pastries/tuna pie.png";
import buttercroissant from "../../assets/pastries/butter croissant.png";
import chickenpie from "../../assets/pastries/chicken pie.png";
import flatbread from "../../assets/pastries/three cheese flat bread.png";
import pizzabread from "../../assets/pastries/pizza bread.png";
import Navbar from "../../components/Navbar";

function Pastries() {
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  const items = [
    { name: "Revel Bar", price: "₱75", img: revelbar },
    { name: "Chocolate Chip Cookies", price: "₱85", img: cookies },
    { name: "Rustique Cheesecake", price: "₱230", img: cheesecake },
    { name: "Chocolate Croissant", price: "₱160", img: chococroissant },
    { name: "Beef Pie", price: "₱130", img: beefpie },
    { name: "Tuna Pie", price: "₱130", img: tunapie },
    { name: "Butter Croissant", price: "₱155", img: buttercroissant },
    { name: "Chicken Pie", price: "₱130", img: chickenpie },
    { name: "Three Cheese Flat Bread", price: "₱160", img: flatbread },
    { name: "Pizza Bread", price: "₱155", img: pizzabread },
  ];

  const [quantities, setQuantities] = useState(items.map(() => 1));
  const [alert, setAlert] = useState(null); 

  const increaseQty = (index) => {
    const newQty = [...quantities];
    newQty[index] += 1;
    setQuantities(newQty);
  };

  const decreaseQty = (index) => {
    const newQty = [...quantities];
    if (newQty[index] > 1) newQty[index] -= 1;
    setQuantities(newQty);
  };

  const handleAddToBasket = (item, index) => {
    addToBasket({
      ...item,
      quantity: quantities[index],
    });

    
    setAlert(`${item.name} added to basket!`);
    setTimeout(() => setAlert(null), 2000);
  };

  const handleBasket = (e) => {
    e.preventDefault();
    navigate("/basket");
  };

    const backToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
    <Navbar/>
    <div className="pastries-page">
      
      {alert && <div className="alert-popup">{alert}</div>}

      {/* <header className="pastries-header">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={backToHome}/>
        </div>
        <div className="icons">
          <FiShoppingBag className="icon" onClick={handleBasket} />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <h1 className="pastries-title">PASTRIES</h1>
      <p className="pastries-subtitle">
        Are you craving something <span className="sweet">sweet</span> or{" "}
        <span className="savory">savory</span>?
      </p>

      <div className="pastries-grid">
        {items.map((item, index) => (
          <div key={index} className="pastry-card">
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p className="price">{item.price}</p>

            <div className="order-controls">
              <div className="qty-selector">
                <button onClick={() => decreaseQty(index)}>-</button>
                <span>{quantities[index]}</span>
                <button onClick={() => increaseQty(index)}>+</button>
              </div>
              <button
                className="add-btn"
                onClick={() => handleAddToBasket(item, index)}
              >
                Add to Basket
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Pastries;
