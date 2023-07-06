import React from 'react'
import { Link } from 'react-router-dom'

const signup = () => {
     return <>
          <form className='container-xxl p-5 d-flex flex-column justify-content-around'>
               <label >Firstname</label>
               <input type='' placeholder='first name'></input>
               <label >Last name</label>
               <input type='email' placeholder='last name'></input>
               <label >email</label>
               <input type='email' placeholder='username'></input>
               <label >Location</label>
               <select name="Location" id="location">
                    <option value="Lagos">Lagos</option>
                    <option value="Benin">Benin</option>
                    <option value="Abuja">Abuja</option>
                    <option value="Kano">Kano</option>
               </select>
               <label >email</label>
               <input type='email' placeholder='Email'></input>
               <label >password</label>
               <input type='password' placeholder='*********'></input>
               <Link to="/profile"> <button type="submit" className='mt-3' >Log in</button> </Link> 
          </form>
     </>
}

export default signup
