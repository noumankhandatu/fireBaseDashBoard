import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderNft from "../components/orderNft";

import Dashboard from "../pages/dashboard";
const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/rca" exact element={<OrderNft />} />
      </Routes>
    </Router>
  );
};

export default Routing;
