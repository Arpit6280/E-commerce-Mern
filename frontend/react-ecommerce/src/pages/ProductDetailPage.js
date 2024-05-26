import React from "react";
import Navbar from "../features/navbar/Navbar";
import ProductDetail from "../features/products/productComponents/ProductDetail";

function ProductDetailPage() {
  return (
    <Navbar>
      <ProductDetail />
    </Navbar>
  );
}

export default ProductDetailPage;
