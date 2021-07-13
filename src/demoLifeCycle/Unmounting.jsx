import React, { Component } from 'react';

class Unmounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isTrueOrFalse: true,
    };
  }
  render() {
    return (
      <div>
        <h2>Unmounting</h2>
        <p> kết quả: {this.state.isTrueOrFalse ? 'true' : 'false'}</p>
      </div>
    );
  }

  componentDidMount() {
      this.toggletTrueFalse = setInterval(() => {
          this.setState({
              isTrueOrFalse: !this.state.isTrueOrFalse
          })
      }, 500)
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.toggletTrueFalse)
  }
}

export default Unmounting;
