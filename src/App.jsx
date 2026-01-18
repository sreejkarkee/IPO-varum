import { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./services/ProtectedRoute.jsx";
import "./App.css";
import Login from "./pages/Login.jsx";
import ForgetPassword from "./pages/Forget-password.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
