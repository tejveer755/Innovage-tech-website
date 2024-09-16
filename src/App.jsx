import React from 'react';
import Divider from './components/Divider';
import AboutUspage from './pages/AboutUspage';
import Eventpage from './pages/Eventpage';
import FandQPage from './pages/FandQpage';
import Homepage from './pages/Homepage';
import Extra from './pages/Extra';

function App() {
  return (
    <div className='bg-gradient-to-b from-slate-950 via-gray-800 to-slate-950 w-[100vw] overflow-x-hidden'>
      <Extra/>
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