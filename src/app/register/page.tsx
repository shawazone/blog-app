'use client'
import InputFeild from '@/components/InputFeild'
import React from 'react'

import { useState } from 'react'

interface initialStatePorps {
  name: string,
  email: string,
  password: string,
}

const initialState:initialStatePorps = {
  name: '',
  email: '',
  password: '',
}


const register
 = () => {

  const handleChange = (e:any) => {
setState({...state, [e.target.name]:e.target.value});
  }

const handleSubmit = (e:any) => {
e.preventDefault()
axios.post('/api/auth/register', state)
.then{()=> {
  setTimeout{() =>{
    reouter.push('/login')
  }.2500}
  }}
  .catch{err}

}


  const [state, setState] = useState(initialState)
  return (
    <form className="text-center" onSubmit={handleSubmit}>

    <div className='flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2'>
      register
      
      <InputFeild placeholder='Name' name='name' id='name'  type='text' onChange={handleChange} value={state.name}/>
      <InputFeild placeholder='Email'  name='email' id='email' type='email' onChange={handleChange} value={state.email}/>
      <InputFeild placeholder='Password' name='password' id='password'  type='passowrd'  onChange={handleChange} value={state.password}/>
      <button type='submit' className='bg-black text-gray-100'>submit </button>
    </div>
    </form>
  )
}

export default register

