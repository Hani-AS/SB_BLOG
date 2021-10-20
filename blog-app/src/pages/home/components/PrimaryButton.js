import React from 'react';
import { Button } from '@mui/material';

const PrimaryButton = ({ classes, text, handleClick }) => {
  return (
    <div className={classes.buttonContainer}>
      <Button
        variant='contained'
        className={classes.mainBtn}
        onClick={handleClick}
      >
        {text}
      </Button>
    </div>
  );
};

export default PrimaryButton;
