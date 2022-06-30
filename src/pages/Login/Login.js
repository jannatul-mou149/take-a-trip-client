import React from 'react';
import './Login.css';
import logo from '../../assets/IMG/logo.png';
import signup from '../../assets/IMG/signup.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div>
            <div className="signup layer1">
                <div className="layer2">
                    <div className="my-container">
                        <nav>
                            <a href="/">
                                <img className="logo" src={logo} alt="" />
                            </a>
                        </nav>

                        <div className="signup-main">
                            <div className="signup-left">
                                <img src={signup} alt="" />
                            </div>

                            <div className="signup-right">
                                <form>
                                    <h1 className="signup-title">Sign up to <span>Take A Trip</span></h1>

                                    <p className="signin">Already Have An Account? <a href="lib/signin.html">Signin.</a></p>

                                    <input className="common email" type="email" placeholder="Email" required />
                                    <input className="common name" type="text" placeholder="Name" required />
                                    <input className="common password" type="password" placeholder="Password" required />
                                    <div className="dob">
                                        <span>
                                            <select className="day" name="day" id="day" required></select>
                                        </span>
                                        <span>
                                            <select className="month" name="month" id="month" required></select>
                                        </span>
                                        <span>
                                            <select className="year" name="year" id="year" required></select>
                                        </span>
                                    </div>

                                    <div className="gender">
                                        <div className="items">
                                            <label for="male" className="item male">
                                                <span>Male</span>
                                                <input type="radio" name="select" value="male" id="male" required />
                                            </label>
                                            <label for="female" className="item female">
                                                <span>Female</span>
                                                <input type="radio" name="select" value="female" id="female" required />
                                            </label>
                                            <label for="other" className="item other">
                                                <span>Other</span>
                                                <input type="radio" name="select" value="other" id="other" required />
                                            </label>
                                        </div>
                                    </div>

                                    <button className="submit-button" type="submit">Signup</button>

                                    <button
                                        onClick={() => signInWithGoogle()}
                                        className="with-google">
                                        <i><i className="fa-brands fa-google"></i></i>
                                        <p>Signup With Google</p>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;