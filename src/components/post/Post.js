/*
*  Author: Kayla Martell
*  Requires access to posts.activePost
*  Allow option to edit via redirect
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostBody from './PostBody';
import PostHeader from './PostHeader';

class Post extends Component{
  render(){
    return (
        <div className="post">
          <PostHeader />
          <PostBody />
        </div>
    );
  }
}

mapStateToProps(state){
  return {
    activePost: state.posts.activePost
  };
}

export default connect(mapStateToProps)(Post);
