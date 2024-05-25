import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductList from "../features/products/productComponents/ProductList";

function Home() {
  return (
    <>
      <Navbar>
        <ProductList />
      </Navbar>
    </>
  );
}

export default Home;
