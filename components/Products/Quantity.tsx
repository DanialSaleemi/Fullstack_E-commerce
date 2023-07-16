"use client";
import React from "react";
import { useState } from "react";

export const Quantity = () => {
  const [currQuantity, setQuantity] = useState(1);
  const increment = currQuantity + 1;
  const decrement = currQuantity - 1;
  return (
    <div className="flex">
      <div className="center my-6 space-x-3">
        <h3 className="font-semibold text-lg">Quantity:</h3>
        <span
          className="center border w-7 h-7 rounded-full duration-300 hover:scale-150 hover:hover:shadow-2xl hover:border-gray-600"
          onClick={() => {
            currQuantity <= 1 ? 1 : setQuantity(decrement);
          }}
        >
          -
        </span>
        <span className="px-2">{currQuantity}</span>
        <span
          className="center border-2  w-7 h-7 rounded-full duration-300 hover:scale-150 hover:shadow-2xl hover:border-gray-600"
          onClick={() => {
            setQuantity(increment);
          }}
        >
          +
        </span>
      </div>
    </div>
  );
};
