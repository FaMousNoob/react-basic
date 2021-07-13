import React, { Component } from 'react';

class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 20,
    };
    this.name = 'tảo';
  }
  render() {
    console.log('render');
    return (
      <div>
        <h2>Updating</h2>
        <h2>tuổi {this.state.age}</h2>
        <p>tên {this.name}</p>
        <button
          className='btn'
          onClick={() => {
            this.setState({ age: (this.state.age += 1) });
          }}>
          {' '}
          tăng tuổi
        </button>
        <button
          onClick={() => {
              this.name = 'new shits'
            this.forceUpdate();
          }}>
          Force Update
        </button>
      </div>
    );
  }

  componentDidUpdate(prevProps, prevState) {
      console.log('PrevState', prevState);
      console.log('this.state', this.state);
  }
}

export default Updating;
