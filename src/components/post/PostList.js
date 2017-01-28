/*
*  Author: Kayla Martell
*  All posts in a list -
*  Container: Needs access to posts.all
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import * as actions from '../../actions';
import PostListItem from './PostListItem';

class PostList extends Component {
  constructor(){
    super();
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="post-list">
          {this.renderPosts()}
      </div>
    );
  }

  renderPosts(){

  if (!this.props.posts || this.props.posts.length == 0) {
    return <div>No posts available</div>;
  }

  let posts = [];

  _.forOwn(this.props.posts, (value, key) => {
      posts.push(<PostListItem key={key} id={key} {...value} />);
  });

  return posts;

  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, actions)(PostList);
