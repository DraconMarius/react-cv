import React, { useEffect, useRef } from 'react';
import "@creativebulma/bulma-collapsible/dist/css/bulma-collapsible.min.css";
import bulmaCollapsible from '@creativebulma/bulma-collapsible';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {  } from '@fontawesome/free-solid-svg-icons'
// import cattwo from '../../assets/img/cat1.png';
import catthree from '../../assets/img/cat2.png';
// import icon from '../../assets/gif/icon.gif'

const Portfolio = () => {

    //add general work here, special work gets their own customized ones
    const werks = [
        {
            name: "Bear2Obsidian",
            desc: "Node.js script to migrate Bear Markdown Notes to Obsidian",
            demo: "https://github.com/DraconMarius/bear2obsidian/raw/main/aseets/demo.gif",
            gitLink: "https://github.com/DraconMarius/bear2obsidian",
        },
        {
            name: "Love-is-blur",
            desc: "A full-stack MERN application with Apollo graphQL, socket.io, and react",
            demo: "https://raw.githubusercontent.com/DraconMarius/love-is-blur/main/client/gifs/blur-is-done.gif?token=GHSAT0AAAAAABYXXRIHYG5GVHVDLQUUME4WY46NFDQ",
            gitLInk: "https://github.com/DraconMarius/love-is-blur",
            depLink: "https://love-is-blur.herokuapp.com/"
        },
        {
            name: "Geo-Chart-Tracker",
            desc: "A front-end application utilizing leaflet.js and last.fm to visualize chart toppers around the world.",
            demo: "https://github.com/JCaloca/Geo-Chart-Tracker/raw/main/assets/images/demo.gif",
            gitLink: "https://github.com/JCaloca/Geo-Chart-Tracker",
            depLink: "https://jcaloca.github.io/Geo-Chart-Tracker/"
        },
        {
            name: "ReadMe Generator",
            desc: "Simple CLI ReadMe Genearator with shield.io badges",
            demo: "https://github.com/DraconMarius/ReadMe-Generator/raw/main/assets/demo.gif",
            gitLink: "https://github.com/DraconMarius/ReadMe-Generator/"
        },
        {
            name: "WeatherApp",
            desc: "A simple web app that fetches data from openWeather API's current weather and 5 day forecasts.",
            demo: "https://github.com/DraconMarius/WeatherApp/raw/main/demo.gif",
            gitLink: "https://github.com/DraconMarius/WeatherApp",
            depLink: "https://draconmarius.github.io/WeatherApp/",
        },
        {
            name: "DayPlanner",
            desc: "A simple javscript app to store events based on hours of typical work day.",
            demo: "https://github.com/DraconMarius/DayPlanner/raw/main/Assets/demo.png",
            gitLink: "https://github.com/DraconMarius/DayPlanner",
            depLink: "https://draconmarius.github.io/DayPlanner/",
        }
    ]


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

    const Style = {
        lordicon: {
            width: "50px",
            height: "50px"
        }
    }

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
                                <a href="#collapsible-cardA" data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                    <span className="icon">
                                        {/* <img src={icon} alt="icon" />                                     */}
                                        <lord-icon
                                            src="https://cdn.lordicon.com/hursldrn.json"
                                            trigger="morph"
                                            colors="primary:#7166ee,secondary:#e8b730"
                                            state="morph"
                                            style={Style.lordicon}>
                                        </lord-icon>
                                    </span>
                                </a>
                            </header>
                            <div id="collapsible-cardA" className="is-collapsible">
                                <div className="row">
                                    <div className="columns is-mobile is-centered">
                                        <div className="card-content">
                                            <p className="title is-4">
                                                <img className="m-0 p-0" src="https://github.com/duffylaura/purple_wAIve/raw/main/public/assets/333-loader-4-8.gif" alt="icon" width="50"></img>
                                                A Full-Stack AI image generator for music lovers
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
                                        <span className="button is-primary is-outlined">
                                            <a href="https://github.com/duffylaura/purple_wAIve">View on GitHub</a>
                                        </span>
                                        <span className="button is-primary is-outlined">
                                            <a href="https://purple-waive.herokuapp.com">Deployed Link</a>
                                        </span>
                                    </p>
                                </footer>
                            </div>
                        </div>
                        {/* mapped array of werks */}
                        {werks.map((werk, index) => (

                            <div className="card" key={index}>
                                <header className="card-header">
                                    <p className="card-header-title">
                                        {werk.name}
                                    </p>
                                    <a href={`#collapsible-card${index}`} data-action="collapse" className="card-header-icon is-hidden-fullscreen" aria-label="more options">
                                        <span className="icon">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/hursldrn.json"
                                                trigger="morph"
                                                colors="primary:#7166ee,secondary:#e8b730"
                                                state="morph"
                                                style={Style.lordicon}>
                                            </lord-icon>
                                        </span>
                                    </a>
                                </header>
                                <div id={`collapsible-card${index}`} className="is-collapsible">
                                    <div className="row">
                                        <div className="columns is-mobile is-centered">
                                            <div className="card-content">
                                                <p className="title is-4">
                                                    {werk.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="columns is-mobile is-centered">
                                            <div className="column is-half">
                                                <div className="card-image">
                                                    <img src={werk.demo} alt="demo.gif" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <span className="button is-primary is-outlined">
                                                <a href={werk.gitLink}>View on GitHub</a>
                                            </span>
                                            {(werk.depLink) ? <span className="button is-primary is-outlined">
                                                <a href={werk.depLink}>Deployed Link</a>
                                            </span> : <></>}
                                        </p>
                                    </footer>
                                </div>
                            </div>
                        ))}



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