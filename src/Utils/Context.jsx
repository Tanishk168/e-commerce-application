import axios from "./axios";
import React, { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();
const Context = (props) => {
  const [products, setproducts] = useState(
    JSON.parse(localStorage.getItem("products")) || null
  );
  const getproducts = async () => {
    try {
      const { data } = await axios("/products"); // Fetch data from the API
      console.log("Fetched data:", data);

      // Update state and save data to localStorage
      setproducts(data);
      localStorage.setItem("products", JSON.stringify(data));
    } catch (error) {
      console.log("Error fetching products:", error);
    }
  };

  useEffect(() => {
    // Fetch products if localStorage is empty or corrupted
    if (!products) {
      console.log("No products in localStorage. Fetching from API...");
      getproducts();
    }
  }, []); // Only run once when the component mounts
  return (
    <ProductContext.Provider value={[products, setproducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
