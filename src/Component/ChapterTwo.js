import React, { useState } from 'react';
import './ChapterTwo.css';

const ChapterTwo = () => {
  const [isValid] = useState(false);
  const [past, setPast] = useState('');
  const [present, setPresent] = useState('');

  const handlePastSubmit = (e) => {
    e.preventDefault();
    console.log(past);
    if (past == "Passe") {
      console.log(isValid);
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
            <input
              value={past}
              placeholder='what said the past ?'
              onChange={event => {setPast(event.target.value)}}
              />
            <button>give</button>
          </form>
        </div>
        <div className='item2'>
          <form onSubmit={handlePresentSubmit}>
            <input
              value={present}
              placeholder='You know the way'
              onChange={event => {setPresent(event.target.value)}}
            />
            <button>search</button>
          </form>
        </div>
      </div>
      <div>
        <p>slt</p>
      </div>
    </div>
  );
}

export default ChapterTwo;