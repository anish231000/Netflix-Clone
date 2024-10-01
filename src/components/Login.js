import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt='logo' />
            </div>
            <form className='w-3/12 bg-black absolute p-12 m-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type='text' placeholder='Full Name' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />}

                <input type='text' placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />

                <input type='password' placeholder='Password' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />

                <button className='p-2 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>

                <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now!" : "Already Registered? Sign In Now!"}
                </p>
                
            </form>
        </div>
    )
}

export default Login