import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingBag, FiMenu, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import "../../css/Home.css";
import Navbar from "../../components/Navbar";
import logo from "../../assets/logo with name.png";

import isla from "../../assets/home/isla.png";
import islaSplash from "../../assets/home/isla splash1.png";
import islaIce from "../../assets/home/isla-icecubes.png";
import sunkissed from "../../assets/home/sunkissed.png";
import sunkissedIce from "../../assets/home/sunkissed-icecubes.png";
import sunkissedSplash from "../../assets/home/sunkissed splash1.png";
import featuredBackground from "../../assets/home/section-2-bg.png";

import baristaBackground from "../../assets/home/barista-section-BG.png";
import Sunset from "../../assets/specials/sunset.png";
import icedCaramel from "../../assets/coffee/caramel latte (cold).png";
import icedHorchata from "../../assets/noncoffee/horchata (cold).png";
import SummerHaze from "../../assets/specials/summer haze.png";
import hotSpanish from "../../assets/coffee/spiced spanish latte (hot).png";


function Home() {
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  const handleOrder = (e) => {
    e.preventDefault();
    navigate("/menu");
  };

  const handleBasket = (e) => {
    e.preventDefault();
    navigate("/basket");
  };

  return (
    <>
    <Navbar />
    <div className="homepage">
      {/* <header className="login-header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="icons">
          <FiShoppingBag className="icon" onClick={handleBasket} />
          <FiMenu className="icon" />
        </div>
      </header> */}

      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Elevate your <span className="block">Coffee Experience</span>
          </h1>
          <p>Flavors from Higher Grounds</p>
          <button className="order-btn" onClick={handleOrder}>
            ORDER NOW
          </button>
        </div>
      </section>

      {/* FEATURED DRINKS SECTION */}
      <section
        id="featured-section"
        className="featured"
        style={{ backgroundImage: `url(${featuredBackground})` }}
      >
        <div className="featured-left">
          <h2 className="featured-heading">
            DON'T MISS OUT OUR <br />
            <span className="featured-highlight">SUMMER</span>
            <span className="featured-highlight2">SPECIALS</span>
          </h2>
        </div>

      <div className="featured-right">
        <div className="featured-drinks">

          <div className="drink-card group isla">
            <div className="drink-content">

              <div className="drink-stack relative">
                <img
                  src={isla}
                  alt="ISLA"
                  className="drink-image relative z-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-3"
                />
                <img
                  src={islaSplash}
                  alt="Splash"
                  className="splash absolute inset-0 w-full z-10 pointer-events-none"
                />
                <img
                  src={islaIce}
                  alt="Ice Cubes"
                  className="ice absolute inset-0 w-full z-20 pointer-events-none"
                />
              </div>

              <div className="drink-text text-left ml-8">
                <h3 className="drink-name">ISLA</h3>
                <p className="drink-desc">Lychee + Spro Fizz</p>
              </div>
            </div>
          </div>

          <div className="drink-card group sunkissed">
            <div className="drink-content flex-row-reverse">
       
              <div className="drink-stack relative">
                <img
                  src={sunkissed}
                  alt="SUNKISSED"
                  className="drink-image relative z-0 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-3"
                />
                <img
                  src={sunkissedSplash}
                  alt="Splash"
                  className="splash w-full mt-8 -ml-1 absolute inset-0 z-10 pointer-events-none"
                />
                <img
                  src={sunkissedIce}
                  alt="Ice Cubes"
                  className="ice absolute inset-0 w-full z-20 pointer-events-none"
                />
              </div>

              <div className="drink-text text-right ml-10">
                <h3 className="drink-name">SUNKISSED</h3>
                <p className="drink-desc">Dalandan + Iced Shaken Spro</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      </section>

      {/* BARISTA'S PICKS SECTION */}
      <section
        className="barista"
        style={{ backgroundImage: `url(${baristaBackground})` }}
      >

        <div className="barista-content">
          <h2 className="barista-title">
            <span className="text-[#FF5125] font-montserrat font-extrabold">BARISTA'S</span>{" "}
            <span className="text-black font-montserrat font-extrabold">PICKS</span>
          </h2>
          <p className="barista-sub">Try out our best sellers</p>

          <div className="carousel" ref={carouselRef}>

            <div className="barista-grid">
              <div className="barista-card">
                <div className="barista-top">
                  <img src={hotSpanish} alt="Spanish Latte" />
                  <h3 className="barista-name">SPICED SPANISH LATTE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Our version of Spanish latte, with a hint of cinnamon
                  </p>
                  <span className="barista-price">160 PHP</span>
                </div>
              </div>

            
              <div className="barista-card ">
                <div className="barista-top">
                  <img src={Sunset} alt="Sunset" />
                  <h3 className="barista-name">SUNSET</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">Espresso with a twist of orange</p>
                  <span className="barista-price">170 PHP</span>
                </div>
              </div>

            
              <div className="barista-card">
                <div className="barista-top">
                  <img src={icedCaramel} alt="Caramel Latte" />
                  <h3 className="barista-name">CARAMEL LATTE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Espresso and milk with the right amount of caramel
                  </p>
                  <span className="barista-price">170 PHP</span>
                </div>
              </div>

              <div className="barista-card">
                <div className="barista-top">
                  <img src={icedHorchata} alt="Horchata" />
                  <h3 className="barista-name">HORCHATA</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Oat and Grain milk blended with cinnamon and vanilla
                  </p>
                  <span className="barista-price">150 PHP</span>
                </div>
              </div>   

              <div className="barista-card">
                <div className="barista-top">
                  <img src={SummerHaze} alt="Summer Haze" />
                  <h3 className="barista-name">SUMMER HAZE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    A drink that will remind you of summer days: espresso, orange & strawberry.
                  </p>
                  <span className="barista-price">180 PHP</span>
                </div>
              </div>
            </div>

            {/* duplicated - for loop carousel */}
            <div aria-hidden className="barista-grid">
              <div className="barista-card">
                <div className="barista-top">
                  <img src={hotSpanish} alt="Spanish Latte" />
                  <h3 className="barista-name">SPICED SPANISH LATTE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Our version of Spanish latte, with a hint of cinnamon
                  </p>
                  <span className="barista-price">160 PHP</span>
                </div>
              </div>

            
              <div className="barista-card ">
                <div className="barista-top">
                  <img src={Sunset} alt="Sunset" />
                  <h3 className="barista-name">SUNSET</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">Espresso with a twist of orange</p>
                  <span className="barista-price">170 PHP</span>
                </div>
              </div>

            
              <div className="barista-card">
                <div className="barista-top">
                  <img src={icedCaramel} alt="Caramel Latte" />
                  <h3 className="barista-name">CARAMEL LATTE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Espresso and milk with the right amount of caramel
                  </p>
                  <span className="barista-price">170 PHP</span>
                </div>
              </div>

              <div className="barista-card">
                <div className="barista-top">
                  <img src={icedHorchata} alt="Horchata" />
                  <h3 className="barista-name">HORCHATA</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    Oat and Grain milk blended with cinnamon and vanilla
                  </p>
                  <span className="barista-price">150 PHP</span>
                </div>
              </div>   

              <div className="barista-card">
                <div className="barista-top">
                  <img src={SummerHaze} alt="Summer Haze" />
                  <h3 className="barista-name">SUMMER HAZE</h3>
                </div>
                <div className="barista-info">
                  <p className="barista-desc">
                    A drink that will remind you of summer days: espresso, orange & strawberry.
                  </p>
                  <span className="barista-price">180 PHP</span>
                </div>
              </div>
            </div>
          </div>

          <div className="barista-nav">
            <FiArrowLeftCircle className="barista-arrow" onClick={scrollLeft}/>
            <FiArrowRightCircle className="barista-arrow" onClick={scrollRight} />
          </div>
        </div>
      </section>

    </div>
    </>
  );
}

export default Home;
