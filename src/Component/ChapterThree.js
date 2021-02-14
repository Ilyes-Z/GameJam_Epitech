import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import './ChapterThree.css';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#ffffff',
    backgroundColor: '#b5b5b5'
  },
  background: {
    backgroundColor: '#000000'
  },
}));

const talk = ['Hello I am glad you find me! Dr. Steve Mataboli said one day Look around you. Everything changes. everything on this earth is in a continuous state of evolving, refining, improving, adapting, enhancing, and changing. You were not put on this earth to remain stagnant. So it is time for you to go ahead and improve your skills and make technologies upgrade'];

const ChapterThree = () => {
  const classes = useStyles();
  const [isValid] = useState(false);
  const [present, setPresent] = useState('');
  const [future, setFuture] = useState('');

  const readOut = () => {
    const speech = new SpeechSynthesisUtterance();

    const dev = talk[Math.floor(Math.random() * talk.length)];
    speech.text = dev;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
   };

  const handlePresentSubmit = (e) => {
    e.preventDefault();
    console.log(present);
    if (present == "Present") {
      console.log(isValid);
    }
  };

  const handleFutureSubmit = (e) => {
    e.preventDefault();
    console.log(future);
    if (future == "Evolve" && present == "Hope") {
      console.log('ok done');
      window.location.replace('/#/final');
    }
  };

  return (
    <div className='title'>
      <h1>Chapter Three: The Future</h1>
      <div className='wrapper'>
        <div className='item1'>
          <form onSubmit={handlePresentSubmit}>
            <TextField
              value={present}
              placeholder=' you already know !'
              onChange={event => {setPresent(event.target.value)}}
              />
            <Button type='submit' className={classes.background}  variant="contained"
          color="primary">give</Button>
          </form>
        </div>
        <div className='item2'>
          <form onSubmit={handleFutureSubmit}>
            <TextField
              value={future}
              placeholder='What you want'
              onChange={event => {setFuture(event.target.value)}}
            />
            <Button type='submit' className={classes.background}  variant="contained"
          color="primary">search</Button>
          </form>
        </div>
      </div>
      <div>
        <Button className={classes.background} color="primary" onClick={readOut}>Talk To Me</Button>
        <p>“On n'est toujours que trop ce que les hommes veulent que l'on soit." Rousseau</p>
      </div>
    </div>
  );
}

export default ChapterThree;