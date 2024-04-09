// CategoryFilter.tsx
import React from 'react';

interface CategoryFilterProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ onCategoryChange }) => {
  const categories = ["Men", "Women", "Kids", "Toys", "Electronics", "All"];

  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2"
        onChange={(e) => onCategoryChange(e.target.value)}
        defaultValue="All"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
