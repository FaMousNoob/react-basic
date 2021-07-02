import React, { Component } from 'react';
import BtnChangeColor from './btnChangeColor';
import CarPic from './CarPic';

class AppShowRoomCar extends Component {
  state = {
    carImg: './img/car/products/black-car.jpg',
    listBtnColor: [
      {
        id: 1,
        sourceIcon: './img/car/icons/icon-black.jpg',
        srcCar: './img/car/products/black-car.jpg',
      },
      {
        id: 2,
        sourceIcon: './img/car/icons/icon-red.jpg',
        srcCar: './img/car/products/red-car.jpg',
      },
      {
        id: 3,
        sourceIcon: './img/car/icons/icon-silver.jpg',
        srcCar: './img/car/products/silver-car.jpg',
      },
      {
        id: 4,
        sourceIcon: './img/car/icons/icon-steel.jpg',
        srcCar: './img/car/products/steel-car.jpg',
      },
    ],
  };

  changeColor = (carImgUrl) => {
    this.setState({
      carImg: carImgUrl,
    });
  };

  renderListBtn = () => {
    return this.state.listBtnColor.map((btn, index) => <BtnChangeColor btn={btn} key={index} changeColor={this.changeColor}/>);
  };

  render() {
    return (
      <section className='show-room'>
        <h2 className='text-center title'>Bài Tập Chọn Màu Xe</h2>
        <div className='container'>
          <div className='chose__color d-flex justify-content-around'>
            {this.renderListBtn()}
          </div>
          <div className='car mt-2'>
            <CarPic carImg={this.state.carImg}/>
          </div>
        </div>
      </section>
    );
  }
}

export default AppShowRoomCar;
