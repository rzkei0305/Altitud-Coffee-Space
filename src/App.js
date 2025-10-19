import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Login/CreateAcc';
import Home from './pages/Homepage/Home';
import Menu from './pages/Homepage/Menu';
import About from './pages/Homepage/About';
import Pastries from './pages/Menus/Pastries';
import Coffee from './pages/Menus/Coffee';
import Noncoffee from './pages/Menus/Noncoffee';
import Specials from './pages/Menus/Specials';
import Footer from './components/Footer';
import Basket from './pages/Homepage/Basket';


function App() { 
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/*"
          element={
            <div className="main-layout">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/about" element={<About />} />
                <Route path="/pastries" element={<Pastries />} />
                <Route path="/coffees" element={<Coffee />} />
                <Route path="/noncoffees" element={<Noncoffee />} />
                <Route path="/specials" element={<Specials />} />
                <Route path="/basket" element={<Basket />} />
              </Routes>
              <Footer />
            </div>
          }
      />
    </Routes>
    </Router>
  );
}

export default App;
