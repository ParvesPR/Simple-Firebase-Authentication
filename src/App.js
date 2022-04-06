import './App.css';
import app from './firebase.init';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleAuth = () => {
    console.log('warning')
  }
  return (
    <div className="App">
      <button onClick={handleGoogleAuth}>Google</button>
    </div>
  );
}

export default App;
