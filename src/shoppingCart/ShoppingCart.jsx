import React, { Component } from 'react';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ModalCard from './ModalCard';

class ShoppingCart extends Component {
  prodList = [
    {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },

    {
      maSP: 2,
      tenSP: 'Meizu 16Xs',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie); Flyme',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 7600000,
      hinhAnh: './img/meizuphone.jpg',
    },

    {
      maSP: 3,
      tenSP: 'Iphone XS Max',
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: 'iOS 12',
      cameraSau: 'Chính 12 MP & Phụ 12 MP',
      cameraTruoc: '7 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 27000000,
      hinhAnh: './img/applephone.jpg',
    },
  ];

  state = {
    prodDetail: {
      maSP: 1,
      tenSP: 'VinSmart Live',
      manHinh: 'AMOLED, FHD+ 2232 x 1080 pixels',
      heDieuHanh: 'Android 9.0 (Pie)',
      cameraTruoc: '20 MP',
      cameraSau: 'Chính 48 MP & Phụ 8 MP, 5 MP',
      ram: '4 GB',
      rom: '64 GB',
      giaBan: 5700000,
      hinhAnh: './img/vsphone.jpg',
    },
  };

  handleAddCart = (prod) => {
    console.log(prod);
    let newCartList = [...this.state.cartList, prod];

    this.setState({
      cartList: newCartList,
    });
  };

  changeProdDetail = (prodDetail) => {
    console.log(prodDetail);
    this.setState({
      prodDetail,
    });
  };

  render() {
    return (
      <div>
        <section className='container'>
          <h3 className='title text-center'>Bài tập giỏ hàng</h3>
          <div className='container text-center my-2'>
            <button
              className='btn btn-danger '
              data-toggle='modal'
              data-target='#modelId'>
              Giỏ hàng (0)
            </button>
          </div>
          <ProductList
            handleAddCart={this.handleAddCart}
            prodList={this.prodList}
            changeProdDetail={this.changeProdDetail}
          />
          <ModalCard />
          <ProductDetail prodDetail={this.state.prodDetail} />
        </section>
      </div>
    );
  }
}

export default ShoppingCart;
