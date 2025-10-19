import React, { useState } from "react";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import "../../css/Coffee.css";
import logo from "../../assets/logo with name.png";
import { useBasket } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";

/* hot drinks */
import hotAmericano from "../../assets/coffee/Americano (hot).png";
import hotLatte from "../../assets/coffee/Latte (hot).png";
import hotSpanish from "../../assets/coffee/spiced spanish latte (hot).png";
import hotCaramel from "../../assets/coffee/caramel latte (hot).png";
import hotMocha from "../../assets/coffee/dark mocha (hot).png";
import hotHorchata from "../../assets/coffee/dirty horchata (hot).png";
import hotToasted from "../../assets/coffee/toasted dirty horchata (hot).png";
import hotMatcha from "../../assets/coffee/dirty matcha.png";

/* iced drinks */
import icedAmericano from "../../assets/coffee/Americano (cold).png";
import icedLatte from "../../assets/coffee/Latte (cold).png";
import icedSpanish from "../../assets/coffee/spiced spanish latte (cold).png";
import icedCaramel from "../../assets/coffee/caramel latte (cold).png";
import icedMocha from "../../assets/coffee/dark mocha (cold).png";
import icedHorchata from "../../assets/coffee/dirty horchata (cold).png";
import icedToasted from "../../assets/coffee/toasted dirty horchata (cold).png";
import icedMatcha from "../../assets/coffee/dirty matcha latte.png";
import Navbar from "../../components/Navbar";

function Coffee() {
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  const icedCoffee = [
    { name: "Americano", price: "₱110", img: icedAmericano },
    { name: "Latte", price: "₱140", img: icedLatte },
    { name: "Spiced Spanish Latte", price: "₱160", img: icedSpanish },
    { name: "Caramel Latte", price: "₱160", img: icedCaramel },
    { name: "Dark Mocha", price: "₱160", img: icedMocha },
    { name: "Dirty Horchata", price: "₱175", img: icedHorchata },
    { name: "Toasted Dirty Horchata", price: "₱235", img: icedToasted },
    { name: "Dirty Matcha", price: "₱240", img: icedMatcha },
  ];

  const hotCoffee = [
    { name: "Americano", price: "₱120", img: hotAmericano },
    { name: "Latte", price: "₱150", img: hotLatte },
    { name: "Spiced Spanish Latte", price: "₱170", img: hotSpanish },
    { name: "Caramel Latte", price: "₱170", img: hotCaramel },
    { name: "Dark Mocha", price: "₱170", img: hotMocha },
    { name: "Dirty Horchata", price: "₱185", img: hotHorchata },
    { name: "Toasted Dirty Horchata", price: "₱240", img: hotToasted },
    { name: "Dirty Matcha Latte", price: "₱215", img: hotMatcha },
  ];

  const [hotQuantities, setHotQuantities] = useState(hotCoffee.map(() => 1));
  const [icedQuantities, setIcedQuantities] = useState(icedCoffee.map(() => 1));
  const [alert, setAlert] = useState(null); 

  const handleAddToBasket = (item, quantity) => {
    addToBasket({ ...item, quantity });

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

  const renderItems = (items, quantities, setQuantities) =>
    items.map((item, index) => (
      <div className="coffee-card" key={index}>
        <img src={item.img} alt={item.name} className="coffee-img" />
        <p className="coffee-name">{item.name}</p>
        <p className="coffee-price">{item.price}</p>

        <div className="coffee-controls">
          <div className="qty-selector">
            <button
              onClick={() => {
                const newQty = [...quantities];
                if (newQty[index] > 1) newQty[index] -= 1;
                setQuantities(newQty);
              }}
            >
              -
            </button>
            <span>{quantities[index]}</span>
            <button
              onClick={() => {
                const newQty = [...quantities];
                newQty[index] += 1;
                setQuantities(newQty);
              }}
            >
              +
            </button>
          </div>
          <button
            className="add-btn"
            onClick={() => handleAddToBasket(item, quantities[index])}
          >
            Add to Basket
          </button>
        </div>
      </div>
    ));

  return (
    <>
    <Navbar />
    <div className="coffee-page">
      
      {alert && <div className="alert-popup">{alert}</div>}

      {/* <header className="coffee-header">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={backToHome} />
        </div>
        <div className="icons">
          <FiShoppingBag className="icon" onClick={handleBasket} />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <h1 className="coffee-title">COFFEE</h1>
      <p className="coffee-subtitle">
        Are you craving something <span className="hot">hot</span> or{" "}
        <span className="cold">cold</span>?
      </p>

      <h2 className="coffee-section">Hot Coffee</h2>
      <hr />
      <div className="coffee-grid">
        {renderItems(hotCoffee, hotQuantities, setHotQuantities)}
      </div>

      <h2 className="coffee-section">Iced Coffee</h2>
      <hr />
      <div className="coffee-grid">
        {renderItems(icedCoffee, icedQuantities, setIcedQuantities)}
      </div>
    </div>
    </>
  );
}

export default Coffee;
