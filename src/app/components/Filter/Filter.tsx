import { SlidersHorizontal, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "@/app/types/types";

const FilterInputs = () => {
  return (
    <div className="flex justify-end gap-2 items-center">
      <input type="text" className="border border-black rounded p-1" size={4} />
      <p>-</p>
      <input type="text" className="border border-black rounded p-1" size={4} />
      <button>
        <MoveRight />
      </button>
    </div>
  );
};
const Filter = () => {
  const [showFilterInputs, setShowFilterInputs] = useState(false);
  const handleEvent = () => {
    setShowFilterInputs(!showFilterInputs);
  };
  // const [filters, setFilters] = useState({
  //   minPrice: 0,
  // });
  // const [products] = useState(filteredProducts);

  // const filterProducts = (products) => {
  //   return products.filter((product) => {
  //     return product.price >= filters.minPrice;
  //   });
  // };

  // const totalProducts = filterProducts(products);
  return (
    <>
      <div className="flex justify-end">
        <button onClick={handleEvent} className="flex items-center gap-2 mb-4">
          <p>Filters</p>
          <SlidersHorizontal />
        </button>
      </div>
      {showFilterInputs && <FilterInputs />}
    </>
  );
};
export default Filter;
