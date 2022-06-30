import React from 'react';
import './Login.css';
import logo from '../../assets/IMG/logo.png';
import signup from '../../assets/IMG/signup.png';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    let signInError;

    if (user) {
        console.log(user);
    }

    if (error || gError) {
        signInError = <p className='text-danger'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);

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
                                <h1 className="signup-title">Sign up to <span>Take A Trip</span></h1>

                                <p className="signin">Already Have An Account? <a href="lib/signin.html">Signin.</a></p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Email is Required'
                                        },
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: 'Please provide a valid email'
                                        }
                                    })} className="common email" type="email" placeholder="Email" />
                                    <label>
                                        {errors.email?.type === 'required' && <span className='text-danger'>{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className='text-danger'>{errors.email.message}</span>}
                                    </label>

                                    <input {...register("firstName", { required: true })} className="common name" type="text" placeholder="Name" />
                                    {errors.firstName?.type === 'required' && <span className='text-danger'>First name is required</span>}

                                    <input {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'Password is Required'
                                        },
                                        minLength: {
                                            value: 6,
                                            message: 'Must be 6 characters or longer'
                                        }
                                    })}
                                        className="common password" type="password" placeholder="Password" />

                                    <label>
                                        {errors.password?.type === 'required' && <span className='text-danger'>{errors.password.message}</span>}
                                        {errors.password?.type === 'minLength' && <span className='text-danger'>{errors.password.message}</span>}
                                    </label>

                                    {/* <div className="dob">
                                        <span>
                                            <select className="day" name="day" id="day" required></select>
                                        </span>
                                        <span>
                                            <select className="month" name="month" id="month" required></select>
                                        </span>
                                        <span>
                                            <select className="year" name="year" id="year" required></select>
                                        </span>
                                    </div> */}

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

                                    <input className="submit-button" type="submit" value="SignUp" />

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