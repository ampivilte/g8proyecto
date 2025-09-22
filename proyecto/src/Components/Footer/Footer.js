import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-top">
                <div className="brand">
                    <img className="logo"/> poner el logo acá
                </div>

                <nav className="footer-nav">
                    <Link to="/favoritos"> Favoritos </Link>
                    <Link to="/VerTodasTopRating"> Top Rating</Link>
                    <Link to="/Upcoming"> Próximos Estrenos </Link>
                </nav>
            </div>

           
            <div className="footer-bottom">
                <nav>
                    <ul className="team">
                        <li>Solana Alak</li>
                        <li>Lucy Amparo Vilte</li>
                        <li>Simón Bertrán</li>
                    </ul>
                </nav>
            </div>
            
        </footer>
    )
}

export default Footer