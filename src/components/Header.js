import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_CONSTANTS } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);
  const showGptSearch  = useSelector((store)=> store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth).then(() => { }).catch((error) => {
      navigate("/error")
    });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  }

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    //Unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);


  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt="logo" />

      {user && <div className='flex p-4'>

        {showGptSearch && <select className='p-2 bg-gray-900 text-white' onChange={handleLangChange}>{SUPPORTED_CONSTANTS.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}</select>}

        <button className='py-2 px-4 mx-4 bg-red-500 rounded-lg text-white' onClick={handleGptSearchClick}>{showGptSearch ? "Homepage" : "GPT Search"}</button>
        <img className='w-10 h-10' src={user.photoURL} alt='user-icon' />
        <button onClick={handleSignOut} className='font-bold text-white mx-3'>
          <img className='w-10 h-10' src='https://cdn-icons-png.freepik.com/512/16697/16697253.png' alt='icon' />
        </button>
      </div>}
    </div>
  )
}

export default Header