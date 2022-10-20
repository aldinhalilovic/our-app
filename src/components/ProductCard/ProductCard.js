import React from "react";

function ProductCard({ image, title, price, onClick }) {
  return (
    <div className="bg-indigo-200 w-1/3 flex my-10 justify-center items-center z-8">
      <div className="w-60 h-full  px-6 bg-white  rounded py-6 transform transition-all  hover:bg-stone-50">
        <img className="h-50 object-cover " src={image} alt="Product" />
        <h2 className="font-bold text-lg ml-10 pt-5"> {title} </h2>
        <div className="flex justify-between pt-5 justify-self-start self-start">
          <button
            onClick={onClick}
            className="bg-green-400 px-4 py-1 h-30 w-30 hover:bg-violet-600 text-white rounded mt-3 ml-1 "
          >
            Add to cart
          </button>
          <p className="px-4 py-2 text-black-300 rounded mt-3">€{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
