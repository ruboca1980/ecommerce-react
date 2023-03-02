import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'

const Header = () => {

  const [clicked, setClicked] = useState(false)


  const handleClick = () => {
    setClicked(!clicked)

  }

  const handleClosed = () => {
    setClicked(false)

  }

  return (
    <header className='header'>
      <h1 className='header__logo'>
        <Link className='header__logo-link' to='/'>e-commerce</Link>
      </h1>
      <nav>
        <div className={`header__desktop ${!clicked ? 'active' : ''}`} >
          <ul className='header__list'>
            <li className='header__link'><Link onClick={handleClosed} className='header__item' to='/user/login'>Login</Link></li>
            <li className='header__link'><Link onClick={handleClosed} className='header__item' to='/purchases'>Purchases</Link></li>
            <li className='header__link'><Link onClick={handleClosed} className='header__item' to='/cart'>Shopping Cart</Link></li>
          </ul>
        </div>
      </nav>
      <div className={`header__mobile-cont ${!clicked ? 'menu__small' : ''}`}>
        <button className={`header__mobile ${clicked ? 'menu-x' : ''}`}  onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </button>
      </div>
      
    </header>
  )
}

export default Header

