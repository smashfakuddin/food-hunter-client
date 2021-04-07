import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            img: imageURL
        }
        console.log(productData, data);
        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => console.log('server site response', res))
    };


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'b42d16fe94fa7aeed2e4881b58bd1872');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
               setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const handleAddProduct = () => {


        // fetch('http://localhost:5000/addProduct', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     // body: JSON.stringify(product)
        // })
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" defaultValue="Product Name" {...register("name")} />
                <input name="price" defaultValue="0" {...register("price")} />
                <input name="exampleRequired" type='file' onChange={handleImageUpload} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProduct;