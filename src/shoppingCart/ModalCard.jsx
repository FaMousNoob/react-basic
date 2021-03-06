import React, { Component } from 'react';

class ModalCard extends Component {
  renderCartList = () => {
    const { cartList, handleDeleteCart } = this.props;

    return cartList.map((cart, index) => (
      <tr className='card-item' key={index}>
        <td>{index + 1}</td>
        <td>{cart.tenSP}</td>
        <td>
          <img src={cart.hinhAnh} width='50' alt='' />
        </td>
        <td>
          <button>-</button>
          {cart.soLuong}
          <button>+</button>
        </td>
        <td>{cart.giaBan}</td>
        <td>tong tien</td>
        <td>
          <button className='btn btn-danger' onClick={() => handleDeleteCart(cart.maSP)}>
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div>
        <div
          className='modal fade'
          id='modelId'
          tabIndex={-1}
          role='dialog'
          aria-labelledby='modelTitleId'
          aria-hidden='true'>
          <div
            className='modal-dialog'
            role='document'
            style={{ maxWidth: 1000 }}>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Giỏ hàng</h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'>
                  <span aria-hidden='true'>×</span>
                </button>
              </div>
              <div className='modal-body'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th>Mã sản phẩm</th>
                      <th>tên sản phẩm</th>
                      <th>hình ảnh</th>
                      <th>số lượng</th>
                      <th>đơn giá</th>
                      <th>thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCartList()}</tbody>
                </table>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'>
                  Close
                </button>
                <button type='button' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalCard;
