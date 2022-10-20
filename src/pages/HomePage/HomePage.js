import React, { useContext } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import products from "../../common/items.json";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import Footer from "../../components/Footer/Footer";

function HomePage() {
  const { addToCart } = useContext(ShoppingCartContext);
  return (
    <div className="min-h-[427px]">
      <div className="min-w-full max-w-full h-[80vh] bg-stone-300 z-8">
        <div className="bg-iphone-banner bg-no-repeat bg-cover h-full text-white font-bold font-sans text-4xl flex flex-col justify-center items-center ">
          <h1> WELCOME TO ONLINE SHOP</h1>
          <button
            className="mt-10 bg-transparent text-white rounded-full px-8 py-3"
            onClick={() =>
              window.scroll({
                top: 500,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Go to products
          </button>
        </div>

        <div
          className="flex justify-center items-center flex-col bg-blue w-full h-fit z-8"
          id="products"
        >
          <div className=" h-full w-full flex flex-wrap flex-row bg-indigo-200 z-8">
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
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
