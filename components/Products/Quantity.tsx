"use client";
import React from "react";
import { useState } from "react";

export const Quantity = () => {
  const [currQuantity, setQuantity] = useState(1);
  const increment = currQuantity + 1;
  const decrement = currQuantity - 1;
  return (
    <div className="flex">
      <div className="center mt-12 space-x-6">
        <h3 className="font-semibold text-lg tracking-wide">Quantity:</h3>
        <button
          className="center border w-7 h-7 rounded-full duration-300 hover:scale-150 hover:hover:shadow-2xl hover:border-gray-600"
          onClick={() => {
            currQuantity <= 1 ? 1 : setQuantity(decrement);
          }}
        >
          -
        </button>
        <span>{currQuantity}</span>
        <button
          className="center border-2 font-semibold w-7 h-7 rounded-full duration-300 hover:scale-150 hover:shadow-2xl hover:border-gray-600"
          onClick={() => {
            setQuantity(increment);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
