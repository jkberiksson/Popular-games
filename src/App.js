//React
import { useState, useEffect } from 'react';

//React Router
import { Route, Switch } from 'react-router-dom';

//Global Styling
import './index.css';

//Components
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';

//Pages
import Home from './Pages/Home';
import Games from './Pages/Games';
import GameDetail from './Pages/GameDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <>
      {loading === false ? (
        <>
          <Navbar />
          <AnimatePresence exitBeforeEnter>
            <Switch>
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
