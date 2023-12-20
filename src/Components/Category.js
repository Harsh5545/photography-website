// Category.js
import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <h2>{category.toUpperCase()} Photos</h2>
      {/* Display photos here */}
    </div>
  );
};

export default Category;
