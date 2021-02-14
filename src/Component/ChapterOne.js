import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button, makeStyles, CardHeader } from '@material-ui/core';
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
  rat: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%',
    maxWidth: 270
  },
  content: {
    margin: 'auto'
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
    if (Token == "Begin") {
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
      <p>there we are!<br/>This is some events that happnd in the past<br/>Just find the key</p>
      <div className='wrapper'>
        <div className='item1'>
          <Card className={classes.root}>
            <CardContent>
            <CardHeader
                title='Turing'
              ></CardHeader>
              <ArticlesDialog />
            </CardContent>
          </Card>
        </div>
        <div className='item2'>
          <Card className={classes.root}>
            <CardContent>
            <CardHeader
                title='Your First Steps'
              ></CardHeader>
              <ArticlesBasic />
            </CardContent>
          </Card>
        </div>
      </div>
        <div className='item3'>
          <Card className={classes.rat}>
            <CardContent className={classes.content}>
              <CardHeader
                title='Your First Group'
              ></CardHeader>
              <GroupArticle />
            </CardContent>
          </Card>
        </div>
    </div>
    </div>
  );
}

export default ChapterOne;