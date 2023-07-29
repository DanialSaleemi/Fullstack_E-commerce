import StripeCheckoutButton from "@/components/Stripe/StripeCheckout";
import { cookies } from "next/headers";
import options from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import Link from "next/link";
import { Frown, ShoppingCart } from "lucide-react";

// const userID = cookies().get("user_id")?.value as string;

const Checkout = async () => {
const fetchdatafromserver = async () => {
    const res = await fetch(`http://localhost:3000/api/cart`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await res.json();
    return result;
  };
  const refreshcart = async () => {
    let userID = cookies().get("user_id")?.value as string;
    console.log("user id from page.tsx", userID);
    const res = await fetch(
      `http://localhost:3000/api/cart?user_id=${userID}`,
      {
        method: "DELETE",
        cache: "no-cache",
        headers: {
          "content-type": "application/json",
        },
      }
    );
    const result = await res.json();
    if (!res.ok) {
      console.log("DELETE API: Something went wrong!");
    }
    return result;
  };

  let data = await fetchdatafromserver();
  const cartfresh = await refreshcart(); // clean cart from the old data
  data = await fetchdatafromserver(); //update cart
  let quantity: number[] = data.res.map((item: any) => {
    // console.log(item)
    return item.quantity;
  });
  let Price: number[] = data.res.map((item: any) => {
    return item.price;
  });
  const Qty = quantity.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const subtotal = Price.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  const session = await getServerSession(options);
  console.log(data);

  

  if (data.res.length < 1) {
    return (
      <>
      {/* <StripeCheckoutButton checkoutProd={data.res}/> */}
        <div className="center font-extrabold text-xl my-60 space-x-6">
          <ShoppingCart size={120} />
          <h1>CART IS EMPTY</h1>
          <Frown size={120} />
        </div>
      </>
    );
  } else {
    return (
      <>
        {session ? (
          <div className="grid grid-flow-row grid-cols-5 shadow-md">
            <div className="  col-span-3 space-y-2 ">
              <h2 className="font-bold text-xl mb-6">Shopping Cart</h2>
              {data.res.map((item: any) => (
                <div key={item.id}>
                  <div className="flex flex-col justify-start mx-2">
                    <div className="grid grid-flow-col ">
                      <li className="flex list-none space-x-8">
                        <span>{item.product_name}</span>
                        <h3>${item.price}</h3>
                        <h3>Qty: {item.quantity}</h3>
                      </li>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="col-span-2 ">
              <div className="flex gap-20 mb-10">
                <h2 className="font-bold text-xl">Order Summary</h2>
              </div>

              <div className="grid grid-flow-row grid-cols-2 gap-8">
                <h3>Total cart items</h3>
                <h3>{Qty}</h3>
                <h3>Subtotal</h3>
                <h3>${subtotal}</h3>
              </div>
              <StripeCheckoutButton />
            </div>
          </div>
        ) : (
          <div className="grid justify-center space-y-2">
            <h1>Please Login to Checkout</h1>
            <Link
              href={`${process.env.BASE_PATH}/api/auth/signin?callbackUrl=${process.env.BASE_PATH}/Checkout`}
              className="border bg-black text-white text-center text-xl   py-1"
            >
              Sign In
            </Link>
          </div>
        )}
      </>
    );
  }
};

export default Checkout;
