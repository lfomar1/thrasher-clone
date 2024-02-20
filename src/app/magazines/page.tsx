"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Product } from "../types/types";
import ProductDetails from "../components/ProductDetails/ProductDetails";
const Magazines = () => {
  const [magazines, setMagazines] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/shop")
      .then((res) => res.json())
      .then((data) => setMagazines(data.magazines));
  });
  return (
    <>
      <Navbar />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {magazines &&
          magazines.map((product) => {
            return <ProductDetails product={product} key={product.id} />;
          })}
      </div>
      <Footer />
    </>
  );
};
export default Magazines;
