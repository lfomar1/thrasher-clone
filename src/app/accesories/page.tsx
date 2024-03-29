"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Product } from "../types/types";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Accesories = () => {
  const [accessories, setAccesories] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/shop")
      .then((res) => res.json())
      .then((data) => setAccesories(data.accesories));
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {accessories &&
          accessories.map((product) => {
            return <ProductDetails product={product} key={product.id} />;
          })}
      </div>
      <Footer />
    </>
  );
};
export default Accesories;
