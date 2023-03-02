import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import defaultValues from '../utils/defaultValues'

const RegisterPages = () => {

  const {register, handleSubmit, reset} = useForm()

  const submit = data => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    axios.post(url, data)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
    reset(defaultValues)
  }

  return (
    <div className='register__form'>
      <form className='form' onSubmit={handleSubmit(submit)}>
      <h2 className="form__title">Register</h2>
        <div className="form__item">
          <label className="form__label" htmlFor='firstName'>First Name:</label>
          <input className="form__input" {...register('firstName')} type='text' id='firstName' placeholder='Enter your firts name...'/>
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor='lastName'>Last Name:</label>
          <input className="form__input" {...register('lastName')} type='text' id='lastName' placeholder='Enter your last name...'/>
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor='email'>E-mail:</label>
          <input className="form__input" {...register('email')} type='email' id='email' placeholder='Enter your e-mail...'/>
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor='password'>Password:</label>
          <input className="form__input" {...register('password')} type='password' id='password' placeholder='Enter your password...'/>
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor='phone'>Phone:</label>
          <input className="form__input" {...register('phone')} type='phone' id='phone' placeholder='Enter your phone...'/>
        </div>
        <div className="form__btn">
          <button className="btn">Register</button>
        </div>
      </form>
    </div>
  )
}

export default RegisterPages