import React, { Component } from 'react';
import { Header, Footer } from './templates';
import PostList from './post/PostList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var style ={
  margin:'0px',
  padding:'0px',
  width: '100%'
}
export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>

      <div className='app' style={style}>
        <Header />
        <div className='container'>
        <div className="app-body">
          {this.props.children}
          </div>
          </div>
        <Footer />
      </div>
    </MuiThemeProvider>
    );
  }
}
