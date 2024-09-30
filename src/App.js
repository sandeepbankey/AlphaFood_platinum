import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Service from './components/Service';
import Category from './components/Category';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/Home' element={<Home />}></Route>
          <Route path='/Category' element={<Category />}></Route>
          <Route path='/Service' element={<Service />}></Route>
          <Route path='/Cart' element={<Cart />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
