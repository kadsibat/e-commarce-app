import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ProductSlick from "../components/ProductSlick";
import MenuAppBar from "../components/MenuAppBar";
import Main from "../components/Main";
import Login from "../components/Login";
import Register from "../components/Register";

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <MenuAppBar />
        <Main />
        <Routes>
          <Route path="/" element={<ProductSlick />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRouter;
