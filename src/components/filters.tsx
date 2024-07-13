import React, { useState } from 'react';

const Filters: React.FC<{ applyFilters: (filters: any) => void }> = ({ applyFilters }) => {
  const [genre, setGenre] = useState('');
  const [language, setLanguage] = useState('');
  const [sortBy, setSortBy] = useState('popularity.desc');

  const handleApplyFilters = () => {
    applyFilters({ genre, language, sortBy });
  };

  return (
    <div>
      <div>
        <label>Genre:</label>
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="">All</option>
          <option value="28">Action</option>
          <option value="18">Drama</option>
          <option value="16">Animation</option>
          <option value="53">Thriller</option>
        </select>
      </div>
      <div>
        <label>Language:</label>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">All</option>
          <option value="de">German</option>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="popularity.desc">Popularity Descending</option>
          <option value="popularity.asc">Popularity Ascending</option>
          <option value="release_date.desc">Release Date Descending</option>
          <option value="release_date.asc">Release Date Ascending</option>
          <option value="vote_average.desc">Vote Average Descending</option>
          <option value="vote_average.asc">Vote Average Ascending</option>
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default Filters;
