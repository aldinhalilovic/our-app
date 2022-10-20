import React, { useContext } from "react";
import { ShoppingCartContext } from "../../context/ShoppingCartContext";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function CartPage() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(ShoppingCartContext);

  console.log(cartItems);

  const itemsPrice = cartItems.reduce((a, c) => a + c.quantity * c.price, 0);

  return (
    <div className="">
      <div className="w-full min-h-[490px]">
        {cartItems.length === 0 ? (
          <div className="m-auto pt-10 w-4/12 flex flex-col items-center">
            <h1 className="text-3xl text-black font-semibold  p-1 rounded-lg">
              YOUR SHOPPING CART IS EMPTY
            </h1>
            <p className="text-xl text-black text-center font-normal w-5/6">
              You still have nothing in your cart. Check out our large selection
              product and start shopping.
            </p>
            <button className="text-xl text-black text-center p-2 font-bold mt-60 ml-2 rounded-xl opacity-75 hover:opacity-100">
              <Link to="/">START SHOPPING</Link>
            </button>
          </div>
        ) : (
          <div className="w-screen flex justify-center items-center min-h-[490px] ">
            <div className="flex flex-col items-center w-5/6 min-h-[490px]">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between mx-7 my-4 border-2 h-1/2 w-4/6 rounded  opacity-90 border-slate-700 text-black"
                >
                  <img src={product.imgUrl} alt={product.name} width={70} />
                  <div className="w-1/5">
                    <h2 className="font-bold">{product.name}</h2>
                  </div>
                  <div className="flex justify-between items-center w-40">
                    <p className="text-bold">Amount:</p>
                    <button
                      onClick={() => decreaseQuantity(product.id)}
                      className="rounded border-2 border-black h-auto text-center w-7"
                    >
                      -
                    </button>
                    <p className="font-bold">{product.quantity}</p>
                    <button
                      onClick={() => increaseQuantity(product.id)}
                      className="rounded border-2 border-black h-auto text-center w-7"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-center items-center w-20">
                    <p className="text-bold">One piece: {product.price} </p>
                  </div>
                  <div className="flex justify-center items-center w-32">
                    Total Amount: {product.price * product.quantity}{" "}
                    {product.currency}
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="rounded bg-zinc-700 border-white text-white border-2 w-10 h-10 text-center mr-10"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
            <div className="w-1/6 min-h-52   pb-10 mr-36  bg-white flex flex-col justify-center items-center opacity-60 font-bold">
              <h1>Total for paymant is :</h1>
              <br />
              <br />
              <br />
              {cartItems.map((product) => (
                <div className="flex font-black">
                  <div className="w-32 ">
                    <strong>-</strong>
                    {product.name}
                    <hr />
                  </div>
                  <div className="ml-10 h-auto flex justify-center items-center">
                    {product.price * product.quantity}$
                  </div>
                </div>
              ))}
              <br />
              {Number(itemsPrice).toLocaleString()}$
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default CartPage;
