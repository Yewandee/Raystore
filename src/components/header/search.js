import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css'
import Sdata from '../shopp/sdata';


const Search = () => {
    const [params, setparams] = useState("")
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
                        <input type="text" placeholder='Search and hit enter...' onChange={(e) => setparams(e.target.value)} />
                        <span>All Category</span>
                    </div>
                    {/* <div className="icon f_flex width">
                        <i className='fa fa-user icon-circle'></i>
                        <div className="cart">
                            <Link to="/cart">
                                <i className='fa fa-shopping-bag icon-circle'></i>
                                <span>0</span>
                            </Link>
                        </div>
                    </div> */}
                </div>
            </section>
        </div>
    )
}

export default Search