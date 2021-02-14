import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Button, makeStyles } from '@material-ui/core';
import Video from './apeTogether.mp4';

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

function GroupArticle(props) {
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
        <DialogTitle id="form-dialog-title">Your first team Work</DialogTitle>
        <video controls autoPlay src={Video} type="video/mp4" />
      </Dialog>
    </div>
  );
}

export default GroupArticle;