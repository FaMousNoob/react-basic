import React, { Component } from 'react';

export default class Product extends Component {
  handleClick = () => {
    const changeProdDetail = this.props.changeProdDetail;
    constprodDetail = this.props.product;

    changeProdDetail(prodDetail);
    // console.log(object);
  };

  addCart = () => {
    const { handleAddCart, product } = this.props;
    handleAddCart(product);
  };
  render() {
    const prod = this.props.product;
    return (
      <div>
        <div className='card'>
          <img className='card-img-top' src={prod.hinhAnh} alt='hinhAnh' />
          <div className='card-body'>
            <h4 className='card-title'>{prod.tenSP}</h4>
            <button className='btn btn-success' onClick={this.handleClick}>
              Chi tiết
            </button>
            <button className='btn btn-danger' onClick={this.addCart}>
              Thêm giỏ hàng
            </button>
          </div>
        </div>
      </div>
    );
  }
}
