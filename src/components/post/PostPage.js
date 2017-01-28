/*
*  Author: Kayla Martell
*  Display posts, optional editable form and comments
*/


import React, { Component } from 'react';
import PostForm from './PostForm';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class PostPage extends Component{

  handleFormSubmit = (values) => {
    if (this.props.post.id){
      console.log("Editing");
        this.props.updatePost(this.props.post.id, values);
    }
    else{
      console.log("Submitting");
      this.props.createPost(values);
    }

    browserHistory.push('/posts');
  }
  renderForm(){
    if(this.props.post && this.props.post.id){
      console.log('here', this.props.post);
      return <PostForm {...this.props.post} onSubmit={this.handleFormSubmit} />
    }
    else{
      return <PostForm onSubmit={this.handleFormSubmit} />
    }
  }

  render(){
    return (
      <div className='post-page'>
        {this.renderForm()}

      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    post: state.posts.activePost
  }
}


export default connect(mapStateToProps, actions)(PostPage);
