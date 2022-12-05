import React from "react";
import gif from "../gif/x-logo.gif";

//navbar component, grabbing what we passed through in Container.js
function Nav({ current, updateCurrent }) {
    return (
        <>
            <div className="navbar-brand">
                <a className="navbar-item" href="#homepage">
                    <img src={gif} alt="Mari-Cat" />
                </a>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* navbar link shoould update the current state in Container.js */}
            <div id="navbar-menu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item" href="#homepage"
                        onClick={() => updateCurrent('homepage')}>
                        Home
                    </a>
                    <a className="navbar-item" href="#about"
                        onClick={() => updateCurrent('about')}>
                        About
                    </a>
                    <a className="navbar-item" href="#portfolio"
                        onClick={() => updateCurrent('portfolio')}>
                        Portfolio
                    </a>
                    <a className="navbar-item" href="#contact"
                        onClick={() => updateCurrent('contact')}>
                        Contact
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" href="./resume.pdf">
                                    <span>Resume</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;