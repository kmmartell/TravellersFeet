import React, { Component } from 'react';
import { Header, Footer }from './templates';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <div className="app-children">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
