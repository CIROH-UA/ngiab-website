import React from 'react';

const Nrds = () => {
  return (
    <section id="nrds" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-heading">NGIAB-NRDS Ecosystem</h2>
          <h3 className="section-subheading">The NextGen Research DataStream applies NGIAB to enable open, automated, community-led simulations.</h3>
        </div>
        <div className="flex justify-center">
          <a
            href="https://ngiab.ciroh.org/#/nrds"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-4"
          >
            Learn More About NRDS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Nrds;