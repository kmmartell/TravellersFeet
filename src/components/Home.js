/*
*  Author: Kayla Martell
*  Display home page of blog
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Categories } from './templates';
import Avatar from 'material-ui/Avatar';
import * as actions from '../actions';
import { PostList } from './post';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: '100%'
  },
};

const tilesData = [
  {
    img: 'https://kmmartell.files.wordpress.com/2016/10/2016-10-19-photo-00003673.jpg?w=1172&h=780&crop=1',
    title: 'Mexico',

    featured: true,
  },
  {
    img: 'https://kmmartell.files.wordpress.com/2015/09/img_4968.jpg?w=1172&h=780&crop=1',
    title: 'Canada'
  },
  {
    img: 'https://kmmartell.files.wordpress.com/2016/04/img_1160.jpg?w=1172&h=780&crop=1',
    title: 'Romania'
  }
];
class Home extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }
  render() {
    return (<div className='home'>
    <div className='row'>
    <div className='col-md-3 col-xs-3 col-sm-3'>
      <Categories />

    </div>
    <div className='col-md-9 col-sm-9 col-xs-9'>
      <PostList />
 </div>
 </div>
    </div>
  );
  }
}

function mapStateToProps(state){
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, actions)(Home);
