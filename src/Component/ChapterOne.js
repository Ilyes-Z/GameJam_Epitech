import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles } from '@material-ui/core';
import ArticlesDialog from './Dialog/Articles';
import ArticlesBasic from './Dialog/Basic';
import GroupArticle from './Dialog/GroupArticle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import './ChapterOne.css';

const useStyles = makeStyles((theme) => ({
  root:{
    minWidth: 270
  },
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
    <div className='all'>
    <div className='title'>
      <h1>First Chapter : The Past</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          value={Token}
          type='text'
          placeholder='Find the way'
          onChange={event => {
            setToken(event.target.value);
          }}
        />
        <Button type='submit' className={classes.background}  variant="contained"
          color="primary">FIND</Button>
      </form>
      <div className='wrapper'>
        <div className='item1'>
          <Card className={classes.root}>
            <CardContent>
              <h3>Turing</h3>
              <ArticlesDialog />
            </CardContent>
          </Card>
        </div>
        <div className='item2'>
          <Card className={classes.root}>
            <CardContent>
              <h3>Your First Step</h3>
              <ArticlesBasic />
            </CardContent>
          </Card>
        </div>
      </div>
        <div>
          <Card className={classes.root}>
            <CardContent>
              <h3>Your first group</h3>
              <GroupArticle />
            </CardContent>
          </Card>
        </div>
    </div>
    </div>
  );
}

export default ChapterOne;