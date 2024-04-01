import React from 'react'; // Import useEffect and useState
import './base.css';
import './main.css';
import './magnify.css';

function App() {
  return (
    <>
      <div className="app">
        <img className="background-behind" src="assets/images/fixed-background.jpg" alt="" />
        <header className="header">
          <div className="grid">
            <nav className="header__navbar">
              <a href="/" className="header__navbar-logo">
                <img src="assets/images/logo.png" alt="" className="header__navbar-logo-img" />
                <span className="header__navbar-logo-company">TRENDALL</span>
              </a>
              <ul className="header__navbar-list">
                <li className="header__navbar-item header__navbar-item--disabled">
                  <a href="/" className="header__navbar-link header__navbar-link--primary">HOME</a>
                </li>
                <li className="header__navbar-item">
                  <a href="#article" className="header__navbar-link">ARTICLE</a>
                </li>
                <li className="header__navbar-item">
                  <a href="#exhibition" className="header__navbar-link">GALLERY</a>
                </li>
                <li className="header__navbar-item">
                  <a href="#search" className="header__navbar-link">SEARCH</a>
                </li>
                <li className="header__navbar-item">
                  <a href="#aboutus" className="header__navbar-link">ABOUT US</a>
                </li>
                <li className="header__navbar-item">
                  <button className="header__navbar-link link-sign-in">SIGN IN</button>
                </li>
                <li className="header__navbar-item">
                  <i className="header__navbar-menu fas fa-bars"></i>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="app__slider">
          <div className="grid slider">
            <img className="slider-image" src="assets/images/St_Peter's_Square,_Vatican_City_-_April_2007.jpg" alt="" />
            <div className="square-frame"></div>
            <div className="slider-content">
              <h1 className="slider-content__heading">Ancient Mediterranean Archaeology</h1>
              <p className="slider-content__description">Embark on a solemn journey through Ancient Mediterranean Archaeology, where unearthed relics whisper the tales of bygone civilizations ...</p>
              <a href="#explore" className="slider-content__link">Explore Now</a>
              <p className="slider-content__copyright">&copy; Created by La Trobe University</p>
            </div>
          </div>
        </div>
        <div className="app__slider">
          <div className="grid slider1" id="aboutus">
            <div className="blank"></div>
            <img src="assets/images/Screenshot 2024-03-29 214618.png" alt="" className="about-us-image" />
            <section className="hidden-1">
              <span className="text">We are Trendall centre.We lead the way in</span><br />
              <span className="text">advancing knowledge of the Ancient Mediterranean.</span><br />
              <span className="text">As your partner in exploration, we offer unparalleled</span><br />
              <span className="text">resources and expertise in the archaeology of South</span><br />
              <span className="text">Italy and Sicily during the Classical period.</span>
            </section>
            <section className="hidden-4">
              <span className="text--right">We are committed to bringing the latest </span><br />
              <span className="text--right">discoveries in Greek and Roman art and archaeology </span><br />
              <span className="text--right">to the forefront of discussion in Australia.Through our </span><br />
              <span className="text--right">conferences, lectures,and seminars, we bridge the gap</span><br />
              <span className="text--right">between academia and the wider community, enriching</span><br />
              <span className="text--right">understanding and appreciation of our shared heritage.</span><br />
            </section>
          </div>
        </div>
      </div>
      <div className="app__container">
        <div className="background--black">
          <div className="grid-container">
            <div className="container-section articles-section" id="article">
              <div className="container__header articles-section__header">
                <h1 className="container__heading articles-section__heading">Articles</h1>
                <a href="/" className="container__link articles-section__link">See all articles
                  <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
                </a>
              </div>
              <div className="articles-section__body">
                <div className="articles-container">
                  <div className="grid__row--no-wrap">
                    <div className="grid__column-four">
                      <a href="#" className="article">
                        <div className="article-border"></div>
                        <div className="article-container">
                          <div className="article__image-container">
                            <img src="assets/images/article1.jpg" alt="" className="article__image" />
                          </div>
                          <div className="article-info">
                            <h3 className="article__heading">Lost Cities Rediscovered: Tales from the Ancient Mediterranean</h3>
                            <p className="article__description">Delve into the captivating narrative of "Lost Cities Rediscovered: Tales from the Ancient Mediterranean" as it unravels the mysteries veiled by time in the vibrant tapestry of the Mediterranean region. This compelling exploration embarks on a journey through the annals of history, resurrecting ancient civilizations and their enigmatic urban landscapes that have long been obscured beneath layers of antiquity.</p>
                          </div>
                        </div>
                      </a>
                    </div>
                    {/* More article divs */}
                  </div>
                </div>
              </div>
            </div>
            <div className="container-section exhibition-section" id="exhibition">
              <div className="container__header">
                <h1 className="container__heading">Exhibitions and Events</h1>
                <a href="/" className="container__link">See all exhibitions and events
                  <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
                </a>
              </div>
              <div className="exhibition-section__body">
                <div className="grid-container">
                  <div className="grid__row">
                    <div className="grid__column-two">
                      <div href="" className="exhibition">
                        <div className="exhibition-border background--yellow"></div>
                        <div className="exhibition-container">
                          <div className="exhibition-info">
                            <div className="exhibition-body">
                              <h1 className="exhibition__heading exhibition__heading--yellow">Timeless Treasures</h1>
                              <h3 className="exhibition__description">a journey through art history</h3>
                            </div>
                            <div className="exhibition-footer">
                              <div className="exhibition-time">
                                <span className="exhibition__type">Exhibition</span><br />
                                <span className="exhibition__date">1 Apr 2024 - 30 Apr 2024</span>
                              </div>
                              <a href="/" className="exhibition__link background-link--yellow">Book Now</a>
                            </div>
                          </div>
                          <div className="exhibition__image-container">
                            <img src="assets/images/exhibition1.jpg" alt="" className="exhibition__image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid__column-two">
                      <div href="" className="exhibition">
                        <div className="exhibition-border background--blue"></div>
                        <div className="exhibition-container">
                          <div className="exhibition-info">
                            <div className="exhibition-body">
                              <h1 className="exhibition__heading exhibition__heading--blue">Ancient Marvels</h1>
                              <h3 className="exhibition__description">unveiling the Artistic Legacy</h3>
                            </div>
                            <div className="exhibition-footer">
                              <div className="exhibition-time">
                                <span className="exhibition__type">Exhibition</span><br />
                                <span className="exhibition__date">16 May 2024 - 25 Jun 2024</span>
                              </div>
                              <a href="/" className="exhibition__link background-link--blue">Book Now</a>
                            </div>
                          </div>
                          <div className="exhibition__image-container">
                            <img src="assets/images/exhibition2.jpg" alt="" className="exhibition__image"/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid-container">
              <div className="banner" id="search">
                <div className="banner-info">
                  <div className="banner__heading">SEARCH <br/> COLLECTION <br/> ONLINE</div>
                  <div className="banner__content">
                    <div className="banner__description">Immerse yourself in our ancient world and uncover new discoveries about the civilizations, arts, and histories of the Mediterranean region.</div>
                    <div className="banner__button">
                      <a href="/" className="banner__link">
                        Start your research
                        <i className="banner__link-icon fa-solid fa-circle-chevron-right"></i>
                      </a>
                      <div className="banner__link-back"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background--black">
        <div className="grid-container">
          <div className="container-section explore-section" id="explore">
            <div className="container__header explore-section__header">
              <h1 className="container__heading explore-section__heading">Explore Collection</h1>
              <button className="magnify-tool-trigger">
                <i className="magnify-tool-icon fa-solid fa-magnifying-glass-plus"></i>
                <span className="magnify-tool-trigger-text">Zoom in</span>
              </button>
              <a href="/" className="container__link explore-section__link">See more Collection
                <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
              </a>
            </div>
            <div className="exhibition-section__body">
              <div className="grid-container grid-container--body">
                <div className="grid__row">
                  <div className="grid__column-two">
                    <div href="" className="collection">
                      <img src="assets/images/P-1-1.png" alt="" className="collection-image image-zoom" data-magnify-src="assets/images/P-1-1.png" />
                      <img src="assets/images/drawio.png" alt="" className="collection-image-vector" />
                      <img src="assets/images/P-1-2.png" alt="" className="collection-image--regular image-zoom" />
                      <p className="collection-description">An ancient Athenian vase is discovered from the Munich Antikensammlungen, part of the esteemed Candelori Collection in Rome since 1539.</p>
                      <div className="cover-frame">
                        <img src="assets/images/P-1-1.png" alt="" className="cover-image image-zoom" />
                      </div>
                    </div>
                  </div>
                  <div className="grid__column-two">
                    <div href="" className="collection">
                      <img src="assets/images/P-1-3.png" alt="" className="collection-image image-zoom" data-magnify-src="assets/images/P-1-3.png" />
                      <img src="assets/images/P-2.png" alt="" className="collection-image--small collection-image--small-1 image-zoom" />
                      <img src="assets/images/P-6.png" alt="" className="collection-image--small collection-image--small-2 image-zoom" />
                      <img src="assets/images/P-13-2.png" alt="" className="collection-image--small collection-image--small-3 image-zoom" />
                      <p className="collection-description">Explore the Corinthian artifact, accessioned as 1992.1, housed within The Art Museum at Princeton University in Princeton, New Jersey.</p>
                      <div className="cover-frame">
                        <img src="assets/images/P-1-3.png" alt="" className="cover-image image-zoom" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="banner" id="sign-in">
          <div className="banner-info">
            <div className="banner__heading">BECOME <br/> OUR MEMBER</div>
            <div className="banner__content">
              <div className="banner__description">"Join us today and unlock exclusive benefits! Gain access to premium content, special events, and insider updates. Become a valued member of our community and support our mission. Join now!"</div>
              <div className="banner__button">
                <a href="/" className="banner__link">
                  Create Account
                  <i className="banner__link-icon fa-solid fa-circle-chevron-right"></i>
                </a>
                <div className="banner__link-back"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background--black">
        <div className="grid-container">
          <div className="footer">
            <div className="grid__row footer__row">
              <div className="grid__column-four">
                <img src="assets/images/logo-white.png" alt="" className="footer__logo" />
                <p className="footer__description">We are dedicated to the study of Ancient Mediterranean Archaeology. Our center serves as a platform for research, education, and community engagement, fostering interdisciplinary collaborations and advancing knowledge of the ancient world.</p>
              </div>
              <div className="grid__column-four">
                <h2 className="footer__heading">Quick Links</h2>
                <ul className="footer__list">
                  <li className="footer__item"><a href="#article" className="footer__link">Articles</a></li>
                  <li className="footer__item"><a href="#exhibition" className="footer__link">Exhibitions</a></li>
                  <li className="footer__item"><a href="#explore" className="footer__link">Collections</a></li>
                  <li className="footer__item"><a href="#aboutus" className="footer__link">About Us</a></li>
                  <li className="footer__item"><a href="#sign-in" className="footer__link">Sign In</a></li>
                </ul>
              </div>
              <div className="grid__column-four">
                <h2 className="footer__heading">Contact Us</h2>
                <address className="footer__address">
                  Trendall Research Centre<br />
                  La Trobe University<br />
                  Melbourne, Victoria 3086<br />
                  Australia<br />
                  <a href="mailto:info@trendall.edu.au" className="footer__email">info@trendall.edu.au</a>
                </address>
              </div>
              <div className="grid__column-four">
                <h2 className="footer__heading">Follow Us</h2>
                <ul className="footer__social">
                  <li className="footer__social-item"><a href="/" className="footer__social-link"><i className="fab fa-facebook-square"></i></a></li>
                  <li className="footer__social-item"><a href="/" className="footer__social-link"><i className="fab fa-twitter-square"></i></a></li>
                  <li className="footer__social-item"><a href="/" className="footer__social-link"><i className="fab fa-instagram-square"></i></a></li>
                  <li className="footer__social-item"><a href="/" className="footer__social-link"><i className="fab fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
