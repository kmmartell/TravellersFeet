/*
*  Author: Kayla Martell
*  Displays a comment form with submit
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';

class CommentNew from Component {
  render(){
    return (
      <div className="comment-new">

      </div>
    );
  }
}

export default connect(null, actions)(CommentNew);
