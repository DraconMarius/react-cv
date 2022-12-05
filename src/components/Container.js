import React, { useState } from "react";
import Nav from './Nav';
import Homepage from './pages/homepage';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';

const Container = () => {
    //setting pageState
    //default 'Home'
    const [current, setCurrent] = useState('homepage')

    //conditional to render specific page
    const displayContent = () => {
        if (current === 'homepage') {
            return <Homepage />;
        };
        if (current === 'about') {
            return <About />;
        };
        if (current === 'portfolio') {
            return <Portfolio />;
        }
        return <Contact />;
    };

    //passing setter to component, wrappin in arrow fn so won't excute as populated
    const updateCurrent = (page) => {
        setCurrent(page);
        console.log(`page changed to ${current}`);
    };

    //component, passing our getter and setter to nav bar
    return (
        <div>
            <nav className="navbar is-transparent">
                <Nav current={current} updateCurrent={updateCurrent}></Nav>
            </nav>
            {displayContent()}
        </div >
    );
};

export default Container;




