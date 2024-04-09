import React from 'react';

interface PriceFilterProps {
  onPriceChange: (selectedRange: string) => void;
}

const PriceFilter: React.FC<PriceFilterProps> = ({ onPriceChange }) => {
  const priceRanges = ["All", "0-500", "500-1000", "1000-2000", "2000-3000", "3000+"];

  return (
    <div>
      <select
        className="border border-gray-300 rounded-md p-2"
        onChange={(e) => onPriceChange(e.target.value)}
        defaultValue="All"
      >
        {priceRanges.map((range) => (
          <option key={range} value={range}>
            {range}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PriceFilter;
