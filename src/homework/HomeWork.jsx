import React, { Component } from 'react';
import GlassessSection from './GlassessSection';
import CardShowcase from './CardShowcase';

class HomeWork extends Component {
  state = {
    model: './img/glassesImage/model.jpg',

    originGlassess: {
      source: './img/glassesImage/v2.png',
      price: 50,
      name: 'GUCCI G8759H',
    },

    listGlassess: [
      {
        id: 1,
        source: './img/glassesImage/v1.png',
        price: 30,
        name: 'GUCCI G8850U',
      },
      {
        id: 2,
        source: './img/glassesImage/v2.png',
        price: 50,
        name: 'GUCCI G8759H',
      },
      {
        id: 3,
        source: './img/glassesImage/v3.png',
        price: 30,
        name: 'DIOR D6700HQ',
      },
      {
        id: 4,
        source: './img/glassesImage/v4.png',
        price: 30,
        name: 'DIOR D6005U',
      },
      {
        id: 5,

        source: './img/glassesImage/v5.png',
        price: 30,
        name: 'PRADA P8750',
      },
      {
        id: 6,
        source: './img/glassesImage/v6.png',
        price: 30,
        name: 'PRADA P9700',
      },
      {
        id: 7,
        source: './img/glassesImage/v7.png',
        price: 30,
        name: 'FENDI F8750',
      },
      {
        id: 8,
        source: './img/glassesImage/v8.png',
        price: 30,
        name: 'FENDI F8500',
      },
      {
        id: 9,
        source: './img/glassesImage/v9.png',
        price: 30,
        name: 'FENDI F4300',
      },
    ],
  };

  changeGlassess = (url, price, name) => {
    this.setState({
      originGlassess: { source: url, price: price, name: name },
    });
  };

  renderGlassess = () => {
    return this.state.listGlassess.map((glassess, index) => (
      <GlassessSection
        glassess={glassess}
        key={index}
        changeGlassess={this.changeGlassess}
      />
    ));
  };

  render() {
    return (
      <div>
        <section className='glasses-app bg-dark' style={{ height: '100vh' }}>
          <h2 className='text-center h2 text-white py-1'>Glasses App</h2>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='container row'>
              <section className='model d-flex justify-content-center col-5'>
                <CardShowcase
                  originGlassess={this.state.originGlassess}
                  modelPic={this.state.model}
                />
              </section>
              <section className='glasses__list mt-4 d-flex justify-content-around flex-wrap col-7'>
                {this.renderGlassess()}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeWork;
