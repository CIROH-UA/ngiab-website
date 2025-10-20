import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RedirSurvey from './pages/RedirSurvey';

const App = () => {
  const baseUrl = process.env.VITE_BASE_URL || '/ngiab-website-staging/';
  return (
    <Router basename={baseUrl}>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scimeet25survey" element={<RedirSurvey />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
    </Router>
  );
};

export default App;