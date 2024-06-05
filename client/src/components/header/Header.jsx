import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router';
const Header = () => {
    const navigate=useNavigate();
    return (
        <div className="Header-container">
            <ul className="Header">
                
            </ul>
        </div>
    );
}

export default Header;