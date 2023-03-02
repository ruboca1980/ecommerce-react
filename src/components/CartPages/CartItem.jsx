import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import '../Home/styles/cardProduct.css'

const CartItem = ({ prodInfo }) => {

  const dispatch = useDispatch()

  const handleDelete = () => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/${prodInfo.id}`
    axios.delete(url, config)
      .then(res=>{
        console.log(res.data)
        dispatch(getCartThunk())
        })
      .catch(err=>console.log(err.response))
  }

  return (
    <article className='product'>
      <header className='product__header'>
        <img className='product__img' src={prodInfo.product.images[0].url} alt="" />
      </header >
      <div className='product__body'>
        <div className='product__titles'>
          <h4 className='product__brand'>{prodInfo.product.brand}</h4>
          <h3 className='product__name'>{prodInfo.product.title}</h3>
        </div>
        <ul className='product__price'>
          <li>
            <p className='product__price-label2'>Unit Price</p>
            <p className='product__price-number'>$ {prodInfo.product.price}</p>
          </li>
          <li>
            <p className='product__price-label2'>Quantity</p>
            <p className='product__price-number'>{prodInfo.quantity}</p>
          </li>
        </ul>
        <button onClick={handleDelete} className='product__btn'>
          <img src="/images/39-trash-outline.gif" alt="trash" />
        </button>
      </div>
    </article>
  )
}

export default CartItem