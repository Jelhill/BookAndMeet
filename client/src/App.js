import React from 'react';
import './App.css';
import Landing2 from './Components/LandingPage/Landing2';
import AboutRoom from './Components/RoomInformation/AboutRoom';
import Search from './Components/HomePage/Search';
import Main from './Components/HomePage/Main';
import Header from './Components/Header';
import BookingForm from './Components/BookingPage/BookingForm';
import { Fragment } from 'react';
import UserProfilePage from './Components/ProfilePage/UserProfilePage';
import Footer from './Components/Footer';



function App() {
  
  return (
    <Fragment>    
      {/* <Search /> */}
      {/* <Header /> */}
<Footer />
      {/* <Search /> */}
      {/* <AboutRoom /> */}
      <Landing2 />
      

    </Fragment>
   
  );
}

export default App;
