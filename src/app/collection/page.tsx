"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Button from "../components/UI/Button";
import Footer from "../components/Footer/Footer";

interface Product {
  id: number;
  img_src: string;
  name: string;
}
interface NavbarCollection {
  collection: Product[];
}
const Collection = () => {
  let [collection, setCollection] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/shop")
      .then((res) => res.json())
      .then((data: NavbarCollection) => {
        setCollection(data.collection);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex flex-col gap-10 mb-20">
        {collection &&
          collection.map((product) => {
            return (
              <div key={product.id} className="w-full relative">
                <Image
                  src={product.img_src}
                  alt="banner"
                  width={0}
                  height={0}
                  layout="responsive"
                />
                <div className="absolute bottom-0 p-5">
                  {product.name === "Classics" ||
                  product.name === "Neckface" ? (
                    <Button btnName={product.name} lightMode={true} />
                  ) : (
                    <Button btnName={product.name} lightMode={false} />
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </>
  );
};
export default Collection;
