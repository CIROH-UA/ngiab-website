import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Nrds from './pages/Nrds';
import RedirSurvey from './pages/RedirSurvey';

const App = () => {
  return (
    <Router basename={import.meta.env.VITE_BASE_URL || '/'}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scimeet25survey" element={<RedirSurvey />} />
            <Route path="/nrds" element={<Nrds />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;