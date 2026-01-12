import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import "./App.css";
import Login from "./pages/Login.jsx";
import ForgetPassword from "./pages/Forget-password.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
