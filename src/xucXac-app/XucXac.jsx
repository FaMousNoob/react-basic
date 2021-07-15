import React, { Component } from 'react';
import KetQua from './KetQua';
import BanChoi from './BanChoi';
import './style.scss';

class XucXac extends Component {
  render() {
    return (
      <div>
        <div
          className='gameXucXac'
          style={{
            backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: 0,
            top: 0,
          }}
        >
          <div className='container'>
            <h3 className='display-4 text-center text-green-700'>
              BÀI TẬP GAME XÚC XẮC
            </h3>
           <BanChoi />
          </div>
          <div className='container text-center display-4'>
            <KetQua />
            <button className='btn btn-success' style={{ fontSize: 30 }}>
              PLAY GAME
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default XucXac;
