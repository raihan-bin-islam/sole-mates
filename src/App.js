import React from "react";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Men from "./routes/Men";
import Women from "./routes/Women";
import Kids from "./routes/Kids";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/men" element={<Men />}></Route>
          <Route path="/women" element={<Women />}></Route>
          <Route path="/kids" element={<Kids />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
