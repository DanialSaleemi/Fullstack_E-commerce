"use client";
import getStripePromise from "@/lib/stripe";
import { BASE_URL, StripeProducts } from "../utils/types";


const StripeCheckoutButton = () => {
  const handleCheckout = async () => {
    const fetchcheckoutproducts = async () => {
      const res = await fetch(`/api/cart`, {
              method: "GET",
              cache: "no-cache",
              headers: {
                "content-type": "application/json",
              },
            });
            const result = await res.json();
            return result;
          };
    const data = await fetchcheckoutproducts();




    let checkoutProducts: StripeProducts[] = [];
    data.res.forEach((item: any) => {
      checkoutProducts.push({
        product: item.id,
        name: item.product_name,
        price: item.price,
        quantity: item.quantity,
      });
    });

    const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      cache: "no-cache",
      body: JSON.stringify(checkoutProducts),
    });
    console.log("Checkout Products in stripe body: ", checkoutProducts);
    const session = await response.json();
    console.log("Session response: ", session);
  if (session.created)
  {
    const result = await stripe?.redirectToCheckout({ sessionId: session.id });
  
    if (result?.error) {
      console.log(result.error.message);
    }
  };
}
  return (
    <div className="py-5">
      <button
        className="bg-black text-white px-2 py-1"
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default StripeCheckoutButton;
