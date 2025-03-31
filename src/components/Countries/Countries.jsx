import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json()).then(data => setCountries(data));
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = flags => {
        console.log("flag is added");
        const newVisitedFlags = [...visitedFlags, flags];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div className="mt-8 space-y-5">
            <h3 className="text-lg md:text-2xl font-medium">Countries: {countries.length}</h3>
            <div>
                <h3 className="text-lg font-medium">Visited countries: {visitedCountries.length}</h3>
                <ul className="list-disc list-inside px-2">
                    {
                        visitedCountries.map(country => <li key={country.alpha2Code}>{country.name}</li>)
                    }
                </ul>
            </div>
            <div>
                <h3 className="text-lg font-medium">Visited Flags: {visitedFlags.length}</h3>
                <div className="mt-2 flex items-center flex-wrap gap-2">
                    {
                    visitedFlags.map(flag => <img className="w-20 rounded-md" key={flag.alpha2Code} src={flag}></img>)
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 text-center">
                {
                    countries.map(country => <Country
                        key={country.alpha2Code}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;