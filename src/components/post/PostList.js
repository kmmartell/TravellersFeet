/*
*  Author: Kayla Martell
*  All posts in a list -
*  Container: Needs access to posts.all
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostList extends Component {
  render() {
    return (
      <div className="post-list">

      </div>
    );
  }

}

mapStateToProps(state){
  return {
    posts: posts.all
  };
}

export default connect(mapStateToProps)(PostList);
