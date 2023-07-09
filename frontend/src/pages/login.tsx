// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'



 

// const login = () => {

//      // const[email, setEmail] = useState('');
//      // const [pass, setPass] = useState('');
  
//      // const handleSubmit = (e:any ) => {
//      //      e.preventDefault();
//      //      console.log(email)
     
//   return <>
//     <form className='container-xxl p-5 d-flex flex-column'>
//           <label >email</label>
//           <input type='email' placeholder='Email'></input>
//           <label >password</label>
//           <input type='password' placeholder='*********'></input>
//           <Link to="/profile"> <button type="submit" className='mt-3' >Log in</button> </Link> 
//     </form>
//     </>
// }

// export default login

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Validation from './loginValidation';



function login() {
      const [values, setValues] = useState({
            email: '',
            password: ''
      })
      const [errors, setErrors] = useState({})
      const handleInput = (event:any) => {
            setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
      }

      const handleSubmit = (event:any) => {
            event.preventDefault();
            setErrors(Validation(values));
      }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-In</h2>
            <form action="" onSubmit={handleSubmit}>
                  <div className='mb-3'>
                        <label htmlFor="email"><strong>Email</strong> </label>
                        <input type="email" placeholder='Enter Email' name='email'
                        onChange = {handleInput} className='form-control rounded-0'/>
                        {errors.email&& <span className='text-danger'> {errors.email}</span>}
                  </div>
                  <div className='mb-3'>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input type="password" placeholder='Enter Password' name='password'
                        onChange = {handleInput} className='form-control rounded-0'/>
                        {errors.password && <span className='text-danger'> {errors.password}</span>}
                  </div>
                  <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                  <p>You agree to our terms and policies</p>
                  <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Sign Up</Link>

            </form>
      </div>
    </div>
  )
}

export default login
