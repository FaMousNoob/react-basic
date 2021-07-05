import React, { Component } from 'react';
import GlassesSection from './GlassesSection';
import CardShowcase from './CardShowcase';

class HomeWork extends Component {
  state = {
    model: './img/glassesImage/model.jpg',

    originGlasses: {
      source: './img/glassesImage/v2.png',
      price: 50,
      name: 'GUCCI G8759H',
    },

    listGlasses: [
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
      {
        id: 10,
        source:
          'https://mpng.subpng.com/20180622/zss/kisspng-t-shirt-sunglasses-thug-life-5b2cae8b1e0403.549407921529654923123.jpg',
        price: 9999,
        name: 'thug',
      },
      {
        id: 11,
        source:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtkOTH0O31VAfZc-d-JVbwwaN7Oq8Nf2S6KXj_ggn76FljXD1cbjpzwLBKr-BnwQ4k6c&usqp=CAU',
        price: 99999,
        name: 'hehe boi',
      },
    ],
  };


  changeGlasses = (url, price, name) => {
    this.setState({
      originGlasses: { source: url, price: price, name: name },
    });
  };

  renderGlasses = () => {
    return this.state.listGlasses.map((glasses, index) => (
      <GlassesSection
        glasses={glasses}
        key={index}
        changeGlasses={this.changeGlasses}
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
                  originGlassess={this.state.originGlasses}
                  modelPic={this.state.model}
                />
              </section>
              <section className='glasses__list mt-4 d-flex justify-content-around flex-wrap col-7'>
                {this.renderGlasses()}
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomeWork;