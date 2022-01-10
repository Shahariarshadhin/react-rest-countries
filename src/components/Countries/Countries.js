import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {

    const [countries , setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } , [])

    return (
        <div>
            <h1>Available Countries : {countries.length}</h1>

            <div className='countries-container'>
            {
                countries.map(country => <Country 

                    key = {country.numericCode}
                    
                    country = {country}></Country>)
                  
            }
            </div>
        </div>
    );
};

export default Countries;