import React, { useState } from "react";
import { FiShoppingBag, FiMenu } from "react-icons/fi";
import "../../css/Specials.css";
import logo from "../../assets/logo with name.png";
import { useBasket } from "../../context/BasketContext";
import { useNavigate } from "react-router-dom";

/* hot drinks */
import hotElixir from "../../assets/specials/elixir (hot).png";

/* iced drinks */
import icedElixir from "../../assets/specials/elixir (cold).png";
import SummerHaze from "../../assets/specials/summer haze.png";
import Sunset from "../../assets/specials/sunset.png";
import Passionfruit from "../../assets/specials/passion fruit americano.png";
import EspressoTonic from "../../assets/specials/espresso tonic.png";
import Isla from "../../assets/specials/isla.png";
import Sunkissed from "../../assets/specials/sunkissed.png";
import Avogato from "../../assets/specials/avogato.png";
import Navbar from "../../components/Navbar";

function Specials() {
  const { addToBasket } = useBasket();
  const navigate = useNavigate();

  const icedSpecials = [
    { name: "Elixir", price: "₱150", img: icedElixir },
    { name: "Summer Haze", price: "₱180", img: SummerHaze },
    { name: "Sunset", price: "₱190", img: Sunset },
    { name: "Passion Fruit Americano", price: "₱150", img: Passionfruit },
    { name: "Espresso Tonic", price: "₱195", img: EspressoTonic },
    { name: "Isla", price: "₱225", img: Isla },
    { name: "Sunkissed", price: "₱225", img: Sunkissed },
    { name: "Avo-gato", price: "₱150", img: Avogato },
  ];

  const hotSpecials = [
    { name: "Elixir", price: "₱150", img: hotElixir },
  ];

  const allItems = [...hotSpecials, ...icedSpecials];
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
    setTimeout(() => setAlert(null), 3000); 
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
      <div className="specials-card" key={index}>
        <img src={item.img} alt={item.name} className="specials-img" />
        <p className="specials-name">{item.name}</p>
        <p className="specials-price">{item.price}</p>

        <div className="specials-controls">
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
    <div className="specials-page">
      
      {alert && (
        <div className="alert-popup">
          {alert}
        </div>
      )}

      {/* <header className="specials-header">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={backToHome}/>
        </div>
        <div className="icons">
          <FiShoppingBag className="icon" onClick={handleBasket} />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <h1 className="specials-title">ALTITUD SPECIALS</h1>
      <p className="specials-subtitle">
        Are you craving something <span className="hot">hot</span> or{" "}
        <span className="cold">cold</span>?
      </p>

      <h2 className="specials-section">Hot Specials</h2>
      <hr />
      <div className="specials-grid">{renderItems(hotSpecials, 0)}</div>

      <h2 className="specials-section">Iced Specials</h2>
      <hr />
      <div className="specials-grid">
        {renderItems(icedSpecials, hotSpecials.length)}
      </div>
    </div>
    </>
  );
}

export default Specials;
