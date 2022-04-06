import './App.css';
import app from './firebase.init';
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app)

function App() {
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  const [users, setUsers] = useState({})
  const handleGoogleAuth = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleGithubSignIn = () => {
    signInWithPopup(auth, gitHubProvider)
      .then(result => {
        const user = result.user;
        setUsers(user)
        console.log(user)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(
        setUsers({})
      )
      .catch(error => { })
  }
  return (
    <div className="App">
      {users.uid ?
        <button onClick={handleSignOut}>Sign Out</button> :
        <>
          <button onClick={handleGoogleAuth}>Google Sign in</button>
          <button onClick={handleGithubSignIn}>GitHub Sign in</button>
        </>
      }
      <h2>Name: {users.displayName}</h2>
      <h3>Email: {users.email}</h3>
      <img src={users.photoURL} alt="" />
    </div>
  );
}

export default App;
