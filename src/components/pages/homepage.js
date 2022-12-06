import React from 'react';
import face from '../../assets/img/face.jpg';
import hero from '../../assets/img/hero.png';

const Homepage = () => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-3by1">
                    <img src={hero} alt="Hero" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-96x96">
                            <img src={face} alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <br />
                        <p className="title is-4">Mari K. Ma's Portfolio</p>
                        <p className="subtitle is-6">Full Stack Developer | `Human-First` Problem Solver | Cat Dad  </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;