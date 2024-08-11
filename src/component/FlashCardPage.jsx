
import React from 'react';

import FlashCard from '../FlashCard';


import Option from './common/Option';

import Question from './common/Question';

const FlashCardPage = ({question,options}) => {

  return (

    <div>

      <div className='flex flex-col w-fit h-fit border border-zinc-600 shadow-2xl rounded-md m-12 p-11'>

        <Question text={question}></Question>
        
        <Option options={options}></Option>

      </div>

    </div>
  )
}

export default FlashCardPage;

