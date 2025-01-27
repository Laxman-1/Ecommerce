import React from 'react'
import ProductImg  from '../../assets/images/Mens/five.jpg'


const FeaturedProduct = () => {
  return (
      <>
      
    <section className='section-2 py-5'>
     <div className='container'>
       <h2>Featured Products</h2>
       <div className='row mt-4'>
         <div className='col-md-3 col-6'>
           <div className='product card border-0'>
             <div className='card-img'>
               <img src={ProductImg} alt=""  className='w-100'/>
             </div>
             <div className='card-body pt-3'>
             <a href="">Black Leather Jacket</a>
             <div className='price'>
               Rs 1500<span className='text-decoration-line-through'>Rs 1800</span>
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
             <a href="">Black Leather Jacket</a>
             <div className='price'>
               Rs 1500<span className='text-decoration-line-through'>Rs 1800</span>
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
             <a href="">Black Leather Jacket</a>
             <div className='price'>
               Rs 1500<span className='text-decoration-line-through'>Rs 1800</span>
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
             <a href="">Black Leather Jacket</a>
             <div className='price'>
               Rs 1500<span className='text-decoration-line-through'>Rs 1800</span>
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

export default FeaturedProduct
