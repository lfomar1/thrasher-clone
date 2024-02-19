"use client";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
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
                <div className="text-center text-sm my-4">
                  <p className="font-medium mb-1">{product.name}</p>
                  <p className="text-gray-500 mb-1">{product.type}</p>
                  <p className="text-xs mb-1">{product.price}</p>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};
export default Apparel;
