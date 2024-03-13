import React from 'react'
import Items from '../items/items'
import all_product from '../assets/allproduct'
import './popular.css'

export default function Popular() {
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <div className='data-item'>
        {all_product.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}
