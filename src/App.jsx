import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Divider from './components/Divider';
import AboutUspage from './pages/AboutUspage';
import Eventpage from './pages/Eventpage';
import FandQPage from './pages/FandQpage';
import Homepage from './pages/Homepage';
import Background from './pages/Background';
import Navbar from './components/Navbar';
import Team from './pages/Team';

function App() {
  return (
    <Router>
      <div className='bg-gradient-to-b from-slate-950 via-gray-800 to-slate-950 w-[100vw] h-full overflow-x-hidden'>
        <Background/>
        <Navbar/>

        {/* Define routes to navigate between pages */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<AboutUspage />} /> */}
          <Route path="/event" element={<Eventpage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FandQPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
