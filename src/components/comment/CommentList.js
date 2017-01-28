/*
*  Author: Kayla Martell
*  Display a list of comments for a given post
*  Container. Requires action - ADD_COMMENT. Require state posts.activePost.comments
*/

import React, { Component } from 'react';
import * as actions from '../../actions/index';
import { connect } from 'react-redux';
import CommentListItem from './CommentListItem';
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class CommentList extends Component {
  render() {
    return (
      <div className="comment-list">
        <hr/>
      
        <List>
          <Subheader>Comments</Subheader>
        { this.renderComments() }
        </List>
      </div>
    );
  }
  renderComments(){
    if (!this.props.comments || this.props.comments.length == 0){
      return <div>No comments available</div>;
    }

    let comments = [];
    _.forOwn(this.props.comments, (value, key) => {
      comments.push(<CommentListItem key={key} {...value} />);
    })
    return comments;

  }
}

function mapStateToProps(state){
  return {
    comments: state.posts.activePost.comments
  };
}

export default connect(mapStateToProps, actions)(CommentList);
