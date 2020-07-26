import React from 'react';
import { Route , Switch } from "react-router-dom"
import Landing from './Components/LandingPage/Landing';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import Search from './Components/HomePage/Search';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';
import Login from './Components/Modals/login';
import SignUp from './Components/Modals/signup';
import Logout from './Components/Modals/logout';
import CompleteSignUp from "./Components/Modals/CompleteSignUp"
import Error404 from "./Components/404"
import imageLoader from "./Components/imageLoader"
import AboutUs from "./Components/FooterLink/AboutUs"
import Feedback from "./Components/FooterLink/Feedback"
import Admin from "./Components/FooterLink/Admin"
import MeetingRooms from './Components/FooterLink/meetingRooms';
import AddNewRoom from './Components/FooterLink/addNewRoom';





function App() {
 
  return (
    <Fragment>    
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Search} />
        <Route exact path="/booking" component={BookingForm} />
        <Route exact path="/aboutRoom" component={AboutRoom} />
        <Route exact path="/user/profile" component={UserProfilePage} />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/completeSignUp" component={CompleteSignUp} />
        <Route exact path="/404" component={Error404} />
        <Route exact path="/imageLoader" component={imageLoader} />
        <Route exact path="/aboutUs" component={AboutUs} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/meetingRooms" component={MeetingRooms}/>
        <Route exact path="/adminDashboard" component={Admin}/>
        <Route exact path="/addnewroom" component={AddNewRoom}/>
      </Switch>
    </Fragment> 
  );
}

export default App;
