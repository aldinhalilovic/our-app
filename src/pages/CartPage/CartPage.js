import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);

  console.log(cartItems);
  return (
    <div className="w-full bg-iphone-shop h-[90%] bg-cover bg-center">
      {cartItems.length === 0 ? (
        <div className="m-auto pt-10  w-4/12 flex flex-col items-center gap-8 ">
          <h1 className="text-3xl text-white font-semibold  p-1 rounded-lg">
            YOUR SHOPPING CART IS EMPTY
          </h1>
          <p className="text-xl text-white text-center font-normal w-5/6">
            You still have nothing in your cart. Check out our large selection
            product and start shopping.
          </p>
          <button className="text-xl text-white text-center p-2 rounded-xl mt-60 bg-cyan-900 ml-2 opacity-75 hover:opacity-100">
            <Link to="/">START SHOPPING</Link>
          </button>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center pt-28 w-full">
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex mx-3 my-4 border-2 border-slate-700 rounded justify-start h-1/2 w-4/6 items-center"
            >
              <img src={product.imgUrl} alt={product.name} width={70} />
              <div className="flex-col ml-8 justify-center w-1/6">
                <h2 className="font-bold">{product.name}</h2>
              </div>
              <div className="mx-10 flex justify-center my-3 items-center">
                <p className="text-bold">Amout:</p>
                <button
                  onClick={() => decreaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3 w-7"
                >
                  -
                </button>
                <p>{product.quantity}</p>
                <button
                  onClick={() => increaseQuantity(product.id)}
                  className="rounded border-2 border-slate-700 h-auto px-1 text-center mx-3"
                >
                  +
                </button>
              </div>
              <div className="mx-10 flex justify-center my-3 items-center">
                <p className="text-bold">One piece: {product.price} </p>
              </div>
              <div className="mx-10 flex justify-center my-3 items-center">
                Total Amout: {product.price * product.quantity}{" "}
                {product.currency}
              </div>
              <button
                onClick={() => removeFromCart(product.id)}
                className="ml-40 rounded border-white border-2 w-10 h-10 text-center"
              >
                X
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartPage;
