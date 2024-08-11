import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';

import FlashCard from "./FlashCard";

import axios from 'axios';

function App() {

  useEffect(()=>{

    async function createUser() {
      try{

        const response = await axios.post('http://localhost:4000/api/create',{

          name:"adarsh "
        });

        console.log(response);

      }catch(error){

        console.error(error);

      }
    }

    createUser();

  },[]);

 

  return (

    <div className='min-h-screen w-screen'>

      <Routes>

        <Route path='/flashcard' element={<FlashCard/>}></Route>

      </Routes>

    </div>
  )
}

export default App


