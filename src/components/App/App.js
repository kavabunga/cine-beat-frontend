import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AllMovies from '../AllMovies/AllMovies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer';
import './App.css';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';

function App() {
  const isLoaded = true; // temporary value
  const isLoggedIn = true; // temporary value
  const [user, setUser] = React.useState({
    name: 'Квентин',
    email: 'q.tarantino@miramax.com',
  }); // temporary value

  return (
    <div className='app'>
      {/* <Header isLoggedIn={isLoggedIn} /> */}
      {/* <Main /> */}
      {/* <AllMovies isLoaded={isLoaded} /> */}
      {/* <SavedMovies isLoaded={isLoaded} /> */}
      {/* <Profile
        user={user}
        onSubmit={setUser}
      /> */}
      {/* <SignUp /> */}
      <SignIn />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
