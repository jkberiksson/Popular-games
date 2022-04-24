import { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './index.css';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import Home from './Pages/Home';
import Games from './Pages/Games';
import GameDetail from './Pages/GameDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route path='/' exact>
                <Home />
              </Route>
              <Route path='/games' exact>
                <Games />
              </Route>
              <Route path='/games/:id' exact>
                <GameDetail />
              </Route>
            </Switch>
          </AnimatePresence>
        </>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;
