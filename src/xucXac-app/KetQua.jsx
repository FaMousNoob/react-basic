import React, { Component } from 'react';
import { connect } from 'react-redux';

class KetQua extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <div>
          bạn chọn : <span className='text-danger'>{this.props.banChon ? 'TÀI' : 'XỈU'}</span>
        </div>
        <div>
          số bàn thắng : <span className='text-success'>{this.props.soBanThang}</span>
        </div>
        <div>
          tổng số bàn chơi : <span className='text-warning'>{this.props.soBanChoi}</span>
        </div>
      </div>
    );
  }
}

const stateToProps = (rootReducer) => {
  console.log(rootReducer);
  return {
    banChon: rootReducer.xucXac.banChon,
    soBanThang: rootReducer.xucXac.soBanThang,
    soBanChoi: rootReducer.xucXac.soBanChoi,
  };
};

export default connect(stateToProps)(KetQua);
