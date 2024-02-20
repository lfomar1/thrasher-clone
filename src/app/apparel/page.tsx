"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useEffect, useState } from "react";
import { Product } from "../types/types";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const Apparel = () => {
  const [apparel, setApparel] = useState<Product[]>([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/shop")
      .then((res) => res.json())
      .then((data) => setApparel(data.apparel));
  });
  return (
    <>
      <Navbar />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apparel &&
          apparel.map((product) => {
            return <ProductDetails product={product} key={product.id} />;
          })}
      </div>
      <Footer />
    </>
  );
};
export default Apparel;
