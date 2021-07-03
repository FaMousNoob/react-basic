import React, { Component } from 'react';

class GlassessSection extends Component {
  render() {
    const glassess = this.props.glassess;
    return (
      <div className='col-3'>
        <button
          className='btn btn-outline-secondary'
          onClick={() =>
            this.props.changeGlassess(
              glassess.source,
              glassess.price,
              glassess.name
            )
          }
        >
          <img
            src={glassess.source}
            alt='hinh'
            style={{ width: 100, borderRadius: 20 }}
          />
        </button>
      </div>
    );
  }
}

export default GlassessSection;
