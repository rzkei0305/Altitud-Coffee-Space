import React, { useState } from "react";
import "../../css/Basket.css";
import { FiShoppingBag, FiMenu, FiXCircle, FiDelete } from "react-icons/fi";
import { useBasket } from "../../context/BasketContext";
import logo from "../../assets/logo with name.png";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Basket() {
  const { basket, removeFromBasket, clearBasket, updateQuantity } = useBasket();
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const subtotal = basket.reduce((acc, item) => {
    const price = parseInt(item.price.replace("₱", ""));
    return acc + price * item.quantity;
  }, 0);

  const backToHome = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <>
    <Navbar />
    <div className="basket-page">
      
      {/* <header className="basket-header">
        <div className="logo">
          <img src={logo} alt="Logo" onClick={backToHome}/>
        </div>
        <div className="basket-icons">
          <FiShoppingBag className="icon" />
          <FiMenu
            className="icon"
            onClick={() => setShowPayment(!showPayment)}
          />
        </div>
      </header> */}
      
      <div className="basket-content">
        
        <div className="basket-left">
          <h2 className="basket-title">Your Basket</h2>

          <div className="basket-items">
            {basket.length === 0 ? (
              <p className="empty-text">Your basket is empty!</p>
            ) : (
              basket.map((item, i) => (
                <div key={i} className="basket-card">
                  <img src={item.img} alt={item.name} className="basket-img" />
                  <div className="basket-info">
                    <h3>{item.name}</h3>
                    <div className="qty-container">
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.name, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="basket-price">
                    ₱ {parseInt(item.price.replace("₱", "")) * item.quantity}
                  </p>
<FiDelete
  className="delete-icon"
  onClick={() => removeFromBasket(item.name)}
  size={22}
/>

                </div>
              ))
            )}
            {basket.length > 0 && (
              <button onClick={clearBasket} className="clear-btn">
                Clear Basket
              </button>
            )}
          </div>
        </div>
        
        <div
          className={`basket-right ${
            showPayment ? "show-payment" : "hide-payment"
          }`}
        >
          <div className="payment-header">
            <h3>Payment</h3>
            <FiXCircle
              className="close-icon"
              onClick={() => setShowPayment(false)}
              size={20}
            />
          </div>

          <div className="payment-details">
            <div className="payment-row">
              <span>Subtotal</span>
              <span>₱ {subtotal}</span>
            </div>
            <div className="payment-row">
              <span>Discount</span>
              <span>₱ 0</span>
            </div>
            <hr />
            <div className="payment-row total">
              <span>Total</span>
              <span>₱ {subtotal}</span>
            </div>

            <div className="payment-mode">
              <h4>Choose your mode of payment</h4>
              <label>
                <input type="radio" name="payment" /> Cash on Delivery
              </label>
              <label>
                <input type="radio" name="payment" /> Gcash
              </label>
              <label>
                <input type="radio" name="payment" defaultChecked /> Debit Card
              </label>
            </div>

            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Basket;
