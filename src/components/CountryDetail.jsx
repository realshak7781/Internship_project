import React from 'react';
import { Link } from 'react-router-dom';
import './CountryDetail.css';

const CountryDetail = ({ country }) => {
  return (
    <div className="country-detail">
      <Link to="/" className="back-btn">← Back</Link>
      <div className="detail-content">
        <img src={country.flag} alt={`${country.name} flag`} className="detail-flag" />
        <div className="detail-info">
          <h2>{country.name}</h2>
          <div className="info-columns">
            <div className="column">
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div className="column">
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain.join(', ')}</p>
              <p><strong>Currencies:</strong> {country.currencies.map(curr => curr.name).join(', ')}</p>
              <p><strong>Languages:</strong> {country.languages.map(lang => lang.name).join(', ')}</p>
            </div>
          </div>
          <div className="border-countries">
            <strong>Border Countries:</strong> 
            {country.borders.length > 0 ? (
              country.borders.map(border => (
                <span key={border} className="border-country">{border}</span>
              ))
            ) : (
              <span>None</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetail;
