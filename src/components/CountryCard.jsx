import React from 'react';
import { Link } from 'react-router-dom';
import './CountryCard.css';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.name}`}>
      <div className="country-card">
        <img src={country.flag} alt={`${country.name} flag`} />
        <div className="card-content">
          <h3>{country.name}</h3>
          <p><strong>Population:</strong> {country.population}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
