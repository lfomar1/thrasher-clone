import React, { createContext, useContext, useState, ReactNode } from "react";

interface FilterContextProps {
  minPrice: number;
  setMinPrice: (value: number) => void;
}

const FilterContext = createContext<{
  minPrice: number;
  setMinPrice: (value: number) => void;
}>({
  minPrice: 0,
  setMinPrice: () => {},
});
export const useFilterContext = () => {
  return useContext(FilterContext);
};
interface FilterProviderProps {
  children: ReactNode;
}
export const FilterProvider: React.FC<FilterProviderProps> = ({ children }) => {
  const [minPrice, setMinPrice] = useState(0);

  const setMinPriceValue = (value: number) => {
    setMinPrice(value);
  };

  return (
    <FilterContext.Provider value={{ minPrice, setMinPrice: setMinPriceValue }}>
      {children}
    </FilterContext.Provider>
  );
};
