/*
  * Author: Kayla Martell
  * Display a list of categories
 */

import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';

class Categories extends Component {

  render(){
    return (
      <List className='list-adventure'>
       <Subheader>Adventures</Subheader>
      <ListItem
      primaryText="Mexico"
      leftAvatar={<Avatar src="images/ok-128.jpg" />}/>
      <ListItem
      primaryText="Italy"
      leftAvatar={<Avatar src="images/ok-128.jpg" />}/>
      <ListItem
      primaryText="Ireland"
      leftAvatar={<Avatar src="images/ok-128.jpg" />}/>

      </List>
    )
  }

}

export default Categories;
