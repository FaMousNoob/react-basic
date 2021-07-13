import React, { Component } from 'react';
import axios from 'axios';

class Mouting extends Component {
  constructor(props) {
    console.log('constructor');
    super(props); // kế thừa props từ class component
    this.state = {
      name: 'Ngô Bảo Phương Tảo',
      age: 21,
    };
    this.myInput = React.createRef();
  }
  render() {
    console.log('render');
    return (
      <div>
        <h1>mouting</h1>
        <input
          type='text'
          name='hoVaTen'
          value={this.state.name}
          ref={this.myInput}
        />
      </div>
    );
  }

  //call API, lấy dữ liệu từ server
  componentDidMount() {
    console.log('component did mount');
    axios({
      method: 'GET',
      url: 'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01',
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    //xử  lí ref (dom ref)
    console.log('thẻ input', this.myInput.current);
  }
}

export default Mouting;
