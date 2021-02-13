import React, { useState } from 'react';

const ChapterOne = () => {

  const [Token, setToken] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Token);
    if (Token === "Passe") {
      <changePage/>
    }
    else return;
  };

  const changePage = () => {
    <h3>GOOD JOB</h3>
  };

  return (
    <div>
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
      <div>
        <p>hello left</p>
      </div>
      <div>
        <p>hello right</p>
      </div>
    </div>
  );
}

export default ChapterOne;