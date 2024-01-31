import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
// import { Link } from 'react-router-dom';
import './search.css'
import Sdata from '../shopp/sdata';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import { InputGroup } from 'react-bootstrap';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Search = () => {
    const [params, setparams] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    console.log(searchResults);

    useEffect(() => {
        const onSearched = () => {

            const results = Sdata.shopItems.filter(({ name }) => (
                name.includes(params)
            ))

            setSearchResults(results)
        }
        onSearched()
    }, [params])


    return (
        <div>
            <section className="search">
                <div className="container c_flex">


                    <div className="search-box f_flex">
                        <i className="fa fa-search"></i>
                        <input type="text" onChange={(e) => setSearchResults(e.target.value)} placeholder='Search and hit enter...' />



                    </div>
                </div>
            </section>
        </div>
    )
}

export default Search