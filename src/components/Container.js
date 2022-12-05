import React, { useState } from "react";
import Nav from './Nav';
import homepage from './pages/homepage';
import about from './pages/about';
import contact from './pages/contact';
import portfolio from './pages/portfolio';

//setting pageState
//default 'Home'
const [current, setCurrent] = useState('Home')

//conditional to render specific page
const displayContent = () => {
    if (current === 'homepage') {
        return <homepage></homepage>
    };
    if (current === 'about') {
        return <about></about>
    };
    if (current === 'portfolio') {
        return <portfolio></portfolio>
    };
    if (current === 'contact') {
        return <contact></contact>
    };
};

//passing setter to component, wrappin in arrow fn so won't excute as populated
const updateCurrent = (page) => {
    setCurrent(page);
};

//component, passing our getter and setter to nav bar
function Container() {
    return (
        <div>
            <nav class="navbar is-transparent">
                <Nav current={current} updateCurrent={updateCurrent}></Nav>
            </nav>
            {displayContent()}
        </div >
    ); s
};

export default Container;




