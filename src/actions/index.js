/*
*  Author: Kayla Martell
*  Actions for posts in blog
*/

// Import the constant actions
import { FETCH_POSTS, FETCH_POST, AUTH_ERROR, CREATE_POST, EDIT_POST, DELETE_POST, UPDATE_POST, AUTH_USER,  CREATE_COMMENT } from './types';
import { posts, comments, firebaseAuth } from '../config/constants'

import _ from 'lodash';
import axios from 'axios'; // Used for our API post/get calls

const Posts = posts;
const Comments = comments;

/*
function logout () {
  return firebaseAuth().signOut()
}
*/

function login (email, pw) {
  return dispatch => {
    firebaseAuth().signInWithEmailAndPassword(email, pw)
    .then((data) =>{

      dispatch({
        type: AUTH_USER
      });
      localStorage.setItem('token', data.refreshToken);

    });
  }
}

// By default fetch all posts
function fetchPosts(){
  return (dispatch) => {
      Posts.on('value', snapshot => {
      dispatch({
        type: FETCH_POSTS,
        payload: snapshot.val()
      })
    });
  };
}

// Fetch single post
function fetchPost(id){
  return (dispatch) => {
    const post = Posts.child(id);
    post.on('value', snapshot => {
      dispatch({
        type: FETCH_POST,
        payload: {...snapshot.val(),id}
      });
    });
    }

}

// Create new post given post details
function createPost(post){
  return dispatch => Posts.push(post).then((data) => {
    dispatch({
      ...post,
      type: CREATE_POST
    })
  });
}

function updatePost(postId, post) {
  let updatedPost = Posts.child(postId);
    return dispatch => updatedPost.set({...post}).then((data) => {
    dispatch({
      type: UPDATE_POST
    })
  })
}

// Delete a post given the id
function deletePost(key){
  //return dispatch => Posts.child(key).remove();
  return {
    type: DELETE_POST
  }
}

// Add a new comment
function createComment(postId, comment){
  console.log('asd', comment);
  Posts.child(postId).child('/comments').push(comment).then((data) => {
    return dispatch => Comments.push(comment).then((data) => {
      console.log('COMMENT', data);
      dispatch({
        type: CREATE_COMMENT
      })
    });
  })
  .catch((error) => {
    dispatch({
      type: CREATE_COMMENT
    })
    console.log('CATCH', error);
  })


}



export {  fetchPosts, fetchPost, updatePost, createPost, createComment, deletePost, login };
