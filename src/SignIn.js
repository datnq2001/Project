import React, { useState, useEffect } from 'react';

function SignIn() {
    const [isOpen, setIsOpen] = useState(false);

    const openWindow = () => {
        setIsOpen(true);
    };

    const closeWindow = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const openSignIn = document.querySelector('.link-sign-in');
        const closeSignIn = document.querySelector('.close-window');
        const container = document.querySelector('.modal-container');
        const sign_in_btn = document.querySelector('#sign-in-btn');
        const sign_up_btn = document.querySelector('#sign-up-btn');

        const openSignInHandler = () => {
            openWindow();
        };

        const closeSignInHandler = () => {
            closeWindow();
        };

        const switchToSignUpMode = () => {
            container.classList.add("sign-up-mode");
        };

        const switchToSignInMode = () => {
            container.classList.remove("sign-up-mode");
        };

        openSignIn.addEventListener('click', openSignInHandler);
        closeSignIn.addEventListener('click', closeSignInHandler);
        sign_up_btn.addEventListener("click", switchToSignUpMode);
        sign_in_btn.addEventListener("click", switchToSignInMode);

        return () => {
            openSignIn.removeEventListener('click', openSignInHandler);
            closeSignIn.removeEventListener('click', closeSignInHandler);
            sign_up_btn.removeEventListener("click", switchToSignUpMode);
            sign_in_btn.removeEventListener("click", switchToSignInMode);
        };
    }, []);

    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-frame">
                <i className="close-window fa-solid fa-circle-xmark" onClick={closeWindow}></i>
                <div className="modal-container">
                    <div className="signin-signup">
                        <form action="" className="sign-in-form">
                            <h2 className="title">Sign in</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" required/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" required/>
                            </div>
                            <input type="submit" value="Login" className="btn"/>
                            <div className="social-media-group">
                                <p className="social-text">Or Sign in with social platform</p>
                                <div className="social-media">
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-facebook"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-google"></i>
                                    </a>
                                    <a href="#" className="social-icon">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </div>
                            </div>
                        </form>
                        <form action="" className="sign-up-form">
                            <h2 className="title">Sign up</h2>
                            <div className="input-field">
                                <i className="fas fa-user"></i>
                                <input type="text" placeholder="Username" required/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-envelope"></i>
                                <input type="text" placeholder="Email" required/>
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock"></i>
                                <input type="password" placeholder="Password" required/>
                            </div>
                            <input type="submit" value="Sign up" className="btn"/>
                            <p className="social-text">Or Sign in with social platform</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-google"></i>
                                </a>
                                <a href="#" className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>You already have an Account?</h3>
                                <p>Welcome back! Ready to dive into more archaeological adventures? Sign in now to continue exploring with us</p>
                                <button className="btn" id="sign-in-btn">Sign in</button>
                            </div>
                            <img src="assets\images\sign-in.png" alt="" className="image"/>
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>You are a new Member?</h3>
                                <p>Join us today and unlock exclusive benefits! Gain access to premium content, special events, and insider updates.</p>
                                <button className="btn" id="sign-up-btn">Sign up</button>
                            </div>
                            <img src="assets\images\sign-up.png" alt="" className="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
