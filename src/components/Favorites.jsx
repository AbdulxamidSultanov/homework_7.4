import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart } from "../lib/slice/productsSlice";
import { removeFromLocal } from "../lib/localConfig";

const Favorites = () => {
  const dispatch = useDispatch()
  const favProducts = useSelector((state) => state.products.cartList);
  function handleDelete(id) {
    dispatch(deleteCart(id))
    removeFromLocal(cartList)
  }
  return (
    <>
      {favProducts && favProducts.length > 0 ? (
        favProducts.map((p, index) => {
          return (
            <div key={index} className=" container mx-auto my-4 rounded-xl flex gap-5 shadow border-2 p-3 border-primary">
              <div className="w-[150px] flex-shrink-0 aspect-square">
                <img
                  src={p.image}
                  className="w-full h-full object-contain"
                  alt={p.title}
                />
              </div>
              <div className="flex flex-col gap-5 items-start justify-center">
                <h2 className="text-primary text-3xl">{p.title}</h2>
                <p className="text-[#533333] text-md">{p.description}</p>
                <button onClick={() => handleDelete(p.id)} className="border px-5 py-2 border-primary rounded-2xl cursor-pointer hover:bg-primary hover:text-white">Remove from favorite</button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="container flex items-center justify-center mx-auto min-h-[100vh]">Nothing add to favorite</p>
      )}
    </>
  );
};

export default Favorites;
