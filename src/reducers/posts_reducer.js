/*
* Author: Kayla Martell
* Return the posts and the activePost
* Code based on tutorial by Stephen Grider
*/
import { FETCH_POST, FETCH_POSTS } from '../../src/actions/types';


export default function (state = { all: [], activePost: null}, action){
  switch(action.type){
    /* Add to the state the activePost details*/
    case FETCH_POST:
      return { ...state, activePost: action.payload.data };
    /* Add to state the new list of all posts */
    case FETCH_POSTS:
      return { ...state, all: action.payload.data };
    default:
      return state;

  }
}
