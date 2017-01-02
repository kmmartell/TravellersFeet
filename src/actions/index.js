/*
*  Author: Kayla Martell
*  Actions for posts in blog
*/

// Import the constant actions
import { FETCH_POSTS, FETCH_POST, CREATE_POST, EDIT_POST, DELETE_POST, ADD_COMMENT } from './types';
import { API_ROOT } from './config';
import axios from 'axios'; // Used for our API post/get calls

// Retrieve a single post given an id
function fetchPost(post_id){
  const request = axios.get(`${API_ROOT}/post/${post_id}`);
  return {
    type: FETCH_POST,
    payload: request
  };
}

// By default fetch all posts
function fetchPosts(){
  const request = axios.get(`${API_ROOT}/posts`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

// Create new post given post details
function createPost(post){
  const request = axios.post(`${API_ROOT}/posts`, post);
  return {
    type: CREATE_POST,
    payload: request
  };
}

// Delete a post given the id
function deletePost(post_id){
  const request = axios.delete(`${API_ROOT}/post/${post_id}`);
  return {
    type: DELETE_POST,
    payload: request
  };
}

// Add a new comment
function addComment(comment){
  const request = axios.post(`${API_ROOT}/comments`, comment);
  return {
    type: ADD_COMMENT,
    payload: request
  };
}

export { fetchPost, fetchPosts, createPost, deletePost };
