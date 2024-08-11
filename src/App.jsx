import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import FlashCard from "./FlashCard";

function App() {
 

  return (

    <div className='min-h-screen w-screen'>

      <Routes>

        <Route path='/flashcard' element={<FlashCard/>}></Route>

      </Routes>

    </div>
  )
}

export default App


