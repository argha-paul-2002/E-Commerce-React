import React, { useState } from 'react';

// Define the props interface
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
    onSearch(newValue);
  };

  return (
    <div className="flex justify-center">
      <input
        type="text"
        placeholder="Search products..."
        className="pl-4 pr-16 py-2 w-full max-w-2xl border rounded-md text-black"
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;
