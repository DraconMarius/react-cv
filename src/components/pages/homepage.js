import React from 'react';

const homepage = () => {
    return (
        <div class="card">
            <div class="card-image">
                <figure class="image is-4by3">
                    <img src="https://via.placeholder.com/512" alt="Placeholder" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-4">Mari</p>
                        <p class="subtitle is-6">Full Stack Developer</p>
                    </div>
                </div>

                <div class="content">
                    After graduated with a BS in Arts Management in 2016, Mari dedicated a year of service with ArtistYear in Philadelphia. He integrated Photography as an art elective, and led students to create their own personal portfolio to share their work and views with their communities.
                    <br />
                    <br />
                    In 2020, Mari was contracted as a Recruiting Coordinator @ Google via Adecco, and relocated back to the Bay Area. He was later promoted to a supervisor role who led a team of 35+ coordinators during the transition from Remote to Hybrid work week in 2022.
                    <br />
                    <br />
                    Currently a part of the Berkeley Coding Bootcamp to further my technical knowledge to be more competitive in the current job market. Thanks for taking the time and enjoy your visit
                    <br />
                    <br />
                    <a href="#sample">@bulmaio</a>.
                    <a href="#sample">#css</a> <a href="#sample">#responsive</a>
                    <br />
                    <time dateTime="2022-12-4">last updated: 4 Dec 2022</time>
                </div>
            </div>
        </div>
    );
}

export default homepage;