import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
    const [products, setProducts] = useState([]); 

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
                headers: {
                    'x-rapidapi-key': 'd8ecfd9399mshe30673de183d715p1b2d57jsn2bc5330ed132',
                    'x-rapidapi-host': 'sephora.p.rapidapi.com'
                },
                params: {
                    pageSize: 10 
                }
            };

            try {
                const response = await axios.request(options);
                setProducts(response.data.data.products); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Products</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {products.map(product => (
                    <li key={product.productId} style={{ marginBottom: '20px' }}>
                        <h2>{product.displayName}</h2> 
                        <img 
                            src={product.currentSku.primaryImage} 
                            alt={product.displayName} 
                            style={{ width: '150px', height: '150px' }}
                        />
                        <p>Price: ${product.currentSku.listPrice}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Products;
