import React, { useState } from 'react'
import './style.css'
import BotonComprar from '../BotonComprar/BotonComprar'

const ProductCard = ({img, title, real_price, final_price, discount,id}) => {

    const[isBought,setIsBought]=useState(false)

  return (
    <div className='conteiner'>
        <img src={img}/>
        <h3> {title} </h3>
        <div className='price_info'>
            <span className="real_price">${real_price}</span>
            <span className="discount">%{discount}</span>
        </div>
        <span className='final_price'>${final_price}</span>
        <BotonComprar title={title}/>
    </div>
  )
}

export default ProductCard