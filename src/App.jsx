import React from "react";
import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Detail from "./Components/Detail";
import Create from "./Components/Create";

function App() {

const {search, pathname} = useLocation();
console.log(search);
console.log(pathname);

  return (
    <div className="w-full h-screen bg-white flex">

      { (search.length > 0  || pathname != "/") && <Link to="/" className="absolute text-red-300 left-[16%] top-[5%] text-xl" >Home</Link>  }

   <Routes>
      <Route path="/" element={<Home></Home>} ></Route>
      <Route path="/create" element={<Create />} ></Route>
      <Route path="/detail/:id" element={<Detail></Detail>} ></Route>
      
   </Routes>
    </div>
  );
}

export default App;
