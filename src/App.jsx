import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import FlashCard from "./FlashCard";

import axios from 'axios';

import Signup from './Signup';

function App() {



  return (

    <div className='min-h-screen w-screen'>

      <Routes>

        <Route path='/flashcard' element={<FlashCard/>}></Route>

        <Route path='/signup' element={<Signup/>}></Route>

      </Routes>

    </div>
  )
}

export default App


