import React, { Component } from 'react';

class DemoLogin extends Component {
  //   isLogin = false;
  state = {
    isLogin: false,
  };


  //xử lí rerender UI khi dữ liệu thay đổi
  handleLogin = () => {
    // this.state.isLogin = true;
    this.setState({ isLogin: true }); // setState is a component of react
    console.log(this.state.isLogin);
  };


//render ra nút bấm hoặc tên khi đã bấm nút
  renderLogin = () => {
    if (this.state.isLogin) {
      return <p>phương tảo</p>;
    } else {
      return (
        <button className='btn btn-info' onClick={this.handleLogin}>
          Login
        </button>
      );
    }
  };

  render() {
    console.log('render running');
    return (
      <div>
        <h1>state & conditional rendering</h1>
        {this.renderLogin()}
      </div>
    );
  }
}

export default DemoLogin;
