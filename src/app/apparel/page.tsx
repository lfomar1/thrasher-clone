"use client";
import Navbar from "../components/Navbar/Navbar";
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

      {apparel &&
        apparel.map((product) => {
          return (
            <div key={product.id} className="w-full flex">
              <Image
                src={product.img_url}
                alt={product.name}
                width={0}
                height={0}
                layout="responsive"
              />
            </div>
          );
        })}
    </>
  );
};
export default Apparel;
