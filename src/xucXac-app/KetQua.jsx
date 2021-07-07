import React, { Component } from 'react';

class KetQua extends Component {
  render() {
    return (
      <div>
        <div>
          bạn chọn : <span className='text-danger'>TÀI</span>
        </div>
        <div>
          số bàn thắng : <span className='text-success'>0</span>
        </div>
        <div>
          tổng số bàn chơi : <span className='text-warning'>0</span>
        </div>
      </div>
    );
  }
}

export default KetQua;
