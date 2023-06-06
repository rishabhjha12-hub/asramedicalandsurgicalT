import React, { useContext } from 'react'
import logo from '../images/logo.jpg'
import { Link } from 'react-router-dom'
import { auth } from '../Config/Config'
import { Icon } from 'react-icons-kit'
import { cart } from 'react-icons-kit/entypo/cart'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Button } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';

// import { Temp } from './Temp'

export const Navbar1 = ({ user }) => {

    const history = useHistory();
    const { totalQty } = useContext(CartContext);

    // handle logout
    const handleLogout = () => {
        auth.signOut().then(() => {
            history.push('/login');
        })
    }

    return (
        // <div className='navbox'>
        //     <div className='leftside'>
        
        //     <Link to="/"><img src={logo} alt="" /></Link>
        //     <Link to="/"> <p className='Home' >ASRA(Home)</p></Link>
        //     </div>
        //     <a style={{textDecoration:'none',color:'red',fontWeight:'bold'}} href="https://docs.google.com/forms/d/e/1FAIpQLSeii1HByqiIXcNgkGo0pkIT41rNZRoeQERtpP5M-bbVq4pHEA/viewform?embedded=true" target='_blank'>Schedule a lab test</a>
        //     {!user && <div className='rightside'>
        //         <span><Link to="signup" className='navlink'>SIGN UP</Link></span>
        //         <span><Link to="login" className='navlink'>LOGIN</Link></span>
        //     </div>}
            
        //     {user && <div className='rightside'>
        //         <span><Link to="/" className='navlink'>{user}</Link></span>
        //         <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
        //         <span className='no-of-products'>{totalQty}</span>
        //         <span><button className='logout-btn' onClick={handleLogout}>Logout</button></span>
        //     </div>}
           

          
            



            
        // </div>
        <div>
            <Navbar bg="light" expand="lg">
      <Container>
               <Navbar.Brand href="/"><img src={logo} height="100rem" width="100rem"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link style={{color:'grey',fontWeight:'bold'}} to="/">Home</Link></Nav.Link>
            <Nav.Link ><Link style={{color:'grey',fontWeight:'bold'}} to="/contactus">Contact Us</Link></Nav.Link>
            <Nav.Link ><Link style={{color:'grey',fontWeight:'bold'}} to="/addblood">Donate/request blood</Link></Nav.Link>
           {!user && <Nav.Link ><Link style={{color:'grey',fontWeight:'bold'}} to="signup" className='navlink'>SIGN UP</Link></Nav.Link>}
            <a style={{textDecoration:'none',color:'grey',fontWeight:'bold', margin:"0.2rem"}} href="https://docs.google.com/forms/d/e/1FAIpQLSeii1HByqiIXcNgkGo0pkIT41rNZRoeQERtpP5M-bbVq4pHEA/viewform?embedded=true" target='_blank'>Schedule a lab test</a>
            
          
            
            <Nav.Link>{user?  <li> <Button variant="primary" onClick={handleLogout}>
         Log out
       </Button></li>
    :<li ><Button  variant="primary" style={{margin:"1rem"}}><Link style={{color:"black"}} to="login">Login</Link></Button></li>

    
    
    }
     {!user && <Button  variant="primary"><Link style={{color:'black',fontWeight:'bold'}} to="signup" className='navlink'>SIGN UP</Link></Button>}
    
    </Nav.Link>
       {user  && <div style={{margin:"auto",padding:"1.2rem" ,backgroundColor:"green"}}>{user}</div> }
          </Nav>
        </Navbar.Collapse>

      </Container>
      {/* <span><Link to="cartproducts" className='navlink'><Icon icon={cart} /></Link></span>
      <span className='no-of-products'>{totalQty}</span> */}
    </Navbar>
        </div>
    )
}
