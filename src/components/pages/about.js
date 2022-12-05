import React from 'react';

const About = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-512x512">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </figure>
                    </div>
                </div>

                <div className="content">
                    After graduated with a BS in Arts Management, Mari dedicated a year of service with ArtistYear in Philadelphia. He integrated Photography as an art elective, and led students to create their own personal portfolio to share their work and views with their communities during the 2016 - 2017 school year.
                    <br />
                    <br />
                    In 2020, Mari was contracted as a Recruiting Coordinator @ Google via Adecco, and relocated back to the Bay Area. He was later promoted as a supervisor, who oversaw a team of 35+ coordinators during the transition from Remote to Hybrid work.
                    <br />
                    <br />
                    Currently completing the Berkeley Full-Stack Coding Bootcamp to further his technical knowledge and horizon.
                    <br />
                    <br />
                    <a href="#sample">@bulmaio</a>.
                    <a href="#sample">#css</a> <a href="#sample">#responsive</a>
                    <br />
                    <time dateTime="2022-12-4">last updated: 4 Dec 2022</time>
                </div>
            </div>
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src="https://via.placeholder.com/512" alt="Placeholder" />
                </figure>
            </div>
        </div>
    );
}

export default About;