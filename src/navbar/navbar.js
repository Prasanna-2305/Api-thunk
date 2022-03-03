import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
export default function Navbar() {
    return (
        <nav className='navbar'>
            <h3 className='logo'>Reduxx</h3>
            <ul className='navlink'></ul>
            <Link to ='/strike' className='home1'>Counter</Link>
            <Link to='/api' className='home2'>Api</Link>
        </nav>
    )
}
