import React from "react";
import "./App.css";
import MainPage from "./ArticleComp/Index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <MainPage />
    </React.Fragment>
  );
}

export default App;
