import { useState } from 'react';
import './Country.css';
const Country = ({
    country, handleVisitedCountry }) => {
    //console.log(country);
    const { name, flags, population, area, alpha2Code } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }
    console.log(handleVisitedCountry);

    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {alpha2Code}</p>
            <button>Mark as visited </button><br />
            <button className="visit" onClick={handleVisited}>{visited ? 'Visited' : "Going"}</button>
            {visited ? 'I have visited this country.' : 'I want to visit'};
        </div>
    );
};

export default Country;