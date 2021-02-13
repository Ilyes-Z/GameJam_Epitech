import React, { useState } from 'react';
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
          <p>
            hello left
          </p>
        </div>
        <div className='item2'>
          <p>hello right</p>
        </div>
      </div>
    </div>
  );
}

export default ChapterOne;