import React from 'react';

const Navbar = ({ setCurrentCategoryCount }) => {
  const dummyCategories = [
    { name: "Maths" },
    { name: "English" },
    { name: "Hindi" },
    { name: "Science" }
  ];

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    const index = dummyCategories.findIndex(category => category.name === selectedCategory);
    setCurrentCategoryCount(index);
  };

  return (
    <div>
      <label htmlFor="category">Choose a Category :</label>
      <select name="category" id="category" onChange={handleCategoryChange}>
        {dummyCategories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Navbar;
