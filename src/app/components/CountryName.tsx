import React from 'react';
// import "./styles.css"

const CountryNames= ({name,population,capital}:{name:string,population:number,capital:string}) => {
  return (
    <div className='cnames'>
      <h2>Name: {name}</h2>
      <h2>Population: {population}</h2>
      <h3>Capital: {capital}</h3> 
    </div>
  );
};



export default CountryNames;
