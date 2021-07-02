import React, { Component } from 'react';

class BtnChangeColor extends Component {
  render() {
    const btn = this.props.btn;
    return (
      <div>
        <button className='btn' onClick={() => this.props.changeColor(btn.srcCar)}>
          <img src={btn.sourceIcon} alt='hinh' style={{ width: 50 }} />
        </button>
      </div>
    );
  }
}

export default BtnChangeColor;
