import React, { Component } from 'react';

class CardShowcase extends Component {
  render() {
    const originGlasses = this.props.originGlassess;
    const modelPic = this.props.modelPic;
    return (
      <div
        className='card text-left'
        style={{ width: 300, position: 'relative' }}
      >
        <img className='card-img-top' src={modelPic} alt='hinh model' />
        <img
          src={originGlasses.source}
          alt='kinh'
          style={{
            width: 170,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: '16%',
          }}
        />
        <div className='card-body'>
          <span className='card-title badge-danger h3 px-2 rounded'>
            {originGlasses.price}$
          </span>
          <p className='card-text mt-2'>{originGlasses.name}</p>
        </div>
      </div>
    );
  }
}

export default CardShowcase;
