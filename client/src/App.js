import React from 'react';
import { Route , Switch } from "react-router-dom"
import Landing2 from './Components/LandingPage/Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import Search from './Components/HomePage/Search';
import Header from './Components/Header';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';

import UserProfilePage from './Components/ProfilePage/UserProfilePage';


function App() {
  
  return (
    <Fragment>    
      <Switch>
        <Route exact path="/" component={Landing2} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/booking" component={BookingForm} />
        <Route exact path="/aboutRoom" component={AboutRoom} />
        <Route exact path="/user/profile" component={UserProfilePage} />
      </Switch>
    </Fragment>   
  );
}

export default App;
