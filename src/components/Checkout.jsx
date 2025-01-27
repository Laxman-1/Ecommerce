import React, { useState } from 'react'
import Layout from './common/layout'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/images/Mens/six.jpg'

const Checkout = () => {
    const[paymentMethod,setpaymentMethod]=useState('cod');
    const handlePaymentMethod=(e)=>{
        setpaymentMethod(e.target.value);
    }
  return (
   <Layout>
<div className='container pb-5'>
<div className='row'>
    <div className='col-md-12'>
    <nav aria-label="breadcrumb" className="py-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to='/shop'>Checkout</Link>
                            </li>
        
                        </ol>
                    </nav>
                </div>
                </div>

                <div className='row'>
                    <div className='col md-7'>
                        <h3 className='border-bottom pb-3'>Billing details</h3>
                       <form action="">
                         <div className='row pt-3'>
                            <div className='col-md-6'>
                              <div className='mb-3'>
                              <input className='form-control' type="text" id='' placeholder='name'/>
                              </div>
                              </div>
                              <div className='col-md-6'>
                              <div className='mb-3'>
                              <input className='form-control' type="email" id='' placeholder='email'/>
                              </div>
                            </div>
                            
                            <div className='mb-3'>
                              <input className='form-control'  rows={3} type="address" id='' placeholder='Address'/>
                              </div>
                          
                            
                              <div className='col-md-6'>
                              <div className='mb-3'>
                              <input className='form-control' type="contact" id='' placeholder='Contact'/>
                              </div>
                              </div>
                              <div className='col-md-6'>
                              <div className='mb-3'>
                              <input className='form-control' type="ZIp" id='' placeholder='Zip'/>
                              </div>
                              </div>
                             
                           
                         </div>
                       </form>
                    
                    </div>
                    <div className='col md-5'>
                    <h3 className='border-bottom pb-3'>Items</h3>
                    <table className='table'>
                                           
                                           <tbody>
                                               <tr>
                                               <td >1</td>
                                               <td><img src={ProductImg} width={80} alt=''/></td>
                                               <td>White-Tshirt
                                               <span> Rs 100</span>
                                               <div className='d-flex align-items-center'>
                                                <button className='btn btn-size'>S</button>
                                                 </div>
                                                 <div className='ps-5'>  x 1</div>
                                               </td>
                                               
                                               <td> Rs 100</td>
                                               
                                                </tr>
                                                
                                           </tbody>
                                       </table>
                                       <div className='row justify-content-end'>
                        <div className='col-md-3 border-2 pt-5'>
                            <div className='d-flex justify-content-between border-bottom pb-3'>
                           <div><strong>Subtotal</strong></div>
                           <div>Rs 100</div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom py-3'>
                           <div><strong>Shipping</strong></div>
                           <div>Rs 10</div>
                            </div>
                            <div className='d-flex justify-content-between border-bottom py-3'>
                            <div ><strong>Grand Total:</strong></div>
                            <div>Rs 110</div>
                            </div>
                          
                        </div>
                    </div>
                    <h3 className='border-bottom pb-3'><strong>Payment Method</strong></h3>
                    <div className="d-flex align-items-center mb-2">
                        <input type='radio' 
                        onClick={handlePaymentMethod}
                        checked={paymentMethod=='Esewa'} value={'Esewa'}/>
                        <label html for=" " className='form-label ps-2 '>Esewa</label>
                       
                        <input type='radio'  className='ml-4' onClick={handlePaymentMethod} checked={paymentMethod=='Khalti'} value={'Khalti'}/>
                        <label html for=" " className='form-label ps-2'>Khalti</label>
                     </div>
            
                     <div className='d-flex justify-content-end border-bottom py-3'>
                    <button className='btn btn-primary'>Pay now</button></div>
                    </div>

                   
                </div>
                
                </div>
    
   </Layout>
  )
}

export default Checkout
