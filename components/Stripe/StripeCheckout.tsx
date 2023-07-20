"use client";
import getStripePromise from "@/lib/stripe";

const checkoutProducts = [
    {
        product : 1,
        name : "Stripe Product",
        price : 400,
        quantity: 2
    },
];


const StripeCheckoutButton = () => {
    const handleCheckout= async () => {
        
        const stripe = await getStripePromise();
    const response = await fetch("/api/stripe-session/", {
    method: "POST",
    headers: {"Content-type":"application/json"},
    cache: "no-cache",
    body: JSON.stringify(checkoutProducts),
    });
    const session = await response.json();
    //if(data.session){
        const result = await stripe?.redirectToCheckout ({ sessionId: session.id, })
        console.log("stripe checkouit success");
    //}
    if(result?.error){
        console.log(result.error.message);
    }
}
  return (
    <div className='py-5'>
        <button className='bg-green-500 rounded-sm' onClick={handleCheckout}>Pay Now</button>
    </div>
  )
}

export default StripeCheckoutButton