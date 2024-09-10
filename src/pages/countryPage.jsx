
import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/data.json';
import CountryDetail from '../components/CountryDetail';

const CountryPage = () => {
  const { name } = useParams();
  const country = data.find(country => country.name === name);

  return (
    <div>
      {country ? <CountryDetail country={country} /> : <p>Country not found</p>}
    </div>
  );
};

export default CountryPage;
