import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import RedirSurvey from './pages/RedirSurvey';
import { config } from './config/environment';

const App = () => {
  return (
    <Router basename={config.routerBasename}>
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