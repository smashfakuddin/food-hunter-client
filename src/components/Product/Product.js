import React from 'react';
import { useHistory } from 'react-router';
import './Product.css';


const Product = (props) => {
    const { name, price, img,_id } = props.pd;
    const history = useHistory();
    const handleBuy = (name) => {
        history.push(`/product/${_id}`);
    }
    return (
        <div className="product-cart ml-5 mb-3 col-3 ">
            <img width='200' src={img} alt="" />
            <h3>{name}</h3>
            <div className='test'>
                <h5>Price: {price}</h5>
                <button onClick={() => handleBuy(_id)}>Buy Now</button>
            </div>
        </div>
    );
};

export default Product;