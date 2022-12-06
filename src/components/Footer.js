import React from "react";
import linkedIn from "../assets/img/linkedIn.png";
import gitHub from "../assets/img/gitHub.png";
import camera from "../assets/img/camera.png";

//footer element with social links and crediting lordicon for animated icons
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p className="row is-justify-content-space-between">
                        <span className="icon is-large">
                            <a href="https://github.com/DraconMarius">
                                <img src={gitHub} alt='github' />
                            </a>
                        </span>
                        <span className="icon is-large">
                            <a href="https://www.linkedin.com/in/mari-ma-70771585">
                                <img src={linkedIn} alt='linkedin' />
                            </a>
                        </span>
                        <span className="icon is-large">
                            <a href="https://marikma.wixsite.com/portfolio">
                                <img src={camera} alt='photography portfolio' height='40' />
                            </a>
                        </span>
                    </p>
                    <p className="row has-text-centered" >
                        <a href="https://lordicon.com/">Animated icons by Lordicon.com</a>
                    </p>
                    <p className="row has-text-centered" >
                        Icon credit
                        <a href="https://icon-icons.com/users/14quJ7FM9cYdQZHidnZoM/icon-sets/"> @Anton Kalashnyk </a>
                        &
                        <a href="https://icon-icons.com/pack/Electronic-Devices/1829"> @Unknown</a>
                    </p>

                </div>
            </footer>
        </>
    );
};

export default Footer;