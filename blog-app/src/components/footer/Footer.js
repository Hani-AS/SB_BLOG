import React from 'react';
import { useStyles } from './FooterStyles';

const Footer = () => {
  const classes = useStyles();
  return <div className={classes.footer}>© Copyright Hani - 2021</div>;
};

export default Footer;
