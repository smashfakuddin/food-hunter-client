import React from 'react';

const AddProduct = () => {
    const handleAddProduct = (event) => {
        const product = {
            name: '',
            price: ''
        };

        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
    }

    return (
        <div>
            <form action="">
                <p><span>Name:</span><input type="text" name='name' /></p>
                <p><span>Price:</span><input type="text" /></p>
                <p><span>Product Image: </span><input type="file" /></p>
                <button onClick={handleAddProduct}>Add product</button>
            </form>
        </div>
    );
};

export default AddProduct;