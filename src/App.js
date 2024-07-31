import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import Allstores from "./pages/Allstores";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/allstores" element={<Allstores />} />
      </Routes>
    </Router>
  );
};

export default App;
