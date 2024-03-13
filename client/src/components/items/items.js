import React from 'react';
import'./items.css'

export default function Items(props) {
  return (
    <div className='items'>
        <img  src={props.image} alt=''/>
        <p>{props.name}</p>
        <dvi className='item-price'>
          <div className='new_price'>&#8377;{props.new_price}</div>
          <del><div className='old_name'>&#8377;{props.old_price}</div></del>
        </dvi>
    </div>
  );
}
