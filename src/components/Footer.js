import React from "react";
import linkedIn from "../gif/linkedIn.png";
import gitHub from "../gif/gitHub.png";
import camera from "../gif/camera.png";

//footer element with social links and crediting lordicon for animated icons
const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="content has-text-centered">
                    <p className="row is-justify-content-space-between">
                        <span className="icon is-large">
                            <img src={gitHub} href="https://github.com/DraconMarius" alt='github' />
                        </span>
                        <span className="icon is-large">
                            <img src={linkedIn} alt='linkedin' />
                        </span>
                        <span className="icon is-large">
                            <img src={camera} alt='photography portfolio' height='40' />
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