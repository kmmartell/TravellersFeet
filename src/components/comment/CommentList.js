/*
*  Author: Kayla Martell
*  Display a list of comments for a given post
*  Container. Requires action - ADD_COMMENT. Require state posts.activePost.comments
*/

import React, { Component } from 'react';
import * as actions from '../../actions/index';

class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
      </div>
    );
  }
}

mapStateToProps(state){
  return {
    comments: state.posts.activePost.comments
  };
}

export default connect(mapStateToProps, actions)(CommentList);
