'use client'
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/store/slice/cartSlice";
import toast from "react-hot-toast";
//import { handleAddtoCart } from "../Products/SanityProducts";
import { product } from "@/sanity/product_schema";

const handleAddtoCart = async (_id:string) => {

    const res = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id: _id
      }),
    });
    const result = await res.json();
    console.log(result);
    
 
 };

const AddtoCart = ()=>{
        const dispatch = useDispatch();
        const addItems = () => {
         dispatch(cartActions.addToCart({qty:1}))
         toast.success("Product added to cart");
//         handleAddtoCart(_id);

    };


    return(
        <Button onClick={addItems}>Add to Cart</Button>
    )
}
export default AddtoCart;