import React, { Component } from 'react';
import ProductItems from './productItems.js';

class ProductList extends Component {
  productItem = [
    {
      id: 1,
      url: './img/sp_note7.png',
      name: 'Note 7',
    },
    {
      id: 2,
      url: './img/sp_iphoneX.png',
      name: 'Iphone X',
    },
    {
      id: 3,
      url: './img/sp_note7.png',
      name: 'Note 7',
    },
    {
      id: 4,
      url: './img/sp_iphoneX.png',
      name: 'Iphone X',
    },
  ];

  renderProductItem = () => {
    return this.productItem.map((product, index) => (
      <div
        className='col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3'
        key={index}>
        <ProductItems product={product} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <section id='smartphone' className='container-fluid pt-5 pb-5 bg-dark'>
          <h1 className='text-white text-center'>WEB NÀY THUỘC QUỀN SỞ HỮU CỦA NGÔ BẢO PHƯƠNG TẢO</h1>
          <div className='row'>
            {this.renderProductItem}
          </div>
        </section>
      </div>
    );
  }
}

export default ProductList;
