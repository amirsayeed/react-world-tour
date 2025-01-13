import { useEffect, useState } from "react";
import Country from "../Country/Country";
const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json()).then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {
                countries.map(country => <Country key={country.alpha2Code} country={country}></Country>)
            }
        </div>
    );
};

export default Countries;