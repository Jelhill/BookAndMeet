import React from 'react';
import './App.css';
import Landing2 from './Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import Search from './Components/HomePage/Search';
import Main from './Components/HomePage/Main';
import Header from './Components/Header';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';


function App() {
  
  return (
    
    
    <Fragment>
    <Landing2/>
    <Search />
      <BookingForm /> 
      {/* <UserProfilePage /> */}
    </Fragment>
   
  );
}

export default App;
