import React, { Component } from 'react'
import {auth, storage, db } from '../Config/Config'

export class Donors extends Component {
    state={
        donors:null
    }
  
    componentDidMount(){

        db.collection('Donate')
        .get()
        .then(snapshot=>{
            const donors=[];
            snapshot.forEach(doc=>{
                const data=doc.data();
                donors.push(data)
            })
            this.setState({donors:donors})
            console.log('donors',donors)
            console.log('ccccc',snapshot)

        })
        .catch(err=>console.lof(err))
    }
    
  render() {
    return (
      <div>
        <h1>Donors</h1>
        
        
        {
            this.state.donors &&
            this.state.donors.map(donor=>{
                return(
                    <div style={{backgroundColor:"orange",margin:'10px'}}>
                        <p style={{color:'green'}}>Name: {donor.Name}</p>
                        <p style={{color:'green'}}>Bloodgroup: {donor.Bloodgroup}</p>
                        <button><a href='https://docs.google.com/forms/d/e/1FAIpQLSfHeKy5KIP-Ji5i7d6msqbeLlP_ilB7Xc72OdC8FLK6PLGXEA/viewform?usp=sf_link'>request blood</a></button>
                    </div>
                   

                )
            })
        }
      </div>
    
    )
  }
}

export default Donors