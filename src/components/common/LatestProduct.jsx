import React from 'react'
import ProductImg  from '../../assets/images/Mens/eight.jpg'

const LatestProduct = () => {
  return (
   <>
   
 <section className='section-2 pt-5'>
  <div className='container'>
    <h2>New Arrivals</h2>
    <div className='row mt-4'>
      <div className='col-md-3 col-6'>
        <div className='product card border-0'>
          <div className='card-img'>
            <img src={ProductImg} alt=""  className='w-100'/>
          </div>
          <div className='card-body pt-3 '>
          <a href="">Red Shirt</a>
          <div className='price'>
            Rs 500<span className='text-decoration-line-through'>Rs 800</span>
          </div>
        </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='product card border-0'>
          <div className='card-img'>
            <img src={ProductImg} alt=""  className='w-100'/>
          </div>
          <div className='card-body pt-3'>
          <a href="">Red Shirt</a>
          <div className='price'>
            Rs 500<span className='text-decoration-line-through'>Rs 800</span>
          </div>
        </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='product card border-0'>
          <div className='card-img'>
            <img src={ProductImg} alt=""  className='w-100'/>
          </div>
          <div className='card-body pt-3'>
          <a href="">Red Shirt</a>
          <div className='price'>
            Rs 500<span className='text-decoration-line-through'>Rs 800</span>
          </div>
        </div>
        </div>
      </div>
      <div className='col-md-3 col-6'>
        <div className='product card border-0'>
          <div className='card-img'>
            <img src={ProductImg} alt=""  className='w-100'/>
          </div>
          <div className='card-body pt-3'>
          <a href="">Red Shirt</a>
          <div className='price'>
            Rs 500<span className='text-decoration-line-through'>Rs 800</span>
          </div>
        </div>
        </div>
      </div>
      
    
    
    </div>
  </div>
 </section>
   </>
  )
}

export default LatestProduct
