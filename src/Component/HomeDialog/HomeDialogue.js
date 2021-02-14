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

function HomeDialogue(props) {
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
        <DialogTitle id="form-dialog-title">Welcome</DialogTitle>
        <p>ouverture</p>
        <Button onClick={handleClose}>close</Button>
      </Dialog>
    </div>
  );
}

export default HomeDialogue;