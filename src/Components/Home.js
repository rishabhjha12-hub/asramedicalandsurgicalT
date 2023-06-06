import React, { useEffect,useContext } from 'react'
import { Navbar, Navbar1 } from './Navbar';
import { Products } from './Products'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import Footer from './Footer';
import { Temp } from './Temp';
import { Contactus } from './Contactus';
import { Icon } from 'react-icons-kit'
import Carousel from 'react-bootstrap/Carousel';
import { cart } from 'react-icons-kit/entypo/cart'
import lab1 from '../images/c1.jpg'
import lab2 from '../images/c2.jpg'
import lab3 from '../images/c3.jpg'


import { CartContext } from '../Global/CartContext'


export const Home = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // useEffect(() => {
    //     // forcing user to signup
    //     auth.onAuthStateChanged(user => {
    //         if (!user) {
    //             history.push('/login');
    //         }
    //     })
    // })

    return (
        <div className='wrapper'>
            


          
            <Navbar1  user={user} />



            <Carousel style={{width:"80%",height:"50%",margin:"auto"}}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lab1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Cheapest Lab Test</h3>
          <p>We Provide door to door lab test</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lab2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Surgical items</h3>
          <p>We sell all the types of surgical items including test kits</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={lab3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Setting up lab</h3>
          <p>
            We set up labs
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            








         
      
            <div style={{backgroundColor:"yellow",width:'8rem',margin:"auto" ,padding:"1rem"}}>
            <span ><Link to="cartproducts" >GO TO CART-<Icon icon={cart} /></Link></span>
      <span className='no-of-products'>{totalQty}</span>

            </div>
           
            <marquee  direction="right" className='title' style={{width:'50%',margin:'auto',color:'green', fontSize:'3.5rem'}}>Asra medical and surgicals</marquee>
            <Products user={user} history={history}/>
            
            <Footer/>
        </div>
    )
}
