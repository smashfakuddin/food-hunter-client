import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='navbar'>
            <div>
                <h2>FOOD HUNTER</h2>
            </div>
            <div>
                <ul className='nav-item'>
                    <li><Link  to='/'>Home</Link> </li>
                    <li><Link to='/checkout'>Orders</Link></li>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/deals'>Deals</Link></li>
                    <button className='main-button'><Link to='/login'>Log In</Link></button>
                </ul>
            </div>
        </div>
    );
};

export default Header;