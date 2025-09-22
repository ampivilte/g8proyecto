import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Header.css';

function Header() {
    return (
        <header className="app-header">
            <div>
            
            </div>

            

            <nav>
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/favoritos"> Favoritos </Link></li>
                    <li><Link to="/VerTodasTopRating"> Top Rated</Link></li>
                    <li><Link to="/VerTodasUpcoming"> Próximos Estrenos </Link></li>
                </ul>
            </nav>
        </header>

    );
}

export default Header