import React, { useState, useEffect } from 'react';
import FlashCardPage from './component/FlashCardPage';
import Navbar from './component/common/Navbar';

const FlashCard = () => {

  let dummyData = [
    {
      "Maths": [
        {
          "question": "2 + 2 = ?",
          "options": ["4", "3", "5", "6"],
          "answer": "4"
        },
        {
          "question": "5 - 3 = ?",
          "options": ["2", "3", "4", "1"],
          "answer": "2"
        },
        {
          "question": "3 * 3 = ?",
          "options": ["6", "7", "9", "8"],
          "answer": "9"
        },
        {
          "question": "10 / 2 = ?",
          "options": ["3", "5", "6", "4"],
          "answer": "5"
        }
      ]
    },
    {
      "English": [
        {
          "question": "What is the synonym of 'happy'?",
          "options": ["Sad", "Joyful", "Angry", "Bored"],
          "answer": "Joyful"
        },
        {
          "question": "Translate 'Goodbye' to English",
          "options": ["Hello", "Goodbye", "Welcome", "Sorry"],
          "answer": "Goodbye"
        },
        {
          "question": "Choose the correct spelling",
          "options": ["Recieve", "Receive", "Receeve", "Recive"],
          "answer": "Receive"
        },
        {
          "question": "What is the opposite of 'early'?",
          "options": ["Late", "On time", "Soon", "Fast"],
          "answer": "Late"
        }
      ]
    },
    {
      "Hindi": [
        {
          "question": "Translate 'Hello' to Hindi",
          "options": ["नमस्ते", "हैलो", "स्वागत है", "धन्यवाद"],
          "answer": "नमस्ते"
        },
        {
          "question": "What is 'Book' in Hindi?",
          "options": ["किताब", "पुस्तक", "पत्रिका", "खबर"],
          "answer": "किताब"
        },
        {
          "question": "Translate 'Friend' to Hindi",
          "options": ["दोस्त", "शत्रु", "आध्यात्मिक", "भाई"],
          "answer": "दोस्त"
        },
        {
          "question": "Translate 'Thank you' to Hindi",
          "options": ["धन्यवाद", "सपोर्ट", "मिलिए", "संसार"],
          "answer": "धन्यवाद"
        }
      ]
    },
    {
      "Science": [
        {
          "question": "What is the chemical symbol for water?",
          "options": ["H2O", "CO2", "NaCl", "O2"],
          "answer": "H2O"
        },
        {
          "question": "What planet is known as the Red Planet?",
          "options": ["Earth", "Mars", "Jupiter", "Saturn"],
          "answer": "Mars"
        },
        {
          "question": "What gas do plants absorb from the atmosphere?",
          "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
          "answer": "Carbon Dioxide"
        },
        {
          "question": "What is the powerhouse of the cell?",
          "options": ["Nucleus", "Mitochondria", "Ribosome", "Endoplasmic Reticulum"],
          "answer": "Mitochondria"
        }
      ]
    }
  ];

  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0); // Index of selected category
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Index of the current question

  // Get the current category name and questions based on currentCategoryIndex
  const categoryName = Object.keys(dummyData[currentCategoryIndex])[0];
  const questions = dummyData[currentCategoryIndex][categoryName];

  useEffect(() => {
    setCurrentQuestionIndex(0); // Reset question index when the category changes
  }, [currentCategoryIndex]);

  return (
    <div>
      <div className='flex gap-7'>
        <Navbar setCurrentCategoryCount={setCurrentCategoryIndex} />

        <FlashCardPage
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          answer={questions[currentQuestionIndex].answer}
        />

        {currentQuestionIndex > 0 && (
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
            className='text-red-700 text-3xl'
          >
            Prev
          </button>
        )}

        {currentQuestionIndex < questions.length - 1 && (
          <button
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            className='text-green-500 text-3xl'
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default FlashCard;
