import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCartThunk } from '../../store/slices/cart.slice'
import config from '../../utils/getConfig'
import './styles/productInfo.css'

const ProductInfo = ({ product }) => {

  const dispatch = useDispatch()

  const [counter, setCounter] = useState(1)

  const handleAdd = ()=>{
    setCounter(counter+1)
  
  }

  const handleMinus = ()=> {
    setCounter(counter-1)
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

    
  }


  return (
    <article className='info'>
      <div className='info__box'>
        <div className='info__img'>
          <img src={product?.images[0].url} alt="IMG Product" />
        </div>
        <div className='info__content'>
          <h2 className='info__content__title'>{product?.title}</h2>
          <h3 className='info__content__brand'>{product?.brand}</h3>
          <p className='info__content__description'>{product?.description}</p>
          <footer className='info__footer'>
            <div className='info__footer__price'>
              <h4>Price:</h4>
              <span>$ {product?.price}</span>
            </div>
            <div className='info__footer__quantify'>
              <h4>Quantify</h4>
              <div className='info__footer__quantify-counter'>
                <div onClick={handleMinus}>-</div>
                <div>{counter}</div>
                <div onClick={handleAdd}>+</div>
              </div>
            </div>
            
          </footer>
          <button onClick={handleBtnClick} className='btn__cart'>
              <img src="/images/6-shopping-outline.gif" alt="" />
          </button>
        </div>
      </div>
      
    </article>
  )
}

export default ProductInfo