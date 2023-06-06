import React from 'react'
import Footer from './Footer'
import { Navbar, Navbar1 } from './Navbar'

const mystyle={
    body:{
        height:'100vh'
    },
    heading:{
       color:'green',
     
       width:'50%',
       margin:'auto'
    },
    rest:{
        color:"black",
        fontSize:'120%',
        width:"50%",
        margin:"auto"

    }
}
export const Contactus = (props) => {
  return (
    <div style={mystyle.body}>
        <Navbar1 user={props.user}/>
        <div>
            <h1 style={mystyle.heading}>  About us</h1>
          
        </div>
        {/* <img src={logo} style={{height:"30%",width:"30%",margin:"auto"}}></img> */}
        <div style={mystyle.rest}>

            <h3 style={{color:"blue"}}>Address</h3>  plot no.10 and 11,gali no. 18,near tony property,jain road,bhagwati garden,dwarka mor.
        </div>
        <div style={mystyle.rest}>
        <h3 style={{color:"blue"}}>Mobile no.</h3>9212424292
           
        </div>
        <div style={mystyle.rest}>
        <h3 style={{color:"blue"}}>Tel no.</h3> 01142680313
           
        </div>
        <div style={mystyle.rest}>
        <h3 style={{color:"blue"}}>email id</h3>  asramedical1@gmail.com
        </div>
   
        <Footer/>
    </div>
  )
}
