/*
*  Author: Kayla Martell
*  Export the constants we'll use for actions and then again in the reducers
*  Naming practices taken from Stephen Grider tutorial
*/

/* POSTS -- All posts actions */
const FETCH_POSTS = "fetch_posts"; // Fetch all posts
const FETCH_POST = "fetch_post"; // Fetch active detail post
const CREATE_POST = "create_post"; // Create a new post
const DELETE_POST = "delete_post"; // Delete existing post
const UPDATE_POST = "update_post"; // Edit existing post
const AUTH_USER = "auth_user";
const AUTH_ERROR = 'auth_error';
/* COMMENTS -- All comments actions */
const CREATE_COMMENT = "create_comment";


// Export all these constants
export  {
    FETCH_POST,
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST,
    UPDATE_POST,
    CREATE_COMMENT,
    AUTH_ERROR,
    AUTH_USER
}
