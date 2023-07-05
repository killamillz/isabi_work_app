import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { BiLogIn } from 'react-icons/bi'
import {VscAccount} from 'react-icons/vsc'


const header = () => {
  return <> 

     <header className='header-top-strip p-1 px-4 shadow-sm'>
          <div className="container-xxl">
               <div className="row align-items-center">
                    <div className="col-6">
                         <p> Find skilled workers with no haze</p> 
                    </div>
                    <div className="col-6 d-flex justify-content-between">
                         <div>
                              <a href='https://mail.google.com/mail/u/0/#inbox' target="_blank"> E-mail Us:  recruiter@isabiwork.ng</a>
                         </div>
                         <div>
                              <Link><AiOutlineMail className='fs-4 mx-4'/></Link>
                              <Link><BiPhoneCall className='fs-4 mx-4'/></Link>
                         </div>
                    </div>
               </div>
          </div>
     </header>
     <header className='header-upper px-  3 '>
          <div className="container-xxl">
               <div className="row">
                    <div className="col-2 text-center m-auto ">
                         <Link to={'/'}><p className='img-fluid logo rounded-circle fs-3' ><strong>i</strong>Sabi</p></Link>
                    </div>
                    <div className="col-3 d-flex align-items-center mt-3">
                         <div className="input-group mb-3">
                              <span className="input-group-text" id="basic-addon1">📍</span>
                              <input type="text" className="form-control" p-2 placeholder="Select city" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                              <button className="input-group-text" id="basic-addon2">Search</button>
                         </div>
                    </div>
                    <div className="navs-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
                         <Link to={'/'}>Home</Link>
                         <Link to={'profile'}>Profile</Link>
                         <Link to={'about-us'}>About Us</Link>
                         <Link to={'contact'}>Contact</Link>
                         
                    </div>
                    <div className=" nav-links-nav col-2 d-flex align-items-center justify-content-between">
                         <Link to={'login'} className='d-flex'> <BiLogIn className='fs-3 mx-2 m b-0'/>
                         <span>Login</span>
                         </Link>
                         <Link to={'signup'} className='d-flex'><VscAccount className='fs-3 mx-2 m b-0'/>
                         <span>SignUp</span></Link>
                    </div>
               </div>
          </div>

     </header>
  </>

}

export default header
