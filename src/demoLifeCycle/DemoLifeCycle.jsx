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
        <h1 className='display-4 font-weight-bold text-blue-700'>demo life cycle</h1>
        <Mouting />
        <Updating />
        <div>
          <button className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
            onClick={() => {
              this.setState({
                count: (this.state.count += 1),
              });
            }}>
            tăng Count
          </button>
        </div>
        {this.state.count % 2 === 0 ? <Unmounting /> : null}
      </div>
    );
  }
}

export default DemoLifeCycle;
