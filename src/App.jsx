import Home from "./Component/Home";
import About from "./Component/About";
import Product from "./Component/Product";
import Error from "./Component/Error";
import "./App.css";
import {Routes,Route, Link,}from "react-router-dom";
import React from "react";


function App() {
  return (
   
    <div className="App">
    
      <nav className="navbar navbar-light bg-light">
        <div  className="container-fluid">
        <ul>
          <li><Link to="/">ALL</Link></li>
          <li><Link to="/about">FULL STACK DEVELOPMENT</Link></li>
          <li><Link to="/product">DATA SCIENCE</Link></li>
          <li><Link to="/error">CYBER SECURITY</Link></li>
        </ul>
        </div>
      </nav>
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/*" element={<Error />} />
        </Routes>
        
    </div>
    
  );
}

export default App;