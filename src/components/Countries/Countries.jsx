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
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h5>Visited countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.alpha2Code}>{country.name}</li>)
                    }
                </ul>
            </div>
            <div className="flag-container">
                <h3>Visited Flags: {visitedFlags.length}</h3>
                {
                    visitedFlags.map(flag => <img key={flag.alpha2Code} src={flag}></img>)
                }
            </div>
            <div className="country-container">
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