import React from 'react';
import './FilterBar.css';

const FilterBar = ({ searchTerm, setSearchTerm, filterRegion, setFilterRegion }) => {
  return (
    <div className="filter-bar">
      <input 
        type="text" 
        placeholder="Search for a country..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <select value={filterRegion} onChange={(e) => setFilterRegion(e.target.value)}>
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterBar;
