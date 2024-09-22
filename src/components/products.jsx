import React from 'react'
import Shoes from '../logo/shoes.jpg'

const Products = () => {
  return (
    <>
        <div className='box-first'>
            <img src={Shoes} alt="" width="150px" height="100px" />
        </div>
        <div className='box-second'>
            <div className='box-second-heading'>
                Easily add your design to a wide range of products
            </div>
            <div className='box-second-info'>
                With our free design tools, you can easily add <br/>your custom designs to t-shirts, mugs, phone <br/>cases, and hundreds of other products
            </div>
            <div className='box-third-prod'>
                All products &nbsp;&nbsp; &#x2192;
            </div>
        </div>
    </>
  )
}

export default Products
