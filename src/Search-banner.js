import React from 'react';

function Search_banner() {
    return (
        <div className="grid-container">
            <div className="banner" id="search">
                <div className="banner-info">
                    <div className="banner__heading">SEARCH <br/> COLLECTION <br/> ONLINE</div>
                    <div className="banner__content">
                        <div className="banner__description">Immerse yourself in our ancient world and uncover new discoveries about the civilizations, arts, and histories of the Mediterranean region.</div>
                        <div className="banner__button">
                            <a href="#" className="banner__link">
                                Start your research
                                <i className="banner__link-icon fa-solid fa-circle-chevron-right"></i>
                            </a>
                            <div className="banner__link-back"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search_banner;