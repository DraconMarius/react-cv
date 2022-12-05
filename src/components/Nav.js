import React from "react";
import gif from "../gif/x-logo.gif";

//navbar component, grabbing what we passed through in Container.js
function Nav({ current, updateCurrent }) {
    return (
        <>
            <div class="navbar-brand">
                <a class="navbar-item" href="#homepage">
                    <img src={gif} alt="Mari-Cat" />
                </a>
                <div class="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* navbar link shoould update the current state in Container.js */}
            <div id="navbar-menu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#homepage"
                        onClick={() => updateCurrent('homepage')}>
                        Home
                    </a>
                    <a class="navbar-item" href="#about"
                        onClick={() => updateCurrent('about')}>
                        About
                    </a>
                    <a class="navbar-item" href="#portfolio"
                        onClick={() => updateCurrent('portfolio')}>
                        Portfolio
                    </a>
                    <a class="navbar-item" href="#contact"
                        onClick={() => updateCurrent('contact')}>
                        Contact
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a class="button is-primary" href="./resume.pdf">
                                    <span class="icon">
                                        <i class="fas fa-download"></i>
                                    </span>
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