import React, { useContext } from 'react'
import { ProductsContext } from '../Global/ProductsContext'
import { CartContext } from '../Global/CartContext'
import ratelist from '../images/ratelist.pdf'

export const Products = (props) => {

    const { products } = useContext(ProductsContext);

    const { dispatch } = useContext(CartContext);

    return (
        <>
          {/* <a style={{textDecoration:'none',color:'red',fontWeight:'bold'}} href="https://docs.google.com/forms/d/e/1FAIpQLSeii1HByqiIXcNgkGo0pkIT41rNZRoeQERtpP5M-bbVq4pHEA/viewform?embedded=true" target='_blank'>click here to Schedule a lab test</a> */}
            {products.length !== 0 && <h1>Products/Tests</h1>}
            <p style={{color:'grey',width:'80%',margin:"auto",fontWeight:"bold"}}>The prices are exclusive of gst(12%)</p>
          <div style={{width:'80%',margin:"auto",fontWeight:"bold"}}> <a href ={ratelist}  download> <button >download full ratelist </button> </a> 
            </div> 
            <div className='products-container'>
                {products.length === 0 && <div>slow internet...no products to display</div>}
                {products.map(product => (
                    <div className='product-card' key={product.ProductID}>
                        <div className='product-img'>
                            <img src={product.ProductImg} alt="not found" />
                        </div>
                        <div className='product-name'>
                            {product.ProductName}
                        </div>
                        <div className='product-price'>
                            Rs {product.ProductPrice}.00
                    </div>
                        <button className='addcart-btn' onClick={() =>props.user? dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product ,}):props.history.push('/login')}>ADD TO CART</button>
                    </div>

                ))}
                 <p style={{color:'black',width:'80%',margin:"auto",fontWeight:"bold"}}>More products will be added soon</p>
            </div>
           
        </>
    )
}
