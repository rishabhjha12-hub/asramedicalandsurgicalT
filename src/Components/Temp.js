import React, { useState } from 'react'
import axios from 'axios'
import { Navbar, Navbar1 } from './Navbar'
export const Temp = ({ user }) => {
    const [st,sets]=useState('Delhi')
    const [temp,setTemp]=useState('')
    const [city,setcity]=useState('')
    const [loader,setloader]=useState(false)
    const apikey='50733be44e9077981a33df022e51fdda'
    const url=`http://api.weatherstack.com/current?access_key=50733be44e9077981a33df022e51fdda&query=${st}`
    
    const getWeather=()=>{
      
        setloader(true)
        axios.get(`http://api.weatherstack.com/current?access_key=50733be44e9077981a33df022e51fdda&query=${st}`).then((response)=>{
            console.log(response.data)
            setTemp(response.data.current.temperature)
            setcity(response.data.location.name)
        }).catch((err)=>{
            console.log(err);
            alert("enter right city")
        })
      // setloader(false)

    }
   
  return (
    <div style={{backgroundColor:"green",height:"100vh"}}>
      <Navbar1 user={user}/>
      <div style={{height:"25rem",width:"25rem",margin:"auto",padding:'4rem' }}>
      {loader?<div style={{color:'green',fontWeight:'bolder',fontSize:"3rem", backgroundColor:"white"}}>{city} {temp}</div>:<div style={{color:'green',fontWeight:'bolder',fontSize:"3rem", backgroundColor:"white"}}> check weather </div> }
         

      </div>
      <div style={{width:"20rem",margin:"auto"}}>
          
         <input  type='text' onChange={(e)=>sets(e.target.value)} placeholder="enter city"/>
         <button onClick={()=>getWeather(st)}>get weather</button>

         </div>
         
    </div>
  )
}
