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

const ChapterThree = () => {
  const classes = useStyles();
  const [isValid] = useState(false);
  const [present, setPresent] = useState('');
  const [future, setFuture] = useState('');

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
    if (future == "Future" && present == "Present") {
      console.log('ok done');
      //window.location.replace('/#/chapterThree');
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
              placeholder='You know what you want'
              onChange={event => {setFuture(event.target.value)}}
            />
            <Button className={classes.background}  variant="contained"
          color="primary">search</Button>
          </form>
        </div>
      </div>
      <div>
        <p>slt Future </p>
        <p>“On n'est toujours que trop ce que les hommes veulent que l'on soit." Rousseau</p>
      </div>
    </div>
  );
}

export default ChapterThree;