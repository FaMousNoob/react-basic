import React, { Component } from 'react';

class DemoDataBinding extends Component {
  //Proberty
  song = 'Save Your Tears';
  artist = 'The Weekend';

  renderInfo = () => {
    return (
      <div>
        <p>
          song {this.song} by {this.artist}
        </p>
      </div>
    );
  };

  render() {
    const like = 1000;
    return (
      <div>
        <h1>Data binding</h1>
        {this.renderInfo()}
        <p>{like}</p>
      </div>
    );
  }
}

export default DemoDataBinding;
