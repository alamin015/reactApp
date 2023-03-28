import React, { useState, useEffect } from 'react'
import { OrderSummary } from './OrderSummary';

export const ShoppingCart = () => {
    const [data,setData] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [totalPrice,setTotalPrice] = useState(0)

    const addToCart = (product) => {
        let newProduct = [...cartItems,product];
        setCartItems(newProduct);
        console.log(product)
    }
    useEffect(() => {
        let totalValue = cartItems.reduce((a,b) => {
            return a + b.price;
        },0)
        setTotalPrice(totalValue)
    },[cartItems])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


  return (
    <div className='flex justify-between'>
        <div className='grow mx-14 py-7'>
            <div className="grid grid-cols-1 md:grd-cols-2 lg:grid-cols-3 gap-8">
                {
                    data.map((item) => <OrderSummary addToCart={addToCart} key={item.id} item={item}></OrderSummary>)
                }
            </div>
        </div>
        <div className='bg-order-bg w-[250px] shrink-0 text-center'>
            <h1>Order Summary</h1>
            <h2>Selected Items : {cartItems.length}</h2>
            <h2>Total Price : {totalPrice}$</h2>
        </div>
    </div>
  )
}
