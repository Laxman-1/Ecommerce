import React from 'react';
import Layout from './common/layout';
import Hero from './common/Hero';
import ProductImg from '../assets/images/Mens/eight.jpg';
import { Link } from 'react-router-dom';
const Shop = () => {
  return (
    <Layout>
      <div className="container">
        <nav aria-label="breadcrumb" className="py-4">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Shop</li>
          </ol>
        </nav>
        <div className="row">
          {/* Categories Section */}
          <div className="col-md-3">
            <div className="card shadow border-0 mb-3">
              <div className="card-body p-4">
                <h3>Categories</h3>
                <ul>
                  <li className="mb-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2">Kids</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2">Mens</label>
                  </li>
                  <li className="mb-2">
                    <input type="checkbox" />
                    <label htmlFor="" className="ps-2">Womens</label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card-body shadow border-0 mb-3 p-4">
              <h3>Brands</h3>
              <ul>
                <li className="mb-2">
                  <input type="checkbox" />
                  <label htmlFor="" className="ps-2">Puma</label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" />
                  <label htmlFor="" className="ps-2">Zara</label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" />
                  <label htmlFor="" className="ps-2">Kevis</label>
                </li>
                <li className="mb-2">
                  <input type="checkbox" />
                  <label htmlFor="" className="ps-2">Flying Machine</label>
                </li>
              </ul>
            </div>
          </div>

          {/* Product Section */}
          <div className="col-md-9">
            
            <div className="row">
              {/* Single Product */}
              <div className="col-md-4 col-6">
                <div className="product card border-0 mb-4">
                  <div className="card-img">
                    <img src={ProductImg} alt="Product" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                  <Link to='/Product'>Red Shirt best</Link>
                    <div className="price">
                      Rs 500<span className="text-decoration-line-through"> Rs 800</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more products here */}
              <div className="col-md-4 col-6">
                <div className="product card border-0 mb-4">
                  <div className="card-img">
                    <img src={ProductImg} alt="Product" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <Link to='/Product'>Red Shirt best</Link>
                    <div className="price">
                      Rs 500<span className="text-decoration-line-through"> Rs 800</span>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-4 col-6">
                <div className="product card border-0 mb-4">
                  <div className="card-img">
                    <img src={ProductImg} alt="Product" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Shirt</a>
                    <div className="price">
                      Rs 500<span className="text-decoration-line-through"> Rs 800</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-6">
                <div className="product card border-0 mb-4">
                  <div className="card-img">
                    <img src={ProductImg} alt="Product" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Shirt</a>
                    <div className="price">
                      Rs 500<span className="text-decoration-line-through"> Rs 800</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-6">
                <div className="product card border-0 mb-4">
                  <div className="card-img">
                    <img src={ProductImg} alt="Product" className="w-100" />
                  </div>
                  <div className="card-body pt-3">
                    <a href="#">Red Shirt</a>
                    <div className="price">
                      Rs 500<span className="text-decoration-line-through"> Rs 800</span>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
