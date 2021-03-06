import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (

    <div className='form-div'>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='form-title'>
          <h1>
            Hoopa
          </h1>
          <h4>
            Real hoopers know.
          </h4>
        </div>
        <ul className='login-form-list'>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <li>
            <label>
              Username or Email<span className="required">*</span>
              <input
                className="field-login"
                type="text"
                value={credential}
                onChange={(e) => setCredential(e.target.value)}
                required
              />
            </label>
          </li>
          <li>
            <label>
              Password<span className="required">*</span>
              <input
                className="field-login"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </li>
          <li className='login-button'>
            <button className='login-button' type="submit">Log In</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default LoginFormPage;
