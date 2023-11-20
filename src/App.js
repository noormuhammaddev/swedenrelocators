import React from 'react';
// import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter, Route, Routes, Outlet,Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/about" element={ <About />} />
        </Routes>
      </BrowserRouter>
      <Outlet />
    </div>
  );
}

export default App;
