import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/cardProduct.css'

const CardProduct = ({ product }) => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/product/${product.id}`)
  }

  const handleBtnClick = e => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/cart/`
    const data = {
      quantity: 1,
      productId: product.id
    }
    axios.post(url, data, config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      
      .catch(err => console.log(err.response))

    e.stopPropagation()
  }

  return (
    <article className='product' onClick={handleClick}>
      <header className='product__header'>
        <img className='product__img' src={product.images[0].url} alt="image_product" />
      </header>
      <section className='product__body'>
        <header className='product__titles'>
          <h3 className='product__brand'>{product.brand}</h3>
          <h2 className='product__name'>{product.title}</h2>
        </header>
        <div>
          <h3 className='product__price-label'>Price:</h3>
          <h2 className='product__price-number'>$ {product.price}</h2>
        </div>
        <button onClick={handleBtnClick} className='product__btn'>
          <img src="/images/6-shopping-outline.gif" alt="Shopping cart" />
        </button>
      </section>
    </article>
  )
}

export default CardProduct