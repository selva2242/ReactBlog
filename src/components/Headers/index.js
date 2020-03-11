import React from 'react';
import './style.css'

const Header= props => {
    return(
        <header className="header">
            <nav className="headerMenu">
                <a href='#'>Home</a>
                <a href='#'>AboutUs</a>
                <a href='#'>ContactUs</a>
            </nav>
            <div className="headerSocialMedia">
                SUBSCRIBE
            </div>
        </header>
    );

}

export default Header;