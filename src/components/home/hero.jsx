import waterVideo from "/assets/video/water-video.mp4";
import AOS from 'aos';
import { HashLink } from 'react-router-hash-link';
import { useRef, useEffect } from 'react';
import { motion } from "motion/react";
import UnderlineToBackground from "../fancy/text/underline-to-background";
const Hero = () => {
    const videoRef = useRef(null);
    
      useEffect(() => {
        // Initialize AOS
        AOS.init({
          duration: 800,
          once: true,
          offset: 120,
          easing: 'ease-out',
        });
    
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Video autoplay failed:", error);
          });
        }
    
      }, []);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, staggerChildren: 0.1, delayChildren: 0.8 },
    },
  }

  const wordVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const words = "🎉Our NGIAB journal paper has been published in Environmental Modelling and Software.".split(" ")

  return (
       <header className="relative h-screen flex flex-col items-center justify-center text-white" data-aos="fade-down" data-aos-duration="1000" id="hero">
              <video 
                ref={videoRef}
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src={waterVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Paper Announcement */}
              <div className="absolute top-16 2xl:top-20 left-0 right-0 z-20">
                <div className="container mx-auto px-4">
                  <motion.div
                    className="bg-black/40 backdrop-blur-md rounded-lg p-4 max-w-4xl mx-auto border border-white/20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <motion.p
                      className="text-white text-sm md:text-base text-center"
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariants}
                    >
                      {words.map((word, index) => (
                        <motion.span
                          key={index}
                          variants={wordVariants}
                          className="inline-block mr-1"
                        >
                          {word}
                        </motion.span>
                      ))}
                      <motion.span variants={wordVariants} className="inline-block">
                        <UnderlineToBackground
                          targetTextColor="white"
                          className="text-white [&>div]:bg-[rgb(49,125,140)]"
                          as="a"
                          href="https://www.sciencedirect.com/science/article/pii/S1364815225003500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                         Read here!
                        </UnderlineToBackground>
                      </motion.span>
                    </motion.p>
                  </motion.div>
                </div>
              </div>

              <div className="container mx-auto px-4 text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
                <div className="flex flex-col items-center justify-center space-y-12">
                  <img 
                    src="assets/img/logos/ciroh_dark.png" 
                    alt="CIROH Logo" 
                    className="w-48 md:w-56 mb-4 transform transition-all duration-700 hover:scale-110"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  />
                  <h1 className="text-7xl font-bold uppercase mb-6" data-aos="fade-up" data-aos-delay="400">NextGen In A Box</h1>
                  <p className="text-4xl mb-12" data-aos="fade-up" data-aos-delay="600">Transforming Hydrology Modeling using open-source technologies</p>
                  <div className="space-x-6" data-aos="fade-up" data-aos-delay="800">
                    <HashLink 
                      smooth 
                      to="/#tool" 
                      className="btn-primary text-xl px-12 py-4"
                    >
                      Our Tools
                    </HashLink>
                    <a 
                      className="btn-primary text-xl px-12 py-4" 
                      href="http://docs.ciroh.org/training-NGIAB-101/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Getting started
                    </a>
                  </div>
                </div>
              </div>
            </header>
  );
};

export default Hero;
