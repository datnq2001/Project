import React from 'react';

function Navigation() {
  return (
    <div className="background--black">
        <div className="grid-container">
            <div className="container-section navigation-section">
                <div className="container__header navigation-section__header">
                    <h1 className="container__heading navigation-section__heading">Navigation</h1>
                    <a href="#" className="container__link navigation-section__link">Return home page
                        <i className="container__link-icon fa-solid fa-circle-arrow-right"></i>
                    </a>
                </div>
                <div className="exhibition-section__body">
                    <div className="grid-container grid-container--body">
                        <div className="wrapper">
                            <div className="container">
                                <input className="wrapper-input" type="radio" name="slide" id="c1" checked/>
                                <label for="c1" className="card">
                                    <div className="row">
                                        <div className="icon">1</div>
                                        <div className="description">
                                            <a href="#aboutus" className="navigation__link">
                                                <h4 className="description-title">About us</h4>
                                                <p>At The Trendall Research Centre, we specialize in Ancient Mediterranean studies, 
                                                    emphasizing South Italy and Sicily's archaeology during the ClassNameical era. Join 
                                                    us in exploring and celebrating the rich cultural heritage of Greece and Rome.
                                                </p>   
                                            </a>
                                        </div>
                                    </div>
                                </label>
                                <input className="wrapper-input" type="radio" name="slide" id="c2"/>
                                <label for="c2" className="card">
                                    <div className="row">
                                        <div className="icon">2</div>
                                        <div className="description">
                                            <a href="#" className="navigation__link">

                                                <h4 className="description-title">Searching tools</h4>
                                                <p>
                                                    Discover with ease at The Trendall Research Centre with our powerful searching tool. 
                                                    Effortlessly navigate through our extensive library and archive to uncover valuable 
                                                    resources in the field of Ancient Mediterranean studies, tailored to your research needs.
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </label>
                                <input className="wrapper-input" type="radio" name="slide" id="c3"/>
                                <label for="c3" className="card">
                                    <div className="row">
                                        <div className="icon">3</div>
                                        <div className="description">
                                            <a href="#" className="navigation__link">
                                                <h4 className="description-title">Gallery</h4>
                                                <p>
                                                    Dive into the Gallery Treasure Trove on The Trendall Research Centre's website, where you'll 
                                                    discover a curated collection of captivating artifacts and visual delights from the Ancient 
                                                    Mediterranean. Explore the beauty and significance of Greek and Roman art in a click.
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </label>
                                <input className="wrapper-input" type="radio" name="slide" id="c4"/>
                                <label for="c4" className="card">
                                    <div className="row">
                                        <div className="icon">4</div>
                                        <div className="description">
                                            <a href="#" className="navigation__link">
                                                <h4 className="description-title">Resources</h4>
                                                <p>
                                                    Discover abundant resources on The Trendall Research Centre's website, offering essential 
                                                    materials for exploring Ancient Mediterranean studies. Dive into a curated collection of 
                                                    articles and documents to enrich your understanding of Greek and Roman history and culture.
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                </label>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Navigation;
