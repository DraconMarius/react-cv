import React from 'react';
import catone from '../../assets/img/cat.png';
import cattwo from '../../assets/img/cat1.png';
import resume from "../../assets/Ma2023.pdf";


const About = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="column">
                    <div className="has-text-centered">
                        <figure className="image is-96x96 is-inline-block">
                            <img src={catone} alt="cat pic" width="20%" />
                        </figure>
                    </div>
                </div>
                <div className="content">
                    <span className="has-text-primary is-family-code">A cat lover, a nerd, and a night owl</span>
                    <br />
                    <br />
                    After graduated with a BS in Arts Management, Mari dedicated a year of service with ArtistYear in Philadelphia. He integrated Photography as an art elective, and led students to create their own personal portfolio to share their work and views with their communities during the 2016 - 2017 school year.
                    <br />
                    <br />
                    In 2020, Mari was contracted as a Recruiting Coordinator @ Google via Adecco, and relocated back to the Bay Area. He was later promoted as a supervisor, and supported a team of 35+ coordinators during the transition from Remote to Hybrid work.
                    <br />
                    <br />
                    After comlpeted a FullStack Coding Bootcamp at the end of 2022, Mari is eager and excited to apply his unique blend of people, technical, and creative skills for the nexct challenge.
                    <br />
                    <br />

                    <a className="button is-primary is-outlined" href={resume}>
                        <span>Click Here for a copy of my resume!</span>
                    </a>
                    <br />
                    <br />
                    <span>Technical Skills:</span>
                    <br />
                    <span className="has-text-info">Front-End</span>
                    <div className="tags">
                        <span className="tag is-info">html 5</span>
                        <span className="tag is-info">CSS</span>
                        <span className="tag is-info">react.js</span>
                        <span className="tag is-info">handlebar.js</span>
                        <span className="tag is-info">bootstrap</span>
                        <span className="tag is-info">bulma</span>
                        <span className="tag is-info">SASS</span>
                        <span className="tag is-info">IndexDB</span>
                        <span className="tag is-info">webpack</span>
                        <span className="tag is-info">MUI</span>
                    </div>
                    <span className="has-text-danger">Back-End</span>
                    <div className="tags">
                        <span className="tag is-danger">javascript</span>
                        <span className="tag is-danger">express</span>
                        <span className="tag is-danger">node.js</span>
                        <span className="tag is-danger">res api</span>
                        <span className="tag is-danger">sql</span>
                        <span className="tag is-danger">sequelize</span>
                        <span className="tag is-danger">nosql</span>
                        <span className="tag is-danger">mongoDB</span>
                        <span className="tag is-danger">mongoose</span>
                        <span className="tag is-danger">jest</span>
                        <span className="tag is-danger">graphQL</span>

                    </div>
                    <time className="has-text-primary" dateTime="2022-12-4">last updated: 4 Dec 2022</time>
                </div>

            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={cattwo} alt="Placeholder" />
                </figure>
            </div>
        </div>
    );
}

export default About;