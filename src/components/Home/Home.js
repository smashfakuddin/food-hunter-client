import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className="row ms-3">
            {
                products.map(pd => <Product pd={pd}></Product>)
            }
        </div>
    );
};

export default Home;