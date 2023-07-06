import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'



 

const login = () => {

     // const[email, setEmail] = useState('');
     // const [pass, setPass] = useState('');
  
     // const handleSubmit = (e:any ) => {
     //      e.preventDefault();
     //      console.log(email)
     
  return <>
    <form className='container-xxl p-5 d-flex flex-column'>
          <label >email</label>
          <input type='email' placeholder='Email'></input>
          <label >password</label>
          <input type='password' placeholder='*********'></input>
          <Link to="/profile"> <button type="submit" className='mt-3' >Log in</button> </Link> 
    </form>
    </>
}

export default login
