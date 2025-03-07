import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const Cards = () => {
  const { products, isLoading, catchError } = useSelector(
    (state) => state.products
  );
  return (
    <div className="container mx-auto grid grid-cols-4 w-full my-14 gap-3 box-border">
      {isLoading ? (
        <div>Loading...</div>
      ) : catchError ? (
        <div>Somthing went wrong.</div>
      ) : products && products.length > 0 ? (
        products.map((p) => {
          return <Card p={p} key={p.id} />;
        })
      ) : (
        <div>Somthing went wrong</div>
      )}
    </div>
  );
};

export default Cards;
