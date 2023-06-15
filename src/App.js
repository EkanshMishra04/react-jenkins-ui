import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import MainScreen from './components/pages/MainScreen';
import HomeScreen from './components/pages/HomeScreen';
import Navbar from './components/Navbar';
import Spinner from './components/utilComponents/Spinner';

function App() {
  const { isAuthenticated, isLoading, error } = useAuth0();
  return (

    <div className='App'>
      <Navbar />
      {
        error && <p>Authentication Error</p>
      }
      {
        !error && isLoading && (
        <div style={{
          display: 'flex', justifyContent: 'center', alignItem: 'center', marginTop: '200px',
        }}
        >
          <Spinner />
        </div>
        )
      }
      {
        !error && !isLoading && (
          <>
            {
            isAuthenticated
              ? <MainScreen />
              : <HomeScreen />
            }
          </>
        )
      }

    </div>
  );
}

export default App;
