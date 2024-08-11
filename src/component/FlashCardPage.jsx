import React, { useState } from 'react';
import Option from './common/Option';

import Question from "./common/Question";

const FlashCardPage = ({ question, options, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flashcard ${flipped ? 'flipped' : ''}`}
      onClick={handleClick}
      style={{
        width: '200px',
        height: '300px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        cursor: 'pointer',
        perspective: '1000px',
      }}
    >
      <div
        className='card-inner'
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transition: 'transform 0.6s',
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className='card-front'
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#fff',
            // alignItems: 'center',
            // justifyContent: 'center',
            fontSize: '18px',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        >

          <Question text={question}></Question>

          <Option options={options} answer={answer}></Option>

        </div>

        <div
          className='card-back'
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            backgroundColor: '#eee',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            padding: '20px',
            boxSizing: 'border-box',
            transform: 'rotateY(180deg)',
          }}
        >

          <p>ans is :</p>

          <p>{answer}</p>

        </div>
      </div>
    </div>
  );
};

export default FlashCardPage;
