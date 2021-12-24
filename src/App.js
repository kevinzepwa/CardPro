import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer';

function App() {
  const [ darkTheme, setDarkTheme ] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevTheme => !prevTheme)
    console.log("clicked!")
  }

  return (
    <div className="App">
      <Nav darkTheme={darkTheme} toggleTheme={toggleTheme} />
      <Main darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </div>
  );
}

export default App;
