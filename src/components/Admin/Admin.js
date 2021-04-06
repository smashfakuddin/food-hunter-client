import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
           <div className='admin-nav'>
               <ul>
                   <li><Link to='/add-product'>Add Product</Link> </li>
                   <li><Link to='/manage-product'>Manage Product</Link></li>
               </ul>

           </div>
        </div>
    );
};

export default Admin;