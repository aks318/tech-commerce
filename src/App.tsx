import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MainPage from "./ArticleComp/Index";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <MainPage /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
