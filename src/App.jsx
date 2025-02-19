import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Site2 from "./components/Site-2";

// Optionally, if you want a global Header across both pages:
import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* If you want the same Header on every route, put it here */}
      <Header />

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        {/* Site 2 route */}
        <Route path="/site-2" element={<Site2 />} />
      </Routes>
    </Router>
  );
}

export default App;
