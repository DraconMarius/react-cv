import React, { useEffect, useRef } from 'react';
import "@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fontawesome/free-solid-svg-icons'

const Portfolio = () => {

    // export default className Collapsibles extends React.Component {
    //     componentDidMount() {
    //       this.collapsibles = bulmaCollapsible.attach(".is-collapsible", {
    //         container: this.refs.collapsibles
    //       });
    //     }

    let collapsiblesRef = useRef(null);
    //useEffect hook to attach class to all collapsible card
    useEffect(() => {
        bulmaCollapsible.attach(".is-collapsible", {
            container: collapsiblesRef.current
        });
    }, [])

    return (
        <>
            <div ref={collapsiblesRef} id="1">
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Purple W(Ai)ve
                        </p>
                        <a href="#collapsible-card1" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                            <span className="icon">
                                +
                            </span>
                        </a>
                    </header>
                    <div id="collapsible-card1" className="is-collapsible">
                        <div className="card-content">
                            <p className="title is-4">
                                Purple W(Ai)ve, an ai image generator for music lovers.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <span>
                                    View on <a href="https://github.com/duffylaura/purple_wAIve">GitHub</a>
                                </span>
                            </p>
                        </footer>
                    </div>
                </div>
                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            Geo-Chart-Tracker
                        </p>
                        <a href="#collapsible-card2" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                            <span className="icon">
                                +
                            </span>
                        </a>
                    </header>
                    <div id="collapsible-card2" className="is-collapsible">
                        <div className="card-content">
                            <p className="title is-4">
                                Geo-Chart-Tracker, a front-end application utilizing leaflet.js and last.fm to visualize chart toppers around the world.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <span>
                                    View on <a href="https://github.com/JCaloca/Geo-Chart-Tracker">GitHub</a>
                                </span>
                            </p>
                        </footer>
                    </div>
                </div>

                <div className="card">
                    <header className="card-header">
                        <p className="card-header-title">
                            ReadMe Generator
                        </p>
                        <a href="#collapsible-card2" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                            <span className="icon">
                                +
                            </span>
                        </a>
                    </header>
                    <div id="collapsible-card2" className="is-collapsible">
                        <div className="card-content">
                            <p className="title is-4">
                                simple CLI ReadMe Generator with prebuilt formatting and icons from shield.io.
                            </p>
                        </div>
                        <footer className="card-footer">
                            <p className="card-footer-item">
                                <span>
                                    View on <a href="https://github.com/DraconMarius/ReadMe-Generator">GitHub</a>
                                </span>
                            </p>
                        </footer>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Portfolio;