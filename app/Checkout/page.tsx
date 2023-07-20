import React from "react";
import { Trash2 } from "lucide-react";
import StripeCheckoutButton from "@/components/Stripe/StripeCheckout";

const Checkout = () => {
  return (
    <div className="grid grid-flow-row grid-cols-5">
      <div className=" bg-red-400 col-span-3">
        <h2 className="font-bold text-xl">Shopping Cart</h2>
      </div>
      <div className=" bg-green-400 col-span-2">
        <div className="flex gap-20 mb-10">
          <Trash2 />
          <h2 className="font-bold text-xl">Order Summary</h2>
        </div>
        <div className="grid grid-flow-row grid-cols-2 gap-8">
          <h3>Quantity</h3>
          <h3>2</h3>
          <h3>Subtotal</h3>
          <h3>564</h3>
        </div>
      </div>
      <StripeCheckoutButton/>
    </div>
  );
};

export default Checkout;
