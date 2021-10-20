import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useStyles } from './HeaderStyles';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [blogTitle, setBlogTitle] = useState(false);
  const classes = useStyles({ blogTitle });
  return (
    <div className={classes.headerContainer}>
      <div className={classes.headerContainerMask}>
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
              <Button
                disableRipple
                className={classes.btn}
                onClick={() => setBlogTitle(false)}
              >
                home
              </Button>
            </NavLink>
            <NavLink
              to='/blogs-page'
              activeStyle={{
                borderBottom: '#E95E30 2px solid',
              }}
            >
              <Button
                disableRipple
                className={classes.btn}
                onClick={() => setBlogTitle(true)}
              >
                Blog
              </Button>
            </NavLink>
          </div>
        </div>
        <div className={classes.blogTitle}>Blog</div>
      </div>
    </div>
  );
};

export default Header;
