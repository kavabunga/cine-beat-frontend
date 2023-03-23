import React from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import mainApi from '../../utils/MainApi';
import { GALLERY_BREAKPOINTS } from '../../utils/constants.ts';
import ProtectedRouteElement from '../ProtectedRouteElement/ProtectedRouteElement';
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
  const [userIsChecking, setUserIsChecking] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isLoadingContent, setIsLoadingContent] = React.useState(false);
  const [infoMessage, setInfoMessage] = React.useState({
    message: null,
    type: null,
  });
  const [screenParams, setScreenParams] = React.useState(null);

  const headerShowForPaths = ['/', '/movies', '/saved-movies', '/profile'];
  const footerShowForPaths = ['/', '/movies', '/saved-movies'];

  React.useEffect(() => {
    if (!user) {
      setUserIsChecking(true);
      mainApi
        .getUser()
        .then((res) => {
          const { name, email } = res;
          setUser({ name, email });
        })
        .catch((err) => setUser(null))
        .finally((res) => setUserIsChecking(false));
    }
  }, []);

  React.useEffect(() => {
    let resizeTimer;
    setScreenParams(checkWindowSize());
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => setScreenParams(checkWindowSize()), 500);
    });
  }, []);

  function checkWindowSize() {
    let params;
    GALLERY_BREAKPOINTS.forEach(
      (b) =>
        window.matchMedia(`(min-width: ${b.width}px)`).matches && (params = b)
    );
    return params;
  }

  function handleSignin(credentials) {
    setIsSubmitting(true);
    const { email, password } = credentials;
    mainApi
      .signIn({ email, password })
      .then((res) => {
        const { name, email } = res;
        setUser({ name, email });
        setInfoMessage({
          message: null,
          type: null,
        });
      })
      .then(() => navigate('/movies'))
      .catch((err) =>
        setInfoMessage({
          message: err.message,
          type: 'error',
        })
      )
      .finally(() => setIsSubmitting(false));
  }

  function handleSignup(credentials) {
    setIsSubmitting(true);
    mainApi
      .signUp(credentials)
      .then((res) => {
        handleSignin(credentials);
      })
      .catch((err) => {
        setInfoMessage({
          message: err.message,
          type: 'error',
        });
      })
      .finally(() => setIsSubmitting(false));
  }

  function handleSignout() {
    setIsSubmitting(true);
    mainApi
      .signOut()
      .then((res) => {
        setInfoMessage({
          message: null,
          type: null,
        });
        setUser(null);
      })
      .then((res) => navigate('/'))
      .catch((err) => {
        setInfoMessage({
          message: err.message,
          type: 'error',
        });
      })
      .finally(() => setIsSubmitting(false));
  }

  function handleUpdateUser(credentials) {
    setIsSubmitting(true);
    mainApi
      .updateUser(credentials)
      .then((res) => {
        setInfoMessage({
          message: 'Данные обновлены',
          type: 'success',
        });
        const { name, email } = res;
        setUser({ name, email });
      })
      .catch((err) => {
        setInfoMessage({
          message: err.message,
          type: 'error',
        });
      })
      .finally(() => setIsSubmitting(false));
  }

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
            element={
              <ProtectedRouteElement
                isChecking={userIsChecking}
                element={AllMovies}
                isLoading={isLoadingContent}
                setIsLoading={setIsLoadingContent}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
                screenParams={screenParams}
              />
            }
          />
          <Route
            path='/saved-movies'
            element={
              <ProtectedRouteElement
                isChecking={userIsChecking}
                element={SavedMovies}
                isLoading={isLoadingContent}
                setIsLoading={setIsLoadingContent}
                infoMessage={infoMessage}
                setInfoMessage={setInfoMessage}
              />
            }
          />
          <Route
            path='/profile'
            element={
              <ProtectedRouteElement
                isChecking={userIsChecking}
                element={Profile}
                onSubmit={handleUpdateUser}
                isSubmitting={isSubmitting}
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
                isSubmitting={isSubmitting}
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
                isSubmitting={isSubmitting}
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
