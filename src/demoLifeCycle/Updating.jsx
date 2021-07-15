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
    console.log('render from updating');
    return (
      <div>
        <h2>Updating</h2>
        <h2>tuổi {this.state.age}</h2>
        <p>tên {this.name}</p>
        <button
          className='btn btn-primary'
          onClick={() => {
            this.setState({ age: (this.state.age += 1) });
          }}>
          {' '}
          tăng tuổi
        </button>
        <button className='btn btn-danger'
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
      console.log('PrevState from updating', prevState);
      console.log('this.state from updating', this.state);
  }
}

export default Updating;
