import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../lib/slice/productsSlice";

const Card = ({ p }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  function handleAddFavorite(id) {
    const favorite = products.find((p) => {
      return p.id == id;
    });
    dispatch(addCart(favorite));
  }
  return (
    <div className="flex items-start justify-center flex-col gap-2 border-[1px] rounded-xl max-w-[400px] ">
      <div className="max-h-[400px] aspect-square overflow-hidden p-5">
        <img src={p.image} alt="" className="object-containe h-full w-full" />
      </div>
      <div className="p-4 flex gap-5 flex-col w-full">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl text-[#750000] uppercase">{p.category}</h2>
          <h2 className="text-[#533333] text-2xl">{p.title}</h2>
        </div>
        <div className="flex justify-between w-full items-center">
          <div>
            <p className="text-[#7d7d7d] text-2xl">Price:</p>
            <p className="my-2 text-black text-4xl">{p.price} $</p>
          </div>
          <div>
            <button
              onClick={() => handleAddFavorite(p.id)}
              className="px-5 py-3 border-2 text-primary cursor-pointer rounded-3xl hover:text-white border-primary hover:bg-primary"
            >
              <i className="fa fa-plus text-5xl "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
