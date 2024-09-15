import React from 'react';
import Divider from './components/Divider';
import AboutUspage from './pages/AboutUspage';
import Eventpage from './pages/Eventpage';
import FandQPage from './pages/FandQpage';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div>
      <Homepage />
      <Divider />
      <AboutUspage />
      <Divider />
      <Eventpage />
      <Divider />
      <FandQPage />
    </div>
  );
}

export default App;