"use client";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "@/app/store/slice/cartSlice";
import toast from "react-hot-toast";
import { RootState } from "@/app/store/store";
import { useEffect } from "react";
import { IProduct } from "./SanityProducts";

const handleAddtoCart = async (
  id: any | string,
  title: any | string,
  quantity: any | number,
  price: any | number,
) => {
  const products = {
    product_id: id,
    product_name: title,
    quantity: quantity,
    price: price,
  };
  const res = await fetch("/api/cart", {
    method: "POST",
    body: JSON.stringify(products),
  });
  const result = await res.json();
  console.log(result);
};

const AddtoCart =  (props : any) => {
  //    console.log(props.productdata)
  const CartValue = useSelector(
    (state:RootState) => state.cart.totalQuantity
    )
    const dispatch = useDispatch();
    if (props.productdata[0]){
      const addItems = async () => {
        dispatch(cartActions.addToCart({ qty: 1 }));
        toast.success(`Product added to cart`);
    handleAddtoCart(props.productdata[0], props.productdata[1], CartValue+1, props.productdata[2]);
  };
  
  return <div><Button onClick={addItems}>Add to Cart</Button></div>
} else {
  console.log("waiting for product data")}
  return<></>
};
export default AddtoCart;
