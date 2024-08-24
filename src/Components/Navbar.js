import React from 'react';
import './NavBar.css'; 


function Navbar() {
    return (
        <div>
            <header className="header">
                <div className="logo">
                    <img src="src\Images\images.png" alt="Sarine-Joy Academy Logo" />
                    <h1>Sarine-Joy Academy</h1>
                </div>
                <nav className="nav-links">
                    <ul>
                        <li><a href="/about">About</a></li>
                        <li><a href="/admissions">Admissions</a></li>
                        <li><a href="/learning">Learning</a></li>
                        <li><a href="/news">News & Events</a></li>
                        
                        <li className="login-button"><a href="/login">Log In</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar