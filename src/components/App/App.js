import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import mainApi from '../../utils/MainApi';
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
  const navigate = useNavigate();
  const [user, setUser] = React.useState(null);
  const [infoMessage, setInfoMessage] = React.useState(null);

  const headerShowForPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerShowForPaths = ['/', '/movies', '/saved-movies'];

  React.useEffect(() => {
    mainApi
      .getUser()
      .then((res) => {
        const { name, email } = res;
        setUser({ name, email });
      })
      .catch((err) => setUser(null));
  }, []);

  function handleSignin(credentials) {
    const { email, password } = credentials;
    mainApi
      .signIn({ email, password })
      .then((res) => {
        const { name, email } = res;
        setUser({ name, email });
        setInfoMessage(null);
      })
      .then((res) => navigate('/movies'))
      .catch((err) => setInfoMessage(err.message));
  }

  function handleSignup(credentials) {
    mainApi
      .signUp(credentials)
      .then((res) => {
        handleSignin(credentials);
      })
      .catch((err) => {
        setInfoMessage(err.message);
      });
  }

  function handleSignout() {
    mainApi
      .signOut()
      .then((res) => {
        setInfoMessage(null);
        setUser(null);
      })
      .then((res) => navigate('/'))
      .catch((err) => {
        setInfoMessage(err.message);
      });
  }

  function handleUpdateUser(credentials) {
    mainApi
      .updateUser(credentials)
      .then((res) => {
        setInfoMessage(null);
        const { name, email } = res;
        setUser({ name, email });
      })
      .catch((err) => {
        setInfoMessage(err.message);
      });
  }

  const isLoaded = true; // temporary value

  return (
    <UserContext.Provider value={user}>
      <div className='app'>
        {headerShowForPaths.includes(location.pathname) && <Header />}
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
                onSubmit={handleUpdateUser}
                onSignout={handleSignout}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />
            }
          />
          <Route
            path='/signup'
            element={
              <SignUp
                onSubmit={handleSignup}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />
            }
          />
          <Route
            path='/signin'
            element={
              <SignIn
                onSubmit={handleSignin}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />
            }
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Routes>
        {footerShowForPaths.includes(location.pathname) && <Footer />}
      </div>
    </UserContext.Provider>
  );
}

export default App;
