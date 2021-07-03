import React, { Component } from 'react';

class GlassesSection extends Component {
  render() {
    const glasses = this.props.glasses;
    return (
      <div className='col-3'>
        <button
          className='btn btn-outline-secondary'
          onClick={() =>
            this.props.changeGlasses(
              glasses.source,
              glasses.price,
              glasses.name
            )
          }
        >
          <img
            src={glasses.source}
            alt='hinh'
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  }
}

export default GlassesSection;
