import React, { useEffect } from 'react';
import Team from '../components/home/team';
import Impact from '../components/home/impact';
import Documentation from '../components/home/documentation';
import Demo from '../components/home/ngiab-demo';
import About from '../components/home/about';
import Hero from '../components/home/hero';
import Tools from '../components/home/tools';
import RunWays from '../components/home/run-ways';
import Partner from '../components/home/partner';
import Contact from '../components/home/contact';
import Blog from '../components/home/blog';
import Nrds from '../components/home/nrds';
import VideoTestimonial from '../components/home/VideoTestimonial';
import Contribute from '../components/home/contribute';

const Home = () => {
  useEffect(() => {
    const scrollToSectionFromHash = () => {
      const hash = window.location.hash || '';
      const match = hash.match(/#\/#([^/?#]+)/);

      if (!match) {
        return;
      }

      const sectionId = decodeURIComponent(match[1]);
      // delay slightly so sections are present after route render.
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 0);
    };

    scrollToSectionFromHash();
    window.addEventListener('hashchange', scrollToSectionFromHash);

    return () => {
      window.removeEventListener('hashchange', scrollToSectionFromHash);
    };
  }, []);


  return (
    <div>
      {/* Hero Section (Landing page with the water video background) */}
      <Hero />

      {/* About Section */}
      <About />
      
      
      {/* Tools Section (Six tools linked to their respective repositories) */}
      <Tools />

      {/* NRDS Section */}
      <Nrds />

      {/* Five Ways to Run NGIAB (tabbed to save vertical space) */}
      <RunWays />

      {/* Documentation & Resources Section (has DocuHub and NGIAB 101 training module) */}
      <Documentation />
      
      {/* NGIAB Demo Section (5 minute walkthrough video) */}
      <Demo />

      {/* Contribute Section (How to contribute to NGIAB) */}
      <Contribute />

      {/* Docker Pull Counter Section (gives real time Docker pull count using Vercel api) */}
      <Impact />

      {/* Blog Section */}
      <Blog />
      
      {/* Community Spotlight: Video Testimonial */}
      <VideoTestimonial />

      {/* Our Team Section with images */}
      <Team />

      {/* Partners Logo Carousel */}
      <Partner />

      {/* Contact + Resources Section */}
      <Contact />

    </div>
  );
};

export default Home; 