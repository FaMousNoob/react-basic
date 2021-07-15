import React, { Component } from 'react';
// import XucXacItem from './XucXacItem';
import { connect } from 'react-redux';

class BanChoi extends Component {
  renderXucXacItem = () => {
    const arrXucXac = this.props.arrXucXac;
    return arrXucXac.map((xucXacItem, index) => (
      <img key={index} src={xucXacItem.hinhAnh} width={50} height={50} alt='hinh' />
    ));
  };

  render() {
    console.log('BanChoiProps', this.props);
    return (
      <div>
        <div className='row text-center'>
          <div className='col-4'>
            <button className='bg-danger display-4 p-5 text-light'>TÀI </button>
          </div>
          <div className='col-4'>
            <div className='d-flex justify-content-center'>
              {this.renderXucXacItem()}
            </div>
          </div>
          <div className='col-4'>
            <button className='bg-dark display-4 p-5 text-light'>XỈU </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrXucXac: state.xucXac.arrXucXac,
  };
};

const ComponentBanChoi = connect(mapStateToProps)(BanChoi);

export default ComponentBanChoi;
