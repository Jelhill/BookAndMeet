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
import Login from './Components/Modals/Login';
import SignUp from './Components/Modals/SignUp';
import Logout from './Components/Modals/Logout';
import CompleteSignUp from "./Components/Modals/CompleteSignUp"



function App() {
 
  return (
    <Fragment>    
      <Switch>
        <Route exact path="/" component={Landing2} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/booking" component={BookingForm} />
        <Route exact path="/aboutRoom" component={AboutRoom} />
        <Route exact path="/user/profile" component={UserProfilePage} />
        <Route exact path="/imageLoader" component={imageLoader} />
        {/* <Route exact path="/login" component={ Login } /> */}
        {/*<Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} /> */}
        <Route exact path="/completeSignUp" component={CompleteSignUp} />
      </Switch>
    </Fragment> 
  );
}

export default App;
