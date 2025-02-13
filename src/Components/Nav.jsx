import React, { useContext } from 'react'
import { ProductContext } from '../Utils/Context';
import { Link } from 'react-router-dom';

const Nav = () => {

const [products] =useContext(ProductContext);

const distinct_category = [...products.reduce((acc ,cv)=>acc.add(cv.category) ,new Set())];
console.log("distinct categories is :",distinct_category);
  return (
    <div className="w-[30%] lg:w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5">
    <a
      href="/create"
      className="border border-blue-400 bg-blue-200 px-4 py-3 rounded-full text-red-300 font-semibold"
    >
      Add New Product
    </a>
    <hr className="w-[80%] border-black my-4 " />
    <h1 className="w-[90%] text-2xl font-semibold mb-2">Category</h1>
    <div className=" w-[80%]">

      {distinct_category.map((category,index) => (
          <Link to={`/?category=${category}`} key={index} className="flex items-center bg-red-100 px-2 py-1 my-2">
          <span style={{backgroundColor:`rgba( ${(Math.random()*255).toFixed()} , ${(Math.random()*255).toFixed()} , ${(Math.random()*255).toFixed()} , 0.7)`}} className="bg-blue-300 rounded-full mr-2 w-[15px] h-[15px]"></span>
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Link>
      )   )}
      
      
    </div>
  </div>

  )
}

export default Nav;
