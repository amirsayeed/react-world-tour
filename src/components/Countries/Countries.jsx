import { useEffect, useState } from "react";

const Countries = () => {
    const [coutries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
            .then(res => res.json()).then(data => setCountries(data));
    }, [])

    return (
        <div>
            <h3>Countries: {coutries.length}</h3>

        </div>
    );
};

export default Countries;