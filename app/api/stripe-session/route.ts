import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const key = process.env.STRIPE_SECRET_KEY || "";
const stripe = new Stripe(key, {
    apiVersion: "2022-11-15",
});





export async function POST(requset:NextRequest) {
   
    const body = await requset.json();
    console.log(body);
    try {
        if(body.length>0)
        {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
            submit_type: "pay",
          mode: 'payment',
          payment_method_types: ['card'],
          billing_address_collection: 'auto',
          shipping_options: [{shipping_rate:"shr_1NW0onDoRerkQ0Or1rWCRNML"}, {shipping_rate: 'shr_1NW0noDoRerkQ0OrRQCgaYMk'}],
          line_items:body.map((item: any) => {
            return{
                price_data: {
                    currency: 'USD',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: item.price * 100,
                },
                quantity: item.quantity,
                adjustable_quantity: {
                    enabled: true,
                    minimum: 1,
                    maximum: 10,
                }

            }
          }),
        //   success_url: `${requset.headers.get("origin")}/success=true`,
        // cancel_url: `${requset.headers.get("origin")}/?canceled=true`,
        success_url: `${process.env.BASE_PATH}/Checkout/success/`,
        cancel_url: `${process.env.BASE_PATH}/Checkout/`,
        });
        return NextResponse.json(session);
    } else {
        return NextResponse.json({message: "No data found"});
    }
      } catch (err: any) {
        console.log(err);
        return NextResponse.json(err.messge);
      }
}