import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface userDetails { 
     id: number,
     username: string,
     location: string,
     skill: string
}



const Home = () => {
     
     const [data , setData] = useState([] as userDetails[])
     

     useEffect(()=>{
          const fetchData = async ()=>{
               try {
                    const res =await axios.get("http://localhost:4000/profile/skill")
                    setLoading(false);
                    setData(res.data);
                    console.log(res)
               } catch (error) {
                    setLoading(false);
                    console.log('err')
               }
          }
          fetchData()
     }, [])
 
     return <>
          <div className="banner w-100 p-3">
          <div className="container-xxl">
               <div className="row">
                    <div className="banner-details d-flex flex-column align-items-center justify-content-center ">
                         <div className="picture shadow-lg p-5">
                              <span><h5 className='mb-3'> 🎉 "No Skill We No Fit Find, We Sabi Everything!" 🙌 </h5>  </span>
                              <h1 className='mb-5'>Welcome to <strong>i</strong>Sabi - Where Skills Dey Meet Opportunity!</h1>
                              <h4>No Mata Your Location, We Connect You to the Best in the Biz! </h4>   
                         </div>
                         <div className=" head shadow-lg mt-5 ;">
                             
                                   <span className="input-group-text" id="basic-addon1">🔍</span>
                                   <input type="text" className="form-control" p-2 placeholder="Wettin you dey find" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                   <span className="input-group-text" id="basic-addon1">📍</span>
                                   <input type="text" className="form-control" p-2 placeholder="For which area" aria-label="Recipient's username" aria-describedby="basic-addon2"/>   
                                   <button className="input-group-text" id="basic-addon2">Search</button>
                              
                         </div>
                    </div>
               </div>
          </div>

     </div>

     <div className="content display-flex justify-content-around p-5 style = width: 90%;">
               <div className="searches">
                    <div className='text'>
                         <div className="cards mb-5">
                         <h5 className="card-header">Painters</h5>
                              <div className="card-body">
                                   <h6 className="card-title">Search for painters in your locality</h6>
                                   <p className="card-text">We have over 3000+ painters</p>
                                   <a href="#" className="btn btn-primary">Search</a>
                              </div>
                         </div>
                         <div className="cards mb-5">
                         <h5 className="card-header">Painters</h5>
                              <div className="card-body">
                                   <h6 className="card-title">Search for painters in your locality</h6>
                                   <p className="card-text">We have over 3000+ painters</p>
                                   <a href="#" className="btn btn-primary">Search</a>
                              </div>
                         </div>
                         <div className="cards ">
                         <h5 className="card-header">Painters</h5>
                              <div className="card-body">
                                   <h6 className="card-title">Search for painters in your locality</h6>
                                   <p className="card-text">We have over 3000+ painters</p>
                                   <a href="#" className="btn btn-primary">Search</a>
                              </div>
                         </div>
                    </div>
                    
                    <div className='content-main'>
                         {data.map(details => (
                         <div className="card style= width: 18rem;">
                              <div className="card-body">
                                    <div className='d-flex flex-row mb-'>
                                        <img src='../assets/images/images_ (1).png'/>
                                        <h4 className="card-title">{details.username} . </h4>
                                        <h5 className="card-subtitle text-center c-#FF6000">{details.location}</h5>
                                    </div> 
                                         <h3 className="card-subtitle mb-2 c-#FF6000">{details.skill}</h3>
                              </div>
                               <div className='p-3'>
                               <h5>Description</h5>
                               <p className="card-text">{details.description}</p>
                               <a href="#" className="card-link">Contact me</a>
                               <a href="#" className="card-link">Another link</a>
                               </div>
                         </div>
                          ))}
                    </div>

                         <div className='info'>
                              done
                         </div>
                         
               </div>
     </div>
   
   </>    
          
          

}


export default Home






