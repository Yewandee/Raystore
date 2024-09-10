import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css'
import Sdata from '../shopp/sdata';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';




const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');

    // console.log(searchResults);
    const resultss = Sdata.shopItems;

    const filterResults = (name) => {
        return resultss.filter(result => result.name.toLowerCase().includes(name.toLowerCase()));
    };



    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        setSearchResults(filterResults(value));

        if (value.trim() !== '') {
            setSearchResults(filterResults(value));
        } else {

            setSearchResults([]);
        }
    };

    const handleSelect = (selectedResult) => {
        setQuery(selectedResult);
        setSearchResults([]);
        const selectedResultData = resultss.find(result => result.name === selectedResult);

        if (selectedResultData) {

            window.location.href = selectedResultData.pageUrl;
        }
    };



    return (

        <section className="search">
            <div className="container ">
                <div className="search-box ">

                    <Accordion>
                        <AccordionSummary>
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                value={query}
                                onChange={handleSearch}
                                placeholder='Search and hit enter...'
                            />
                        </AccordionSummary>

                        <AccordionDetails>
                            {searchResults.length > 0 && (
                                <div className="dropdown">
                                    {searchResults.map((result) => (
                                        <Link
                                            key={result.id}
                                            to={result.pageUrl}
                                            className="dropdown-item"
                                            onClick={() => handleSelect(result.name)}
                                        >
                                            {result.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </AccordionDetails>
                    </Accordion>

                </div>
            </div>
        </section>


    )
}

export default Search