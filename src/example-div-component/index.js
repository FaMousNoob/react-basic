import React, { Component } from 'react';
import Header from './header';
import Carousel from './carousel';
import ProductList from './productList';
import Ads from './ads';

class ExampleDivComponent extends Component {
  render() {
    return (
      <div>
        <Header />
        <Carousel />
        <ProductList />
        <Ads />
      </div>
    );
  }
}

export default ExampleDivComponent;
