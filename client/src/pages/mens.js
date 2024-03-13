import React from 'react'
import mens_data from '../components/assets/mensdata'
import Items from '../components/items/items'

export default function Mens() {
  return (
    <div className='popular'>
      <h1>COLLECTIONS FOR MEN</h1>
      <div className='data-item'>
        {mens_data.map((item,i)=>{
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}   
      </div>
    </div>
  )
}
