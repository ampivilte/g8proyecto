import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

function Header() {
    return (
        <header>
            <div>
                <img src="logo"/>
            </div>

            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/favoritos"> Favoritos </Link></li>
                    <li><Link to="/VerTodasTopRating"> Top Rating</Link></li>
                    <li><Link to="/Upcoming"> Próximos Estrenos </Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header