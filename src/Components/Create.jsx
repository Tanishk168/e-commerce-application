import React, { useContext, useState } from "react";
import { ProductContext } from "../Utils/Context";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const navigate =useNavigate();
  const [products, setproducts] = useContext(ProductContext);

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5 ||
      description.trim().length < 10
    ) {
      alert("Please fill all fields with at least 5 characters");
      return;
    }

    const newProduct = {
      id: nanoid(),
      title,
      description,
      category,
      image,
      price,
    };

    // console.log(newProduct);
    setproducts([...products, newProduct]);
    // console.log(products);

    //SAVING DATA IN DATABASE AFTER ITS SET IN ABOVE STATEMENT
    localStorage.setItem('products', JSON.stringify([...products, newProduct]));

    navigate("/")
  };

  //   toast.success("new product added successfully");

  return (
    <form
      onSubmit={AddProductHandler}
      className="w-screen h-screen p-[5%] flex items-center flex-col"
    >
      <h1 className="text-2xl font-semibold m-4 w-1/2  ">Add New Product</h1>
      <input
        type="text"
        placeholder="title"
        className="w-1/2 bg-zinc-100 p-2 mb-3 text-lg rounded-md"
        onChange={(e) => settitle(e.target.value)}
        value={title}
      />
      <input
        type="url"
        placeholder="enter image url"
        className="w-1/2 bg-zinc-100 p-2 mb-3 textlg rounded-md"
        onChange={(e) => setimage(e.target.value)}
        value={image}
      />
      <div className="flex justify-between w-1/2 mb-3 ">
        <input
          type="text"
          placeholder="category"
          className="w-[47%] bg-zinc-100 p-2 text-lg rounded-md"
          onChange={(e) => setcategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="price"
          className="w-1/2 bg-zinc-100 p-2 text-lg rounded-md"
          onChange={(e) => setprice(e.target.value)}
          value={price}
        />
      </div>

      <textarea
        rows="7"
        type="text"
        placeholder="Enter the product description"
        className="w-1/2 bg-zinc-100 p-2 text-lg rounded-md"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      />
      <div className="w-1/2">
        <button
          type="submit"
          className=" border border-blue-400 bg-blue-200 px-4 py-3 my-4 rounded-full text-blue-500 font-semibold"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default Create;
