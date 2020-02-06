import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


import { Switch, Route} from 'react-router-dom';

import Home from './components/Pages/Home';
import About from './components/Pages/About';
import Service from './components/Pages/Service';
import Contact from './components/Pages/Contact';
import SignUp from './components/Pages/SignUp';
import SignIn from './components/Pages/SignIn';
import NoMatch from './components/Pages/NoMatch'

class Routes extends Component {

  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) =>{
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false})
  };

  render () {
    let backdrop;

    if (this.state.SideDrawerOpen){
      backdrop = <Backdrop click = {this.backdropClickHandler} />
    }

  return (
   <div style={{ height: '100%'}}>
     <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
     <SideDrawer show={this.state.SideDrawerOpen} />
     {backdrop}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/nomatch" component={NoMatch} />
        </Switch>
      <Footer />
   </div >
  );
}
}

export default Routes;
