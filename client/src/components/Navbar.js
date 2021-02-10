import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{display:"flex", }}>
            <Link className="navbar-brand" to="/">Google Books</Link>
            <Link className="nav-item nav-link" to="/search">Search</Link>
            <Link className="nav-item nav-link" to="/savedBooks">Saved Books</Link>
        </nav>
    )
}

export default Navbar
