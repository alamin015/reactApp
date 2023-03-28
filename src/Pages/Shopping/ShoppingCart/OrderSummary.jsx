import React from 'react'

export const OrderSummary = (props) => {
    const {img,name,id,ratings,price,seller} = props.item;
  return (
    <div className='flex flex-col justify-between rounded-lg shadow-lg rounded-md'>
        <div className='px-1'>
            <img className='mb-3 rounded-t-md object-cover w-full h-[200px]' src={img} alt="img" />
            <h2 className=" my-3 text-xl font-bold">{name}</h2>
            <h4>price: {price}</h4>
            <p className='my-2'>Manufacturer : {seller}</p>
            <p className='mb-3'>Ratings : {ratings} stars</p>
        </div>
        <button onClick={() => props.addToCart(props.item)} className='py-2 px-8  bg-green rounded-b-md border-2 border-green'>Add to Cart</button>
    </div>
  )
}