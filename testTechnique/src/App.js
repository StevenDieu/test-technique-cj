import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/HomePage/HomePage";

const App = () => {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
