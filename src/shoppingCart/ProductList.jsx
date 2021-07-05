import React, { Component } from 'react';
import Product from './Product';

export default class ProductList extends Component {
  renderProdList = () => {
    // const prodList = this.props.prodList;
    // const changeProdDetail = this.props.changeProdDetail;
    // const handleAddCart = this.props.handleAddCart;

    // es6 destructuring
    const {prodList, changeProdDetail, handleAddCart} = this.props


    return prodList.map((product, index) => (
      <div className='col-sm-4' key={index}>
        <Product handleAddCart={handleAddCart} product={product} changeProdDetail={changeProdDetail} />
      </div>
    ));
  };

  render() {
    return (
      <div>
        <div className='container danh-sach-san-pham'>
          <div className='row'>{this.renderProdList()}</div>
        </div>
      </div>
    );
  }
}
