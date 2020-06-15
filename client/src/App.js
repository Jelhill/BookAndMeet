import React from 'react';
import './App.css';
import SignUp from './Sign up';
import Landing2 from './Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';


function App() {
  return (
    <Fragment>
      {/* <AboutRoom /> */}
      <BookingForm /> 
      {/* <UserProfilePage /> */}
    </Fragment>
  )
}

export default App;
