"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductInfo from "../components/UI/ProductInfo";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Product } from "../types/types";

interface Apparel {
  apparel: Product[];
}

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
            return (
              <div key={product.id}>
                <Image
                  src={product.img_url}
                  alt={product.name}
                  width={0}
                  height={0}
                  layout="responsive"
                />
                <ProductInfo
                  name={product.name}
                  type={product.type!}
                  price={product.price!}
                />
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};
export default Apparel;
