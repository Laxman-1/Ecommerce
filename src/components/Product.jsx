import React, { useState } from 'react';
import Layout from './common/layout';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Rating } from 'react-simple-star-rating';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Importing product images
import ProductImgOne from '../assets/images/Mens/five.jpg';
import ProductImgTwo from '../assets/images/Mens/six.jpg';
import ProductImgThree from '../assets/images/Mens/seven.jpg';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4)

    return (
        <Layout>
            <div className='container product-detail'>
                <div className='row'>
                    <nav aria-label="breadcrumb" className="py-4">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to='/'>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to='/shop'>Shop</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Dummy title
                            </li>
                        </ol>
                    </nav>
                </div>

                <div className='row'>
                    {/* Product Image Section */}
                    <div className='col-md-5'>
                        <div className='row'>
                            {/* Thumbnail Swiper */}
                            <div className='col-2'>
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                    }}
                                    onSwiper={setThumbsSwiper}
                                    loop={true}
                                    direction="vertical"
                                    spaceBetween={10}  // Adds spacing between the thumbnails
                                    slidesPerView={4}  // Adjust to fit your design needs
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-2"
                                >
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgOne} 
                                                alt="Product Thumbnail 1" 
                                                height={100}
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgTwo} 
                                                alt="Product Thumbnail 2" 
                                                height={100}
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgThree} 
                                                alt="Product Thumbnail 3" 
                                                height={100}
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            {/* Main Image Swiper */}
                            <div className="col-10">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                    }}
                                    loop={true}
                                    spaceBetween={10}  // Adds a little gap between images
                                    navigation={true}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}  // Link thumbs with main image
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgOne} 
                                                alt="Product Image 1" 
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgTwo} 
                                                alt="Product Image 2" 
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className="content">
                                            <img 
                                                src={ProductImgThree} 
                                                alt="Product Image 3" 
                                                className="w-100" 
                                            />
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>

                    {/* Product Details Section */}
                    <div className="col-md-7">
                        <h2>Dummy Title</h2>
                       <div className='d-flex'>
                       <Rating
                        size={20}
                        readonly
                      initialValue={rating} />
                        <span className='pt-1 ps-2'> 20 Reviews</span>
                       </div>
                       <div className='price py-3' >
                         $200 <span className='text-decoration-line-through'>RS20</span>
                        </div>
                        <div>
                            100% original products .
                            Best quality fabric. 
                        </div>
                        <div className='pt-3'>
                        <stong>Select Size</stong>
                        <div className='sizes pt-2'>
                            <button className='btn btn-size ms-1'>S</button>
                            <button className='btn btn-size ms-1'>M</button>
                            <button className='btn btn-size m-1'>L</button>
                            <button className='btn btn-size ms-1'>XL</button>
                        </div>
                        </div>
                        <div className='Add To Cart my-4'>
                            <button className='btn btn-primary text-uppercase'>
                            <Link to="/cart" className='ms-3'>
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="28" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z">
                                     </path></svg>
                                   </Link>
                            </button>
                        </div>

                        <hr/>
                        <div className='mb-5'>
                            <strong>SKU:</strong>
                            er4556
                        </div>
                    </div>
                    <div className='row'>
                            <div className='col-md-12 pb-5'>
                            <Tabs
                            defaultActiveKey="profile"
                            id="uncontrolled-tab-example"
                            className="mb-3"
                            >
                            <Tab eventKey="home" title="Description">
                              Description
                            </Tab>
                            <Tab eventKey="profile" title="Reviews">
                                Reviews
                            </Tab>
                            
                            </Tabs>
                            </div>
                        </div>

                        
                </div>
            </div>
        </Layout>
    );
};

export default Product;
