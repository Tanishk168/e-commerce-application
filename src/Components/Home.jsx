import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useLocation } from "react-router-dom";
import { ProductContext } from "../Utils/Context";
import Loading from "./Loading";
import axios from "../Utils/axios";
const Home = () => {
  const [products] = useContext(ProductContext);
  console.log(products);

const [filteredProducts,setFilteredProducts] = useState(null);
  

  const { search } = useLocation();

  const category = decodeURIComponent(search.split("=")[1]); // decode URIComponent into category string,removing the symbols used for ; ' etc
  

  const getproductscategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      console.log("data in products category",data);
      setFilteredProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

useEffect(() => {
  if(!filteredProducts || category == "undefined") setFilteredProducts(products);
  if(category != "undefined") {
      setFilteredProducts(products.filter((product)=>product.category == category))
    // getproductscategory();
  }
},  [category,products]);


console.log(products);

  return products ? (
    <>
      {/* Navbar on the left */}
      <Nav></Nav>

      {/* product section on right */}
      <div className=" w-[70%] lg:w-[85%]  h-full lg:p-5 p-2 bg-red-100 pt-[5%] lg:pl-8 flex flex-wrap gap-2 overflow-y-auto overflow-x-hidden">
        {/* Cards */}
        {filteredProducts && 
        filteredProducts.map((p, i) => {
          return (
            <Link
              key={p.id}
              to={`/detail/${p.id}`}
              className="card p-5  w-[70%] sm:w-[45%] md:w-[30%] lg:w-[18%] h-[40%] rounded-lg shadow  border flex-col flex justify-center items-center bg-white overflow-hidden"
            >
              <div
                className=" w-full h-[70%] flex-shrink-0 bg-contain bg-no-repeat hover:scale-110  m-2 "
                style={{
                  backgroundImage: `url(${p.image})`,
                  // backgroundSize: 'cover',
                  backgroundPosition: "center",
                }}
              ></div>
              <h1 className="h-[20%]text-sm font-semibold  w-full text-center text-wrap">
                {p.title}
              </h1>
            </Link>
          );
        })}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
