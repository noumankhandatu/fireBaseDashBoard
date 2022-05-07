import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header";
import Dashboard from "../pages/dashboard";
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default Routing;
