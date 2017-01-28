/*
*  Author: Kayla Martell
*  Main site header & navigation
*/

import React from 'react';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import { Link } from 'react-router';

const Header = (props) => {
  return (
    <div className='header'> <Toolbar>
        <ToolbarGroup>
          <ToolbarTitle text="The Traveller's Feet" />
          <FontIcon className="muidocs-icon-custom-sort" />
          <ToolbarSeparator />
            <Link to='/posts'><MenuItem primaryText="Blog" /></Link>
            <Link to='/postnew'><MenuItem primaryText="Write Post" /></Link>


        </ToolbarGroup>
      </Toolbar></div>
  );
}

export default Header;
