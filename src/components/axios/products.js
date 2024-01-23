import React from 'react'
import axios from 'axios'

const Products = () => {


    const fetchData = async () => {
        const axios = require('axios');

        const options = {
            method: 'GET',
            url: 'https://amazon-simple-api.p.rapidapi.com/products/B08N5M7S6K/offers',
            params: {
                api_key: '<REQUIRED>'
            },
            headers: {
                'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                'X-RapidAPI-Host': 'amazon-simple-api.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }

        // const options = {
        //     method: 'GET',
        //     url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
        //     params: {
        //         categoryId: 'cat1080037',
        //         pageSize: '60',
        //         currentPage: '1'
        //     },
        //     headers: {
        //         'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        //         'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
        //     }
        // };

        // try {
        //     const response = await axios.request(options);
        //     console.log(response.data);
        // } catch (error) {
        //     console.error(error);
        // }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>Products</div>
    )
}

export default Products