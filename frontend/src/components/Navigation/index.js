import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import * as sessionActions from '../../store/session';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const credential = 'Dchung007';
  const password = 'davidchung';

  const DemoLogin = (e) => {
    return dispatch(sessionActions.login({ credential, password }))
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='nav-links-list'>
        <span className='single-nav-link'>
          <LoginFormModal />
          {/* <NavLink to="/login">Log In</NavLink> */}
        </span>
        <span className='single-nav-link'>
          <SignupFormModal />
          {/* <NavLink to="/signup">Sign Up</NavLink> */}
        </span>
        <span className='single-nav-link'>
          <button className='menu-buttons' onClick={DemoLogin}>Demo user</button>
        </span>
      </div>
    );
  }


  return (
    <nav className="navbar">
      <div className="logo">
        <NavLink to="/">
          <img id="logo-pic" src="../../images/favicon.ico" />oopa
        </NavLink>
      </div>
      <div>
        <ul className='nav-links'>
          <div className='menu'>
            <div>
              <NavLink exact to="/">Home</NavLink>
            </div>
            <div>
              <NavLink to="/questions">Questions</NavLink>
            </div>
            {isLoaded && sessionLinks}
          </div>


        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
