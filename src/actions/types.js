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
const EDIT_POST = "edit_post"; // Edit existing post

/* COMMENTS -- All comments actions */
const ADD_COMMENT = "add_comment";


// Export all these constants
export default {
    FETCH_POST,
    FETCH_POSTS,
    CREATE_POST,
    DELETE_POST,
    EDIT_POST,
    ADD_COMMENT
}
