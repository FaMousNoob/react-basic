import React, { Component } from 'react';

class HomeWork extends Component {
  state = {
    originGlassess: './img/glassesImage/v2.png',
    listGlassess: [
      {
        id: 1,
        srcGlassess: './img/glassesImage/v1.png',
        glassessPrice: 30,
        glassessName: 'GUCCI G8850U',
      },
      {
        id: 2,
        srcGlassess: './img/glassesImage/v2.png',
        glassessPrice: 50,
        glassessName: 'GUCCI G8759H',
      },
      {
        id: 3,
        srcGlassess: './img/glassesImage/v3.png',
        glassessPrice: 30,
        glassessName: 'DIOR D6700HQ',
      },
      {
        id: 4,
        srcGlassess: './img/glassesImage/v4.png',
        glassessPrice: 30,
        glassessName: 'DIOR D6005U',
      },
      {
        id: 5,
        srcGlassess: './img/glassesImage/v5.png',
        glassessPrice: 30,
        glassessName: 'PRADA P8750',
      },
      {
        id: 6,
        srcGlassess: './img/glassesImage/v6.png',
        glassessPrice: 30,
        glassessName: 'PRADA P9700',
      },
      {
        id: 7,
        srcGlassess: './img/glassesImage/v7.png',
        glassessPrice: 30,
        glassessName: 'FENDI F8750',
      },
      {
        id: 8,
        srcGlassess: './img/glassesImage/v8.png',
        glassessPrice: 30,
        glassessName: 'FENDI F8500',
      },
      {
        id: 9,
        srcGlassess: './img/glassesImage/v9.png',
        glassessPrice: 30,
        glassessName: 'FENDI F4300',
      },
    ],
  };

  render() {
    return (
      <div>
        <section className='glasses-app bg-dark' style={{ height: '100vh' }}>
          <h2 className='text-center h2 text-white py-1'>Glasses App</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='container row'>
              <section className='model d-flex justify-content-center col-5'>
                <div
                  className='card text-left'
                  style={{ width: 300, position: 'relative' }}>
                  <img
                    className='card-img-top'
                    src='./img/glassesImage/model.jpg'
                    alt='hinh model'
                  />
                  <img
                    src='./img/glassesImage/v2.png'
                    alt='kinh'
                    style={{
                      width: 170,
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      top: '16%',
                    }}
                  />
                  <div className='card-body'>
                    <span className='card-title badge-danger h3 px-2 rounded'>
                      $50
                    </span>
                    <p className='card-text mt-2'>GUCCI G8759H</p>
                  </div>
                </div>
              </section>
              <section className='glasses__list mt-4 d-flex justify-content-around flex-wrap col-7'>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v1.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v2.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v3.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v4.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v5.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v6.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v7.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v8.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
                <div className='col-3'>
                  <button className='btn btn-outline-secondary'>
                    <img
                      src='./img/glassesImage/v9.png'
                      alt='hinh'
                      style={{ width: 100, borderRadius: 20 }}
                    />
                  </button>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeWork;
