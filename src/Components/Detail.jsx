import axios from '../Utils/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Loading from "./Loading"
import { ProductContext } from '../Utils/Context';
const Detail = () => {

const [products, setproducts] = useContext(ProductContext);

  const {id} =useParams();
  console.log("id extracted from params",id);

 const [product,setProduct] =useState(null);

    // const getsingleproduct = async () => {
    //     try {
    //       console.log(id)
    //       const { data } = await axios.get(`/products/${id}`);
          
    //       console.log(data);
    //       setProduct(data);
    //       console.log("data is" ,{data});
    //     } catch (error) {
    //       console.log(error);
    //     }

    // };
    useEffect(() =>{
      if(!product){
        setProduct(products.filter(product => product.id == id)[0]);
      }
      // getsingleproduct();
    }, []);
  return (
 <div className={`w-full h-full flex justify-center ${!product ? "bg-red-100" : " "} `}>
    {product ?
    <div className='w-[80%]  border shadow hover:shadow-2xl flex justify-center items-center m-auto p-10 gap-8 '>{console.log(product)}
      <img src={`${product.image}`} className='object-contain w-[30%] h-[57%]' alt="loading" />
      <div className='w-3xl md:w-5xl flex flex-col text-wrap gap-1  '>
        <h1 className='text-lg md font-bold text-wrap overflow-hidden '>{product.title}</h1>
        <h3 className='text-red-300 font-medium'>{product.category}</h3>
        <h2 className='text-xl font-semibold text-blue-500'>{product.price} (inr)</h2>
        <p className='text-balance mx-auto my-auto text-md overflow-hidden text-wrap'>{product.description}</p>
        <div className='flex gap-4'>
        <Link className=' inline-block border border-blue-600 bg-blue-100 px-4 py-3  text-blue-600 font-semibold'>Edit</Link>
        <Link className='inline-block border border-red-600 bg-red-100 px-4 py-3  text-red-600 font-semibold'>Delete</Link>
        </div>
      </div>
 
    </div>
:<Loading></Loading>}
 </div>
    
  )
}

export default Detail;
