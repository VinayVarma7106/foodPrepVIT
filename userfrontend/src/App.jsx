import { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import LoginPopup from './components/LoginPopup/LoginPopup';

import Home from './screens/Home/Home';
import Cart from './screens/Cart/Cart';
import Verify from './screens/Verify/Verify';
import PlaceOrder from './screens/PlaceOrder/PlaceOrder';
import MyOrders from './screens/MyOrders/MyOrders';

import { StoreContext } from './context/StoreContext';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const { loading } = useContext(StoreContext); // get loading from context

  if (loading) {
    return (
      <div className="loading-screen">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <ToastContainer />
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<MyOrders />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
