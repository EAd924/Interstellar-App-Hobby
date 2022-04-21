import React from 'react';
import { FiLinkedin, FiFacebook, FiDribbble, FiCommand } from 'react-icons/fi';
import Fade from 'react-reveal/Fade';
import './Hero.css';

import backgroundVideo from '../assets/background-video.mp4';

const Hero = () => {
    return (
        <>
            <div className="hero">
                <video autoPlay playsInline loop muted id="video">
                    <source src={backgroundVideo} />
                </video>
                <div className="hero-content">
                    <Fade top delay={1600} duration={1600}>
                        <h1 className="hero-title">
                            Interstellar <FiCommand />
                        </h1>
                    </Fade>
                </div>
                <Fade right cascade duration={1400}>
                    <ul className="social-links container">
                        <li>
                            <a href="#">
                                <FiLinkedin />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FiFacebook />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <FiDribbble />
                            </a>
                        </li>
                    </ul>
                </Fade>
                <div className="watermark">
                    <h1>Made by: Peter H</h1>
                </div>
            </div>
        </>
    );
};

export default Hero;
