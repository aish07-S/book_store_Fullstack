import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';

const logoUrl = '/src/assets/Images/logo.png'; // Assuming your logo is in the public folder

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src={logoUrl} alt="Book Store" />
                    <span>BOOK STORE</span>
                </Link>
                
                <ul className="nav-menu">
                    <li className="nav-item"><Link to="/books" className="nav-link">Books</Link></li>
                    <li className="nav-item"><Link to="/new-arrivals" className="nav-link">New Arrival</Link></li>
                    <li className="nav-item"><Link to="/box-sets" className="nav-link">Box Sets</Link></li>
                    <li className="nav-item"><Link to="/bestsellers" className="nav-link">Bestsellers</Link></li>
                    <li className="nav-item"><Link to="/award-winners" className="nav-link">Award Winners</Link></li>
                    <li className="nav-item"><Link to="/todays-deal" className="nav-link">Today's Deal</Link></li>
                    <li className="nav-item"><Link to="/request-book" className="nav-link">Request a Book</Link></li>
                </ul>

                <div className="nav-user-actions">
                    <Link to="/login" className="nav-action-link">
                        <FaUserCircle size={24} />
                        <span>My Account</span>
                    </Link>
                    <Link to="/cart" className="nav-action-link">
                        <FaShoppingCart size={24} />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;