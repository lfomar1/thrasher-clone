"use client";
// import Navbar from "../components/Navbar/Navbar";
// import Footer from "../components/Footer/Footer";
// import { useEffect, useState } from "react";
// import { Product } from "../types/types";
// import ProductDetails from "../components/ProductDetails/ProductDetails";
// import Filter from "../components/Filter/Filter";
// import { FilterProvider } from "../components/Filter/FilterContext";
// import { useFilterContext } from "../components/Filter/FilterContext";
// const Apparel = () => {
//   const [apparel, setApparel] = useState<Product[]>([]);
//   const [filterApparel, setFilterApparel] = useState<Product[]>([]);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8080/api/shop")
//       .then((res) => res.json())
//       .then((data) => setApparel(data.apparel));
//   }, []);

//   useEffect(() => {
//     const filteredProducts = apparel.filter((product) => {
//       return product.price !== undefined && product.price >= minPrice;
//     });
//     setFilterApparel(filteredProducts);
//   }, [minPrice, apparel]);
//   const { minPrice } = useFilterContext();

//   return (
//     <>
//       <Navbar />
//       <FilterProvider>
//         <Filter />
//         <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {apparel &&
//             apparel.map((product) => {
//               return <ProductDetails product={product} key={product.id} />;
//             })}
//         </div>
//       </FilterProvider>
//       <Footer />
//     </>
//   );
// };
// export default Apparel;
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { Product } from "../types/types";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Filter from "../components/Filter/Filter";

const Apparel = () => {
  const [apparel, setApparel] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8080/api/shop")
      .then((res) => res.json())
      .then((data) => setApparel(data.apparel));
  }, []);

  return (
    <>
      <Navbar />

      <Filter />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {apparel.map((product) => (
          <ProductDetails product={product} key={product.id} />
        ))}
      </div>

      <Footer />
    </>
  );
};

export default Apparel;
