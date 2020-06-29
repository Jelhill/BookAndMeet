import React from 'react';
import { Route , Switch } from "react-router-dom"
import Landing2 from './Components/LandingPage/Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import Search from './Components/HomePage/Search';
import Header from './Components/Header';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';
import Footer from './Components/Footer';
import imageLoader from './Components/imageLoader';
import SignUpContd from './Components/Modals/signUpContd';
import ForgotPassword from './Components/Modals/forgotPassword';



function App() {
 
  return (
    <Fragment>    
      <Switch>
        <Route exact path="/" component={SignUpContd} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/booking" component={BookingForm} />
        <Route exact path="/aboutRoom" component={AboutRoom} />
        <Route exact path="/user/profile" component={UserProfilePage} />
        <Route exact path="/imageLoader" component={imageLoader} />
      </Switch>
    </Fragment> 
  );
}

export default App;
