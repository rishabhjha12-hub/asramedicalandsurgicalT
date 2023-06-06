import React, { useState } from 'react'

import emailjs from '@emailjs/browser';


import { auth, db } from '../Config/Config'
import { Link } from 'react-router-dom'
import { Navbar, Navbar1 } from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

toast.configure();



export const Signup = (props) => {
   
   

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // signup
    const mystyle={
        body:{
            height:"100vh"
        }
    }
    
    const signup = (e) => {
      
        e.preventDefault();
       
        auth.createUserWithEmailAndPassword(email, password).then((cred) => {
            db.collection('SignedUpUsersData').doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(() => {
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                props.history.push('/login');
               
               

               
            }).catch(err => setError(err.message));
        }).catch(err => setError(err.message));
        toast.info('signed up successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
        });
      
    }

    return (
        <div className='container' style={mystyle.body}>
            <Navbar1 />
            <br />
            <h2>Sign up</h2>
            <br />
            <form autoComplete="off" className='form-group' id='formm'  onSubmit={signup}>
                <label htmlFor="name">Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={name} name='to_name'/>
                <br />
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} name='reply_to' />
                <br />
                <label htmlFor="passowrd">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>SUBMIT</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br />
            <span>Already have an account? Login
                <Link to="login"> Here</Link>
            </span>
            <Footer/>
        </div>
    )
}
