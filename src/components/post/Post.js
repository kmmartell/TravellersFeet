/*
*  Author: Kayla Martell
*  Requires access to posts.activePost
*  Allow option to edit via redirect
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Card,  CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import CommentList from '../comment/CommentList';
import CommentForm from '../comment/CommentForm';
import * as actions from '../../actions';

class Post extends Component{
  handleFormSubmit = (comment) => {
    this.props.createComment('-Kb2o11g7bREkZmWrWZH', comment);

  }

  render(){
    console.log(this.props.post);
    const { id, title, tagline, content } = this.props.post;
    return (
        <div className="post">
           <Link to ={"/postedit/"+id}><FlatButton label="Edit Post" primary={true} /></Link>
          <Card>
                <CardHeader
                    title={title}
                    subtitle={tagline}
                    avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Blank_woman_placeholder.svg/1024px-Blank_woman_placeholder.svg.png"/>
        <CardText>
          {content}
        </CardText>


        </Card>
        <CommentForm onSubmit={this.handleFormSubmit} />
        <CommentList />
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    post: state.posts.activePost
  };
}

export default connect(mapStateToProps, actions)(Post);
