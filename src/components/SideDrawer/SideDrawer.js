import React from 'react';

import './sideDrawer.css'

const SideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if(props.show){
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
                <li><a href="/">sign In</a></li>
                <li><a href="/">sign Up</a></li>
            </ul>
        </nav>
    );
};


export default SideDrawer;