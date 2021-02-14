import React, { useState } from 'react';
import ArticlesDialog from './Dialog/Articles';
import ArticlesBasic from './Dialog/Basic';
import GroupArticle from './Dialog/GroupArticle';
import './ChapterOne.css';

const ChapterOne = () => {

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
      <form onSubmit={handleSubmit}>
        <input
          value={Token}
          type='text'
          placeholder='Find the way'
          onChange={event => {
            setToken(event.target.value);
          }}
        />
        <button>search</button>
      </form>
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