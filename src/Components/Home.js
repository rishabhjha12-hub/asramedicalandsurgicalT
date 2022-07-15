import React, { useEffect } from 'react'
import { Navbar } from './Navbar';
import { Products } from './Products'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../Config/Config'
import Footer from './Footer';

export const Home = ({ user }) => {

    const history = useHistory();

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
          
            <Navbar user={user} />
            <h1 style={{width:'50%',margin:'auto',color:'green', fontSize:'3.5rem'}}>Asra medical and surgical</h1>
            <Products user={user} history={history}/>
            <Footer/>
        </div>
    )
}
