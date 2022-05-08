import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FeatureArt from "../components/featureArt";
import Header from "../components/header";
import HotCollection from "../components/hotCollectionSection";
import ManageNft from "../components/manageNft";
import OrderNft from "../components/orderNft";

import Dashboard from "../pages/dashboard";
const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/rca" exact element={<OrderNft />} />
      </Routes>
    </Router>
  );
};

export default Routing;
