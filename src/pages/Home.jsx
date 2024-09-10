import React, { useState, useEffect } from 'react';
import CountryCard from '../components/CountryCard';
import FilterBar from '../components/FilterBar';
import data from '../data/data.json';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  const [countries, setCountries] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRegion, setFilterRegion] = useState('');

  const filteredCountries = countries.filter(country => 
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterRegion === '' || country.region === filterRegion)
  );

  return (
    <div>
      <Navbar/>
      <FilterBar 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterRegion={filterRegion}
        setFilterRegion={setFilterRegion}
      />
      <div className="country-grid">
        {filteredCountries.map(country => (
          <CountryCard key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Home;
