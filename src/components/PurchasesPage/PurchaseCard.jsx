import React from 'react'
import './styles/purchaseCard.css'

const PurchaseCard = ({ purchase }) => {



  return (
    <article className='purchase'>
      <header className='purchase__img-cont'>
        <img className='purchase__img' src={purchase.product.images[0].url} alt="Product_image" />
      </header>
      <div className='purchase__title'>
        <h4 >{purchase.product.title}</h4>
      </div>
      <div className='purchase__quantity'>
        <div  className='purchase__quantity-number'>
          {purchase.quantity}
        </div>
      </div>
      <div className='purchase__price'>$ {purchase.product.price}</div>
    </article>
  )
}

export default PurchaseCard