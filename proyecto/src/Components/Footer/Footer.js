import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Footer() {
    return (
        <footer>
            <div>
                <img /> poner el logo acá
            </div>

            <nav>
                <p>¡Qué ver hoy!</p>
                <ul>
                    <li><Link to="/favoritos"> Favoritos </Link></li>
                    <li><Link to="/VerTodasTopRating"> Top Rating</Link></li>
                    <li><Link to="/Upcoming"> Próximos Estrenos </Link></li>
                </ul>
            </nav>

            <nav>
                <ul>
                    <li>Solana Alak</li>
                    <li>Lucy Amparo Vilte</li>
                    <li>Simón Bertrán</li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer