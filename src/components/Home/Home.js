import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Home = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://gentle-gorge-99522.herokuapp.com/products')
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