import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  const isLoggedIn = true; // temporary value
  return (
    <div className='app'>
      <Header isLoggedIn={isLoggedIn} />
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
