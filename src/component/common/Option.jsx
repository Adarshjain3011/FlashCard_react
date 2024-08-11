import React, { useState } from 'react';

const Option = ({ options, answer }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options?.map((option, index) => {
        const isCorrect = selectedOption === answer;
        const isSelected = selectedOption === option;
        const color = isSelected ? (isCorrect ? 'blue' : 'red') : 'black';

        return (
          <div key={index}>
            <input
              type="radio"
              id={`option-${index}`}
              name="options"
              value={option}
              checked={isSelected}
              onChange={handleChange}
            />
            <label
              htmlFor={`option-${index}`}
              style={{ color: color }}
            >
              {option}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default Option;
