import React, { useEffect, useState } from 'react'
import { storage, db } from '../Config/Config'
import { Donors } from './Donors'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar, Navbar1 } from './Navbar';

export const Blood = (props) => {
    const [product,setProduct]=useState('')
    

    const [Name, setName] = useState('');
    const [Bloodgroup, setBloodgroup] = useState(0);
    const [Phone, setPhone] = useState(null);
    const [error, setError] = useState('');


    
   
    const addProduct = (e) => {
        e.preventDefault();
       
                    db.collection('Donate').add({
                        Name: Name,
                        Bloodgroup: Bloodgroup,
                        Phone: Number(Phone)
                    }).then(() => {
                        setName('');
                        setBloodgroup('');
                        setPhone(0);
                        setError('');
                        document.getElementById('file').value = '';
                    }).catch(err => setError(err.message))
                    toast.info('refresh to see yourself in donor list', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                    });
           
    }
    const Frame = ({Name , Bloodgroup , Phone}) => {
        console.log(Name)
        return (
          
                <div >
                      
    <p>NAME : {Name}</p>
       
                      
    <p>Phone : {Phone}</p>
      
                      
    <p>Bloodgroup: {Bloodgroup}</p>
       
                </div>
      
        );
    }
   
   const user=props.user;
    return (
        <div className='container'>
            <Navbar1 user={user}/>
           
            <br />
            <h2>Give Blood Save Life</h2>
            <hr />
            <form autoComplete="off" className='form-group' onSubmit={addProduct}>
                <label htmlFor="product-name">Enter Your Name</label>
                <input type="text" className='form-control' required
                    onChange={(e) => setName(e.target.value)} value={Name} />
                <br />
                <label htmlFor="product-price">Blood group</label>
                <input type="text" className='form-control' required
                    onChange={(e) =>  setBloodgroup(e.target.value)} value={Bloodgroup} />
                <br />
                <label htmlFor="product-img">Phone number</label>
                <input type="number" className='form-control' id="file" required
                    onChange={(e) =>  setPhone(e.target.value)} value={Phone}/>
                <br />
                <button type="submit" className='btn btn-success btn-md mybtn'>ADD</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            <Donors user={user}/>

          
  
           
        </div>
    )
}
