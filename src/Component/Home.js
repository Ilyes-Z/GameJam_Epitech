import React from 'react';
import { AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';

const useStyles = makeStyles(theme => ({
  link: {
    color: '#000000',
  }
}));

const Home = () => {
  const classes = useStyles();
  return (
    <div className='title'>
      <h1>Past Present Future</h1>
      <div>
        <Link to='/chapterOne' className={classes.link}><h3>Chapter One: The Past</h3></Link>
        <p>Avoir le courage de replonger dans nos souvenirs</p>
      </div>
      <div>
        <Link to='/chapterTwo' className={classes.link}><h3>Chapter Two: The Present</h3></Link>
        <p> Poser des actes qui agiront sur notre avenir</p>
      </div>
      <div>
        <Link to='/chapterThree' className={classes.link}><h3>Chapter Three: The Futur</h3></Link>
        <p>Voyons ce que nos actes nous rapportent</p>
      </div>
    </div>
  );
}

export default Home;