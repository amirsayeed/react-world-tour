import { useState } from 'react';
import './Country.css';
const Country = ({
    country, handleVisitedCountry, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, population, area, alpha2Code } = country;
    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className= {`p-4 rounded-xl flex flex-col items-center justify-center gap-5 country ${visited && 'visited'}`} >
            <img className='w-full h-[130px] md:h-[170px] rounded-lg' src={flags.png} alt="" />
            <div className='space-y-2'>
                <h3 className='font-medium' style={{ color: visited ? 'purple' : 'white' }}>Name: {name}</h3>
                <p>Population: {population}</p>
                <p>Area: {area}</p>
                <p>Code: {alpha2Code}</p>
            </div>
            <div className='space-y-2'>
            <div className='flex flex-col lg:flex-row gap-2'>
            <button className='btn btn-primary rounded-lg text-sm p-2' onClick={() => handleVisitedCountry(country)}>Mark as visited </button>
            <button className='btn btn-primary rounded-lg text-sm p-2' onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
            </div>
            <button className="btn btn-primary visit rounded-lg text-sm p-2" onClick={handleVisited}>{visited ? 'Visited' : "Going"}</button>
            <br></br>
            <div className='mt-2'>
                {visited ? 'I have visited this country.' : 'I want to visit'}
            </div>
            </div>
        </div>
    );
};

export default Country;