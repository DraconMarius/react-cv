import React from 'react';
import face from '../../assets/gif/face.jpg';

const Homepage = () => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-96x96">
                            <img src={face} alt="Placeholder" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">Mari</p>
                        <p className="subtitle is-6">Full Stack Developer | `Human-First` Problem Solver | Cat Dad  </p>
                    </div>
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

export default Homepage;