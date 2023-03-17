import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AllMovies from '../AllMovies/AllMovies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import NotFound from '../NotFound/NotFound';
import './App.css';

function App() {
  const location = useLocation();

  const headerShowForPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerShowForPaths = ['/', '/movies', '/saved-movies'];

  const isLoaded = true; // temporary value
  const isLoggedIn = true; // temporary value
  const [user, setUser] = React.useState({
    name: 'Квентин',
    email: 'q.tarantino@miramax.com',
  }); // temporary value

  return (
    <div className='app'>
      {headerShowForPaths.includes(location.pathname) && (
        <Header isLoggedIn={isLoggedIn} />
      )}
      <Routes>
        <Route
          path='/'
          element={<Main />}
        />
        <Route
          path='/movies'
          element={<AllMovies isLoaded={isLoaded} />}
        />
        <Route
          path='/saved-movies'
          element={<SavedMovies isLoaded={isLoaded} />}
        />
        <Route
          path='/profile'
          element={
            <Profile
              user={user}
              onSubmit={setUser}
            />
          }
        />
        <Route
          path='/signup'
          element={<SignUp />}
        />
        <Route
          path='/signin'
          element={<SignIn />}
        />
        <Route
          path='*'
          element={<NotFound />}
        />
      </Routes>
      {footerShowForPaths.includes(location.pathname) && <Footer />}
    </div>
  );
}

export default App;
