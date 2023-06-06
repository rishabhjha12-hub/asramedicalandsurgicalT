import React, { useState } from 'react'
import { auth } from '../Config/Config'
import { Link } from 'react-router-dom'
import { Navbar, Navbar1 } from './Navbar';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import firebase from 'firebase';
import Footer from './Footer';

toast.configure();
//var provider = new firebase.auth.GoogleAuthProvider();
//  const SignInWithFirebase=(props)=>{
    
//     firebase.auth()
   
//     .signInWithPopup(provider).then(function(result) {
      
//        var user = result.user;
         
//     props.history.push('/');
//        console.log("user",user)
//        console.log("email",user.email)
//        console.log("name",user.displayName)
     
//     }).catch(function(error) {
       
         
//        console.log(error.code)
//        console.log(error.message)
//     });

//}
const mystyle={
    body:{
        height:"100vh"
    }
}
export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const login = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            props.history.push('/');
            toast.info('logged in successfully', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
            });
        }).catch(err => setError(err.message));
       
    }
  
    return (
        <div className='container' style={mystyle.body}>
            <Navbar1 />
            <br />
            <h2>Login</h2>
            <br />
            <form autoComplete="off" className='form-group' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" className='form-control' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" className='form-control' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>LOGIN</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <br/>
            {/* <button onClick={SignInWithFirebase}>signin with google</button>  */}
            <span>Don't have an account? Register
                <Link to="signup"> Here</Link>
            </span>
            <Footer/>
        </div>
    )
}
