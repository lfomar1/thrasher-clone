"use client";
import Navbar from "../components/Navbar/Navbar";
import ProductInfo from "../components/UI/ProductInfo";
import { Product } from "../types/types";
import { useEffect, useState } from "react";
import Image from "next/image";

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
    </>
  );
};
export default Accesories;
