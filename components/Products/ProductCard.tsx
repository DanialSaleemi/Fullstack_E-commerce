"use client";




const handleAddtoCart = async () => {
    const res = fetch("/api/cart", {
      method:"POST",
      body: JSON.stringify({
        product_id: item._id
      })
    })
    const result = (await res).json()
    console.log(result)
    
  }