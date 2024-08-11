import React, { useState } from 'react';

const Option = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name="options"
            value={option}
            checked={selectedOption === option}
            onChange={handleChange}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Option;
