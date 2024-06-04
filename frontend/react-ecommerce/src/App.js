import React from "react";
import logo from "./logo.svg";

import "./App.css";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import Protected from "./features/auth/Protected";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Protected>
              <Home />{" "}
            </Protected>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route
          path="/cart"
          element={
            <Protected>
              <CartPage />
            </Protected>
          }
        />
        <Route
          path="/checkout"
          element={
            <Protected>
              <CheckoutPage />
            </Protected>
          }
        />
        <Route
          path="/product-detail/:id"
          element={
            <Protected>
              {" "}
              <ProductDetailPage />
            </Protected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
