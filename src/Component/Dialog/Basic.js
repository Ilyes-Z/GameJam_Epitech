import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffffff',
  },
  background: {
    backgroundColor: '#000000'
  }
}));

function ArticlesBasic(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.background}
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={{fontWeight: 'bold', alignItem: 'center'}}
        >
          Read
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your Start</DialogTitle>
        <p>During the C Pool in first year at EPITECH.<br/>
          At first you didn't know what you were doing<br/>
          And we've found a short video of you trying to understand
        </p>
        <iframe src="https://giphy.com/embed/yPRo73ILrGjny" width="480" height="271" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p></p>
      </Dialog>
    </div>
  );
}

export default ArticlesBasic;