import React, { useState } from 'react';
import { FiLayers, FiCodepen, FiMail, FiWind, FiPackage, FiFigma } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';

import './Navbar.css';

function Navbar() {
    const [nav, setNav] = useState(false);

    const handleNavToggle = () => {
        setNav(!nav);
    };
    return (
        <>
            <header>
                <nav className="nav container">
                    <Fade top>
                        <div className="brand">
                            <a href="#">Logo</a>
                            <FiFigma size={30} />
                        </div>
                    </Fade>
                    <Fade top delay={500}>
                        <div className="toggle" onClick={handleNavToggle}>
                            {!nav ? (
                                <button type="button" className="hamburger">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </button>
                            ) : (
                                <button type="button" className="hamburger toggled">
                                    <span className="line"></span>
                                    <span className="line"></span>
                                    <span className="line"></span>
                                </button>
                            )}
                        </div>
                    </Fade>
                </nav>
                <div className={nav ? 'menu active' : 'menu'}>
                    {nav ? (
                        <Fade left cascade duration={700} delay={750}>
                            <ul className="menu__list">
                                <li className="menu__link">
                                    <a href="#">
                                        <FiLayers /> Home
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="#">
                                        <FiWind />
                                        About
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="#">
                                        <FiPackage />
                                        Portfolio
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="#">
                                        <FiCodepen />
                                        Pricing
                                    </a>
                                </li>
                                <li className="menu__link">
                                    <a href="#">
                                        <FiMail />
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </Fade>
                    ) : (
                        ''
                    )}
                </div>
            </header>
        </>
    );
}

export default Navbar;
