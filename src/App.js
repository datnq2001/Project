import React from 'react'; // Import useEffect and useState
import Header from './Header';
import Slider from './Slider';
import AboutUs from './AboutUs';
import Articles from './Articles';
import Exhibitions from './Exhibitions';
import CollectionExplore from './CollectionExplore';
import SignIn from './SignIn';
import Navigation from './Navigation';
import Search_banner from './Search-banner';
import Member_banner from './Member-banner';
function App() {
    return (
      <div className="app">
          <img className="background-behind" src="assets\images\fixed-background.jpg" alt=""/>
          <Header />
          <Slider />
          <AboutUs />
          <div className="app__container">
              <div className="background--black">
                  <div className="grid-container">
                      <Articles />
                      <Exhibitions />
                  </div>
              </div>
              <Search_banner />
              <CollectionExplore />
              <Member_banner />
              <Navigation />
          </div>
          <SignIn />
      </div>
    );
  }
export default App;

