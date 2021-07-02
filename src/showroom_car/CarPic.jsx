import React, { Component } from 'react';

class CarPic extends Component {
  render() {
    return (
      <div>
        <img className='img-thumbnail' src={this.props.carImg} alt='hinh' />
      </div>
    );
  }
}

export default CarPic;
