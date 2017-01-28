/*
*  Author: Kayla Martell
*  Display a comment (author, text, date)
*  Functional. No editing abilities.
*/

import React from 'react';
import {ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';

const CommentListItem = (props) => {
  const { text, posted_by } = props;
  return (
    <div className="comment-list-item">
      <ListItem leftAvatar={<Avatar src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png" />}
        primaryText={posted_by}
        secondaryText={text}
        />
         <Divider inset={true} />
    </div>
  );
}

export default CommentListItem;
