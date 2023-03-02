import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartItem from '../components/CartPages/CartItem'
import { getCartThunk } from '../store/slices/cart.slice'
import config from '../utils/getConfig'
import './styles/cartPage.css'

export const CartPage = () => {

  const [totalPrice, setTotalPrice] = useState(0)

  const { cart } = useSelector(state => state)

  console.log(cart)

  useEffect(() => {
    const results = cart?.reduce((acc, cv) => acc + cv.quantity * Number(cv.product.price), 0)
    setTotalPrice(results)
  }, [cart])

  const dispatch = useDispatch()
  
  const handlePurchase = () => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases'
    axios.post(url, {},config)
      .then(res => {
        console.log(res.data)
        dispatch(getCartThunk())
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className='cart'>
      <div className='cart__products'>
        {
          cart?.map(prodInfo =>(
            <CartItem 
              key={prodInfo.id}
              prodInfo={prodInfo}
            />  
          ))
        }
      </div>
      <footer className='cart__footer'>
        <div className='cart__footer-cont'>
          <h2 className='cart__footer-price'>
            <span>Total: </span>
            <span>{totalPrice}</span>
          </h2>
          <button onClick={handlePurchase} className='cart__footer-btn'>Buy this cart</button>
        </div>
      </footer>
    </div>
  )
}



/*     

{
  cart ? 
  <div className='home'>
    <div className='home__products'>
    {
      cart?.map(prodInfo =>(
        <CartItem 
        key={prodInfo.id}
        prodInfo={prodInfo}
        />  
        ))
      }
    </div>
  </div>
  : 
  <>
    <div>
      <img src="/images/146-basket-trolley-shopping-card-lineal.gif" alt="cart" />
      <h3>Your cart is empty !!!</h3>
    </div>
  </>
}

*/