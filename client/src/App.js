import React from 'react';
import './App.css';
import Landing2 from './Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';


function App() {
  return (
    <div>
    <Fragment>
      <Landing2/>
{/*       
        <AboutRoom />
        <BookingForm /> 
        <UserProfilePage /> */}
    </Fragment>
    </div>
  );
}

export default App;
