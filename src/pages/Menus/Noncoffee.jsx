import React, { useState } from "react";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import "../../css/Noncoffee.css";
import logo from "../../assets/logo with name.png";
import { useBasket } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";

/* hot drinks */
import hotHorchata from "../../assets/noncoffee/horchata (hot).png";
import hotToasted from "../../assets/noncoffee/toasted horchata (hot).png";
import hotKeto from "../../assets/noncoffee/keto matcha (hot).png";

/* iced drinks */
import icedHorchata from "../../assets/noncoffee/horchata (cold).png";
import icedKeto from "../../assets/noncoffee/Keto Matcha.png";
import icedMilkyChocolate from "../../assets/noncoffee/milky chocolate.png";
import icedMilkyStrawb from "../../assets/noncoffee/milky strawberry.png";
import icedBerry from "../../assets/noncoffee/berry bliss.png";
import icedMango from "../../assets/noncoffee/mango iced tea.png";
import icedGreenTea from "../../assets/noncoffee/green tea lemonade.png";
import Navbar from "../../components/Navbar";

function NonCoffee() {
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  const hotNonCoffee = [
    { name: "Horchata", price: "₱140", img: hotHorchata },
    { name: "Toasted Horchata", price: "₱180", img: hotToasted },
    { name: "Keto Matcha", price: "₱169", img: hotKeto },
  ];

  const icedNonCoffee = [
    { name: "Horchata", price: "₱150", img: icedHorchata },
    { name: "Keto Matcha", price: "₱150", img: icedKeto },
    { name: "Milky Chocolate", price: "₱150", img: icedMilkyChocolate },
    { name: "Milky Strawberry", price: "₱150", img: icedMilkyStrawb },
    { name: "Berry Bliss", price: "₱160", img: icedBerry },
    { name: "Mango Iced Tea", price: "₱150", img: icedMango },
    { name: "Green Tea Lemonade", price: "₱150", img: icedGreenTea },
  ];

  const allItems = [...hotNonCoffee, ...icedNonCoffee];
  const [quantities, setQuantities] = useState(allItems.map(() => 1));
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

  const renderItems = (items, offset = 0) =>
    items.map((item, index) => (
      <div className="coffee-card" key={index}>
        <img src={item.img} alt={item.name} className="coffee-img" />
        <p className="coffee-name">{item.name}</p>
        <p className="coffee-price">{item.price}</p>

        <div className="coffee-controls">
          <div className="qty-selector">
            <button onClick={() => decreaseQty(index + offset)}>-</button>
            <span>{quantities[index + offset]}</span>
            <button onClick={() => increaseQty(index + offset)}>+</button>
          </div>
          <button
            className="add-btn"
            onClick={() => handleAddToBasket(item, index + offset)}
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
          <img src={logo} alt="Logo" onClick={backToHome}/>
        </div>
        <div className="icons">
          <FiShoppingBag className="icon" onClick={handleBasket} />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <h1 className="coffee-title">NON COFFEE</h1>
      <p className="coffee-subtitle">
        Are you craving something <span className="hot">chill</span> or{" "}
        <span className="cold">cozy</span>?
      </p>

      <h2 className="coffee-section">Hot Non Coffee</h2>
      <hr />
      <div className="coffee-grid">{renderItems(hotNonCoffee, 0)}</div>

      <h2 className="coffee-section">Iced Non Coffee</h2>
      <hr />
      <div className="coffee-grid">
        {renderItems(icedNonCoffee, hotNonCoffee.length)}
      </div>
    </div>
    </>
  );
}

export default NonCoffee;
