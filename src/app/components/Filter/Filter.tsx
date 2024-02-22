import { SlidersHorizontal, MoveRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Product } from "@/app/types/types";

const Filter = () => {
  const [showFilterInputs, setShowFilterInputs] = useState(false);
  const [minPrice, setMinPrice] = useState(0);

  const handleEvent = () => {
    setShowFilterInputs(!showFilterInputs);
  };

  return (
    <>
      <div className="flex justify-end">
        <button onClick={handleEvent} className="flex items-center gap-2 mb-4">
          <p>Filters</p>
          <SlidersHorizontal />
        </button>
      </div>
      {showFilterInputs && (
        <div className="flex justify-end gap-2 items-center">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border border-black rounded p-1"
            size={4}
          />
          <p>-</p>
          <input
            type="number"
            className="border border-black rounded p-1"
            size={4}
          />
          <button>
            <MoveRight />
          </button>
        </div>
      )}
      {console.log(minPrice)}
    </>
  );
};

export default Filter;
