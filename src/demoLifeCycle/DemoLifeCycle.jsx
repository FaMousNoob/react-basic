import React, { Component } from 'react';
import Mouting from './Mouting';
import Updating from './Updating';
import Unmounting from './Unmounting';

class DemoLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
  }
  render() {
    return (
      <div>
        <h1 className='text-blue-700'>demo life cycle</h1>
        <Mouting />
        <Updating />
        <div>
          <button
            onClick={() => {
                this.setState({
                    count: (this.state.count += 1),
                });
            }}>tăng Count</button>
        </div>
            {this.state.count % 2 === 0 ? <Unmounting /> : null} 
      </div>
    );
  }
}

export default DemoLifeCycle;
