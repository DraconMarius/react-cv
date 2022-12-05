import React from "react";

//navbar component, grabbing what we passed through in Container.js
function Nav({ current, updateCurrent }) {
    return (
        <>
            <div class="navbar-brand">
                <a class="navbar-item" href="#">
                    <img src="./z-landing.gid" alt="Maneki-Cat" width="80" />
                </a>
                {/* <div class="navbar-burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div> */}
            </div>

            <div id="navbar-menu" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#homepage"
                        onClic={() => updateCurrent('homepage')}
                    >
                        Home
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