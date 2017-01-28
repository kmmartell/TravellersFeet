/*
* Author: Kayla Martell
* Return the posts and the activePost
* Code based on tutorial by Stephen Grider
*/
import { FETCH_POST, FETCH_POSTS, UPDATE_POST, CREATE_COMMENT } from '../../src/actions/types';


export default function (state = { all: [], activePost: {comments: []}}, action){
  switch(action.type){
    /* Add to the state the activePost details*/
    case FETCH_POST:
      return { ...state, activePost: action.payload };

    case FETCH_POSTS:

      return { ...state, all: action.payload };

    case UPDATE_POST:
    console.log("Update post", action.payload);
      return { ...state, activePost: action.payload };

    case CREATE_COMMENT:
      state.activePost.comments.push(action.payload);
      return { ...state };

    default:
      return state;

  }
}
