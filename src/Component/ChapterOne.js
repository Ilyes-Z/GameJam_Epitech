import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import ArticlesDialog from './Dialog/Articles';
import ArticlesBasic from './Dialog/Basic';
import GroupArticle from './Dialog/GroupArticle';
import './ChapterOne.css';

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

const ChapterOne = () => {
  const classes = useStyles();
  const [Token, setToken] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Token);
    if (Token == "Passe") {
      console.log('duuuuude you got it!');
      window.location.replace('/#/chapterTwo');
    }
    else return;
  };

  return (
    <div className='title'>
      <h1>First Chapter : The Past</h1>
        <TextField
          value={Token}
          type='text'
          placeholder='Find the way'
          onChange={event => {
            setToken(event.target.value);
          }}
        />
        <Button className={classes.background}  variant="contained"
          color="primary" onSubmit={handleSubmit}>FIND</Button>
      <div className='wrapper'>
        <div className='item1'>
          <h3>Turing</h3>
          <ArticlesDialog />
        </div>
        <div className='item2'>
          <h3>Your First Step</h3>
          <ArticlesBasic />
        </div>
      </div>
        <div>
          <h3>Your first group</h3>
          <GroupArticle />
        </div>
    </div>
  );
}

export default ChapterOne;