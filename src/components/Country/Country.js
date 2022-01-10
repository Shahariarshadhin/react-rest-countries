import React from 'react';
import './Country.css'
const Country = (props)=> {

    const{name , capital , population ,flag ,region ,numericCode ,area} = props.country;
    return (
        <div className='Country'>
            <img src={flag} alt=""/>
            <h2><span className='CountryName'>Country</span> : {name}</h2>
            <h4>Capital : {capital}</h4>
            <h4>Population : {population}</h4>
            <h4>Region : {region}</h4>
            <h4>NumericCode : {numericCode}</h4>
            <h4>Area : {area}</h4>


            
            
        </div>
    );
};

export default Country;