import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './search.css'
import Sdata from '../shopp/sdata';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import { InputGroup } from 'react-bootstrap';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const Search = () => {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState('');

    console.log(searchResults);
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
            // Clear the search results if the input is empty
            setSearchResults([]);
        }
    };

    const handleSelect = (selectedResult) => {
        setQuery(selectedResult);
        setSearchResults([]);
        const selectedResultData = resultss.find(result => result.name === selectedResult);

        if (selectedResultData) {
            // Assuming you have set up your routes with React Router
            // This will redirect the user to the page specified in the pageUrl
            window.location.href = selectedResultData.pageUrl;
        }
    };



    return (

        <section className="search">
            <div className="container ">
                <div className="search-box ">

                    <Accordion>
                        <AccordionSummary
                        // expandIcon={<ExpandMoreIcon />}
                        // aria-controls="panel1-content"
                        // id="panel1-header"
                        >
                            <i className="fa fa-search"></i>
                            <input
                                type="text"
                                value={query}
                                onChange={handleSearch}
                                placeholder='Search and hit enter...'
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {/* {
                                searchResults.length > 0 && (
                                    <div className="dropdown">
                                        {searchResults.map((result) => (
                                            <div
                                                key={result.id}
                                                className="dropdown-item"
                                                onClick={() => handleSelect(result.name)}
                                            >
                                                {result.name}
                                            </div>
                                        ))}
                                    </div>
                                )
                            } */}

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