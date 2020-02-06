import React from 'react';
import DrawerToggler from '../SideDrawer/Toggler';
import './Toolbar.css';
import Logo from '../../images/logo.png';

import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Toolbar = (props) => {
    return (
        <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__logo">
                <a href="/"><img  src={Logo} alt="logo" style={{ width:'120px' }} /></a>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link className="link" to="/">
                            <Button color="primary">Home</Button>
                            <i class="fas fa-home"></i> <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Button color="primary">About</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/service">
                            <Button color="primary">Service</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <Button color="primary">Contact</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signin">
                            <Button variant="contained" color="secondary" className="medict_btn">Sign In</Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/signup">
                            <Button color="primary">Sign Up</Button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="toolbar__toggle-button">
                <DrawerToggler click={props.drawerClickHandler} />
            </div>
        </nav>
    </header>
    )
}



export default Toolbar;