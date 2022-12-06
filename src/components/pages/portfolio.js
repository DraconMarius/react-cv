import React, { useEffect, useRef } from 'react';
import "@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fontawesome/free-solid-svg-icons'
// import cattwo from '../../assets/img/cat1.png';
import catthree from '../../assets/img/cat2.png';

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
            <br />
            <div className="column">
                <div className="has-text-centered">
                    <figure className="image is-96x96 is-inline-block">
                        <img src={catthree} alt="cat pic" width="20%" />
                    </figure>
                </div>
            </div>
            <br />
            <br />
            <div className="columns is-mobile is-centered">
                <div className="column is-four-fifths">
                    <div ref={collapsiblesRef} id="1">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Purple wAIve
                                </p>
                                <a href="#collapsible-card1" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        +
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-card1" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                <img className="m-0 p-0" src="https://github.com/duffylaura/purple_wAIve/raw/main/public/assets/333-loader-4-8.gif" alt="icon" width="50"></img>
                                                Purple wAIve, a Full-Stack AI image generator for music lovers
                                                <img className="m-0 p-0" src="https://github.com/duffylaura/purple_wAIve/raw/main/public/assets/333-loader-4-3.gif" alt="icon" width="50"></img>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-half">
                                            <div className="card-image">
                                                <img src="https://github.com/duffylaura/purple_wAIve/raw/main/public/assets/gif%20of%20create%20page.gif" alt="demo.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a href="https://github.com/duffylaura/purple_wAIve">View on GitHub</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Geo Chart Tracker
                                </p>
                                <a href="#collapsible-card2" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        +
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-card2" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                Geo-Chart-Tracker,
                                                <br />
                                                <br />
                                                a front-end application utilizing leaflet.js and last.fm to visualize chart toppers around the world.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-half">
                                            <div className="card-image">
                                                <img src="https://github.com/JCaloca/Geo-Chart-Tracker/raw/main/assets/images/demo.gif" alt="demo.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a href="https://github.com/JCaloca/Geo-Chart-Tracker">View on GitHub</a>
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
                                <a href="#collapsible-card3" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        +
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-card3" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                Simple CLI ReadMe Genearator with shield.io badges
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-half">
                                            <div className="card-image">
                                                <img src="https://github.com/DraconMarius/ReadMe-Generator/raw/main/assets/demo.gif" alt="demo.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a href="https://github.com/DraconMarius/ReadMe-Generator/">View on GitHub</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    WeatherApp
                                </p>
                                <a href="#collapsible-card4" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        +
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-card4" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                WeatherApp,
                                                <br />
                                                <br />
                                                A simple web app that fetches data from open weather api's current weather and 5 day forecasts.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-half">
                                            <div className="card-image">
                                                <img src="https://github.com/DraconMarius/WeatherApp/raw/main/demo.gif" alt="demo.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a href="https://github.com/DraconMarius/WeatherApp">View on GitHub</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    DayPlanner
                                </p>
                                <a href="#collapsible-card5" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        +
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-card5" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                DayPlanner,
                                                <br />
                                                <br />
                                                A simple JavaScript App to store events based on hours of typical work day.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="column is-half">
                                            <div className="card-image">
                                                <img src="https://github.com/DraconMarius/DayPlanner/raw/main/Assets/demo.png" alt="demo.gif" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <footer className="card-footer">
                                    <p className="card-footer-item">
                                        <span>
                                            <a href="https://github.com/DraconMarius/DayPlanner">View on GitHub</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default Portfolio;

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