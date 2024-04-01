import React from 'react';

function SignIn() {
  return (
    <div className="modal">
        <div className="modal-frame">
            <i className="close-window fa-solid fa-circle-xmark"></i>
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
                        <p className="account-text">Don't have an account? <a href="#" id="sign-up-btn2">Sign up</a></p>
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