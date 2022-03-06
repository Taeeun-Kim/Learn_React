import { authService } from 'fBase';
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import React, { useState } from 'react';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    if (newAccount) {
      createUserWithEmailAndPassword(authService, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
        })
        .catch((error) => {
          setError(error.message);
        });
    } else {
      signInWithEmailAndPassword(authService, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  const onSocialClick = (event) => {
    const {
      target: { name },
    } = event;
    if (name === 'google') {
      signInWithPopup(authService, googleProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } else if (name === 'github') {
      signInWithPopup(authService, githubProvider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GithubAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GithubAuthProvider.credentialFromError(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name='email'
          type='text'
          placeholder='Email'
          required
          value={email}
          onChange={onChange}
        />
        <input
          name='password'
          type='password'
          placeholder='Password'
          required
          value={password}
          onChange={onChange}
        />
        <input
          type='submit'
          value={newAccount ? 'Create Account' : 'Log In'}
          required
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? 'Sign in' : 'Create Account'}
      </span>
      <div>
        <button onClick={onSocialClick} name='google'>
          Continue with Google
        </button>
        <button onClick={onSocialClick} name='github'>
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
