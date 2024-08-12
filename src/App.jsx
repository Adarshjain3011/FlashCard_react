import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import FlashCard from "./FlashCard";

import axios from 'axios';

import Signup from './Signup';

import Login from "../"

function App() {



  return (

    <div className='min-h-screen w-screen'>

      <Routes>

        <Route path='/flashcard' element={<FlashCard />}></Route>

        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={< Login/>}></Route>

      </Routes>

      <h1>Welcome to home page </h1>

    </div>
  )
}

export default App


