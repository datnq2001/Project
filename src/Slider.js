import React from 'react';

function Slider() {
  return (
    <div className="app__slider">
      <div className="grid slider">
        <img className="slider-image" src="assets/images/St_Peter's_Square,_Vatican_City_-_April_2007.jpg" alt=""/>
        <div className="square-frame"></div>
        <div className="slider-content">
          <h1 className="slider-content__heading">Ancient Mediterranean Archaeology</h1>
          <p className="slider-content__description">Embark on a solemn journey through Ancient Mediterranean Archaeology, where unearthed relics whisper the tales of bygone civilizations ...</p>
          <a href="#explore" className="slider-content__link">Explore Now</a>
          <p className="slider-content__copyright">&copy; Created by La Trobe University</p>
        </div>
      </div>
    </div>
  );
}

export default Slider;
