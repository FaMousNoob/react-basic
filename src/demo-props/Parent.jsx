import React, { Component } from 'react';
import Child from './Child';
import ChildFunction from './ChildFunction';

class Parent extends Component {
  state = {
    name: 'Darius',
    say: 'dead',
  };

  render() {
    return (
      <div>
        <h1>Parent</h1>
        <p>
          name: {this.state.name} nói: {this.state.say}
        </p>
        <Child ten={this.state.name} noi={this.state.say}>
          <div>
            <h2>đây là nội dung từ parent chuyền cho child</h2>
            <p>this.props.children</p>
          </div>
        </Child>
        <ChildFunction ten={this.state.name} noi={this.state.say}>
          <div>
            <h2>đây là nội dung từ parent chuyền cho childFuntion</h2>
            <p>this.props.children</p>
          </div>
        </ChildFunction>
      </div>
    );
  }
}

export default Parent;

//giao tiếp giữa 2 component
