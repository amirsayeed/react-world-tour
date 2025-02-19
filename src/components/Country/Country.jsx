import { useState } from 'react';
import './Country.css';
const Country = ({
    country, handleVisitedCountry, handleVisitedFlags }) => {
    //console.log(country);
    const { name, flags, population, area, alpha2Code } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className= {`p-4 flex flex-col items-center justify-center gap-3 country ${visited && 'visited'}`} >
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name}</h3>
            <img className='w-[250px] h-[170px] rounded-lg' src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {alpha2Code}</p>
            <div className='space-y-2'>
            <div className='flex flex-col lg:flex-row gap-2'>
            <button className='rounded-lg' onClick={() => handleVisitedCountry(country)}>Mark as visited </button>
            <button className='rounded-lg' onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            </div>
            <button className="visit rounded-lg" onClick={handleVisited}>{visited ? 'Visited' : "Going"}</button><br />
            {visited ? 'I have visited this country.' : 'I want to visit'};
            </div>
        </div>
    );
};

export default Country;