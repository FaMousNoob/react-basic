import React, { Component } from 'react';

class ProductItems extends Component {
  render() {
    const product = this.props.product

    return (
      <div className='container'>
        <div className='card bg-light' style={{ width: 300 }}>
          <img
            className='card-img-top'
            src={product.url}
            alt='hinh anh'
            style={{ maxWidth: '100%', height: 250 }}
          />
          <div className='card-body text-center'>
            <h4 className='card-title text-center'>{product.name}</h4>
            <p className='card-text'>
              iPhone X features a new all-screen design. Face ID, which makes
              your face your password
            </p>
            <a href='#' className='btn btn-primary'>
              Detail
            </a>
            <a href='#' className='btn btn-danger'>
              Cart
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItems;
