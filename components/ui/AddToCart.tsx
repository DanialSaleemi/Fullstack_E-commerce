'use client'
import { Button } from "./button";
import { useDispatch } from "react-redux";
import { cartActions } from "@/app/store/slice/cartSlice";
import toast from "react-hot-toast";


const AddtoCart = ()=>{
const dispatch = useDispatch();
const addItems = () => {
    dispatch(cartActions.addToCart({qty:1}))
    toast.success("Product added to cart");

};
    return(
        <Button onClick={addItems}>Add to Cart</Button>

    )
}
export default AddtoCart;