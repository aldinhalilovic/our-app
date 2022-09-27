import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
// import { toast } from "react-hot-toast";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";

function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <div className="min-w-full max-w-full h-[90%] bg-stone-300">
      <div
        className="bg-iphone-banner bg-no-repeat bg-cover h-full text-white  font-bold font-sans text-4xl  flex justify-center  items-center flex-col "
        style={{
          scroleBehavior: "smooth",
        }}
      >
        <h1> WELCOME TO ONLINE SHOP</h1>
        <a
          className="mt-10 bg-transparent text-white rounded-full px-8 py-3"
          href="#products"
        >
          Go to products
        </a>
      </div>

      <div
        className="flex justify-center items-center flex-col bg-blue w-full h-fit "
        id="products"
      >
        <div className=" h-full w-full flex flex-wrap flex-row bg-indigo-200">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              price={product.price}
              image={product.imgUrl}
              title={product.name}
              onClick={() => addToCart(product)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
