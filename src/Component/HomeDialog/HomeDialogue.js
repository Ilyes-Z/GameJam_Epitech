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
        <p> Bienvenue dans l'espace-temps ! </p>
        <p> Essayez de vous ménager ! A cause d'un choc entre la méteorite de Thor et la Terre, vous avez été secouez ! </p>
        <p> Vous aurez du mal à vous souvenir de tout mais ça viendra... Je l'espère...</p>
        <p> Quoi qu'il en soit pour revenir à votre bonne période, il va falloir traverser Passé, Présent et Futur !</p>
        <p> On y va ? Allez hop !</p>
        <Button onClick={handleClose}>close</Button>
      </Dialog>
    </div>
  );
}

export default HomeDialogue;