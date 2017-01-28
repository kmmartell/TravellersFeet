/*
*  Author: Kayla Martell
*  A short post - shorted body and no comments
*  On click should redirect to /post/:id (requires router)
*  Set the activePost via the router URL directly
*/

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const PostListItem = (props) => {
  const { id, title, tagline, content } = props;
  return (
    <div className="post-list-item">
      <Card>

            <CardHeader
                title={title}
                subtitle={tagline}
                avatar="images/jsa-128.jpg"
        />


    <CardText>
      {content}
    </CardText>
    <CardActions>

      <Link to = {"/post/"+id}><FlatButton label="View Post" /></Link>
        <Link to = {"/postedit/"+id}><FlatButton label="Edit Post" /></Link>
    </CardActions>
    </Card>
    </div>
  );
}

export default PostListItem;
