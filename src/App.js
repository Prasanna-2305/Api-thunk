import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './navbar/navbar';
import Home from './component/home';
import Strike from './component/strike';
import Api from './component/api'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/strike" element={<Strike />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
