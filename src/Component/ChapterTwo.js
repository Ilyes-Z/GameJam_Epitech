import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, Card, CardContent } from '@material-ui/core';
import Video from './resume-de-lannee-2020.mp4';
import './ChapterTwo.css';

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

const ChapterTwo = () => {
  const classes = useStyles();
  const [past, setPast] = useState('');
  const [present, setPresent] = useState('');

  const handlePastSubmit = (e) => {
    e.preventDefault();
    console.log(past);
    if (past == "Passe") {
      console.log("let's go");
    }
  };

  const handlePresentSubmit = (e) => {
    e.preventDefault();
    console.log(present);
    if (present == "Present" && past == "Passe") {
      console.log('ok done');
      window.location.replace('/#/chapterThree');
    }
  };

  return (
    <div className='title'>
      <h1>Chapter Two: The Present</h1>
      <div className='wrapper'>
        <div className='item1'>
          <form onSubmit={handlePastSubmit}>
            <TextField
              value={past}
              placeholder='what said the past ?'
              onChange={event => {setPast(event.target.value)}}
              />
            <Button type='submit' className={classes.background}  variant="contained"
          color="primary">give</Button>
          </form>
        </div>
        <div className='item2'>
          <form onSubmit={handlePresentSubmit}>
            <TextField
              value={present}
              placeholder='You know the way'
              onChange={event => {setPresent(event.target.value)}}
            />
            <Button type='submit' className={classes.background}  variant="contained"
          color="primary">search</Button>
          </form>
        </div>
      </div>
      <div>
      <video controls autoPlay src={Video} type="video/mp4"/>
      </div>
    </div>
  );
}

export default ChapterTwo;