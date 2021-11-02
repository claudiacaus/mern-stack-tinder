import React from 'react';
import './Header.css';

import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import tinder_logo from '../assets/tinder_logo.png';
import ForumIcon from '@material-ui/icons/Forum';

export const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img className="header__logo" src={tinder_logo} alt="" />

      <IconButton>
        <ForumIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};
