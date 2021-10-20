import React from 'react';
import Button from '@mui/material/Button';
import { useStyles } from './HeaderStyles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.headerContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.logo}></div>
        <div className={classes.buttonsContainer}>
          <NavLink
            exact
            to='/'
            activeStyle={{
              borderBottom: '#E95E30 2px solid',
            }}
          >
            <Button disableRipple className={classes.btn}>
              home
            </Button>
          </NavLink>
          <NavLink
            to='/blogs-page'
            activeStyle={{
              borderBottom: '#E95E30 2px solid',
            }}
          >
            <Button disableRipple className={classes.btn}>
              Blog
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
