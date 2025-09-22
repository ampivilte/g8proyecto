import React from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import '../Footer/Footer.css'

function Footer() {
    return (
        <footer className="app-footer">
            <div className="footer-top">
                <div className="brand">
                    <img src="image.png"/>
                </div>

                <nav className="footer-nav">
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