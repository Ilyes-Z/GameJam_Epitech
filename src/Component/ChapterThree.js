import React, { useState } from 'react';
import './ChapterThree.css';

const ChapterThree = () => {
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
            <input
              value={present}
              placeholder=' you already know !'
              onChange={event => {setPresent(event.target.value)}}
              />
            <button>give</button>
          </form>
        </div>
        <div className='item2'>
          <form onSubmit={handleFutureSubmit}>
            <input
              value={future}
              placeholder='You know what you want'
              onChange={event => {setFuture(event.target.value)}}
            />
            <button>search</button>
          </form>
        </div>
      </div>
      <div>
        <p>slt Future </p>
      </div>
    </div>
  );
}

export default ChapterThree;