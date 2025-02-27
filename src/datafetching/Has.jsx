import React from 'react';
import img from './shoe.jpg';

const Has = () => {
  return (
    <div className="p-8">
      
      <div className="flex justify-between items-center">
        <h4 className="text-xl font-bold">Calza</h4>
        <div className="flex gap-8 text-gray-700 ">
          <p >Home</p>
          <p>Shop</p>
          <p>About Us</p>
          <p>Contact Us</p>
        </div>
        <div className="text-gray-700">Sign In</div>
      </div>

      <div className="flex items-center justify-between mt-12">

        <div className="max-w-lg">
          <h4 className="text-2xl font-bold">
            <span className="text-black font-bold">Step Into</span> <span className="text-gray-500">Elegance</span>
          </h4>
          <h2 className="text-6xl font-bold mt-2">Calza</h2>
          <p className="mt-4 text-gray-600">
            Redefine your comfort. Discover sleek design & unbeatable comfort. Explore our curated collection,
            crafted to enhance elegance & elevate your style.
          </p>
          <button className="mt-6 bg-black text-white px-6 py-3 rounded-md ">
            Explore Collection
          </button>
        </div>
    
        <div className=" flex justify-end">
          <img src={img} alt="Shoe" className="w-[400px] " />
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <div className="bg-gray-200 w-32 h-20 flex items-center justify-center rounded-lg">Nike</div>
        <div className="bg-gray-200 w-32 h-20 flex items-center justify-center rounded-lg">Adidas</div>
        <div className="bg-gray-200 w-32 h-20 flex items-center justify-center rounded-lg">Puma</div>
        <div className="bg-gray-200 w-32 h-20 flex items-center justify-center rounded-lg">New Balance</div>
      </div>
    </div>
  );
};

export default Has;
