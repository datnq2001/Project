import React from 'react';

function Exhibitions() {
  return (
    <div className="container-section exhibition-section" id="exhibition">
        <div className="container__header">
            <h1 className="container__heading">Exhibitions and Events</h1>
            <a href="#" className="container__link">See all exhibitions and events
                <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
            </a>
        </div>
        <div className="exhibition-section__body">
            <div className="grid-container">
                <div className="grid__row">
                    <div className="grid__column-two">
                        <div href="#" className="exhibition">
                            <div className="exhibition-border background--yellow"></div>
                            <div className="exhibition-container">
                                <div className="exhibition-info">
                                    <div className="exhibition-body">
                                        <h1 className="exhibition__heading exhibition__heading--yellow">Timeless Treasures</h1>
                                        <h3 className="exhibition__description">a journey through art history</h3>
                                    </div>
                                    <div className="exhibition-footer">
                                        <div className="exhibition-time">
                                            <span className="exhibition__type">Exhibition</span>
                                            <br/>
                                            <span className="exhibition__date">1 Apr 2024 - 30 Apr 2024</span>
                                        </div>
                                        <a href="#" className="exhibition__link background-link--yellow">Book Now</a>
                                    </div>
                                </div>
                                <div className="exhibition__image-container">
                                    <img src="assets\images\exhibition1.jpg" alt="" className="exhibition__image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid__column-two">
                        <div className="exhibition">
                            <div className="exhibition-border background--blue"></div>
                            <div className="exhibition-container">
                                <div className="exhibition-info">
                                    <div className="exhibition-body">
                                        <h1 className="exhibition__heading exhibition__heading--blue">Ancient Marvels</h1>
                                        <h3 className="exhibition__description">unveilin the Artistic Legacy</h3>
                                    </div>
                                    <div className="exhibition-footer">
                                        <div className="exhibition-time">
                                            <span className="exhibition__type">Exhibition</span>
                                            <br/>
                                            <span className="exhibition__date">16 May 2024 - 25 Jun 2024</span>
                                        </div>
                                        <a href="#" className="exhibition__link background-link--blue">Book Now</a>
                                    </div>
                                </div>
                                <div className="exhibition__image-container">
                                    <img src="assets\images\exhibition2.jpg" alt="" className="exhibition__image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Exhibitions;
