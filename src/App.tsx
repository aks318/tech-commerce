import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./ArticleComp/Index";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products/Products";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <MainPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
