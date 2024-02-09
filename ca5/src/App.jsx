import React from "react";
import Navbar from "./Header";
import Home from "./pages/Home";
import Form from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Form />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
