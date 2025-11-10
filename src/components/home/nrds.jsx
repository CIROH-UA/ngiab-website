const NRDS = () => {
  return (
    <section className="bg-white py-20" id="nrds">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="section-heading">NextGen Research DataStream (NRDS)</h2>
          <h3 className="section-subheading">
            An archive of daily NextGen-based hydrologic simulations in the AWS cloud. The NextGen configuration is open-sourced and community editable, allowing any member of the hydrologic community to contribute to improving streamflow predictions.
          </h3>
        </div>

        <div className="max-w-4xl mx-auto mb-12">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Forcing Processor */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-cogs text-4xl text-primary mb-4"></i>
                <h4 className="tool-title text-xl mb-2">Forcing Processor</h4>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/CIROH-UA/forcingprocessor" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fab fa-github"></i>
                  <span>View Source Code</span>
                </a>
                <a 
                  href="https://github.com/CIROH-UA/forcingprocessor/issues/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fas fa-comment-dots"></i>
                  <span>Feedback</span>
                </a>
              </div>
            </div>

            {/* Datastream CLI */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-terminal text-4xl text-primary mb-4"></i>
                <h4 className="tool-title text-xl mb-2">Datastream CLI</h4>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/CIROH-UA/datastreamcli" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fab fa-github"></i>
                  <span>View Source Code</span>
                </a>
                <a 
                  href="https://github.com/CIROH-UA/datastreamcli/issues/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fas fa-comment-dots"></i>
                  <span>Feedback</span>
                </a>
              </div>
            </div>

            {/* NGEN-DataStream */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center mb-4">
                <i className="fas fa-stream text-4xl text-primary mb-4"></i>
                <h4 className="tool-title text-xl mb-2">NGEN-DataStream</h4>
              </div>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://github.com/CIROH-UA/ngen-datastream" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fab fa-github"></i>
                  <span>View Source Code</span>
                </a>
                <a 
                  href="https://github.com/CIROH-UA/ngen-datastream/issues/new" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="tool-link text-gray-700 hover:text-primary transition-colors duration-300 flex items-center gap-2 justify-center"
                >
                  <i className="fas fa-comment-dots"></i>
                  <span>Feedback</span>
                </a>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="bg-primary/5 rounded-lg p-8">
            <h4 className="text-2xl font-bold mb-6 text-center">Resources & Documentation</h4>
            <div className="space-y-4">

              {/* Daily Output Data */}
              <div className="flex items-start gap-4">
                <i className="fas fa-database text-primary text-xl mt-1 px-1"></i>
                <div>
                  <h5 className="font-semibold mb-1">Daily Output Data</h5>
                  <a
                    href="https://datastream.ciroh.org/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://datastream.ciroh.org/index.html
                  </a>
                </div>
              </div>

              {/* NextGen Visualizer */}
              <div className="flex items-start gap-4">
                <i className="fas fa-solid fa-location-dot text-primary text-xl mt-1 px-1"></i>
                <div>
                  <h5 className="font-semibold mb-1">NextGen Visualizer</h5>
                  <a
                    href="https://nrds.ciroh.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://nrds.ciroh.org
                  </a>
                </div>
              </div>

              {/* Contribute to NextGen Configuration */}
              <div className="flex items-start gap-4">
                <i className="fas fa-hand-holding-heart text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-semibold mb-1">Contribute to NextGen Configuration</h5>
                  <p className="text-gray-700">Find out how you can contribute to improving streamflow predictions!</p>
                  <a
                    href="https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md
                  </a>
                </div>
              </div>

              {/* Discussion Link */}
              <div className="flex items-start gap-4">
                <i className="fas fa-comments text-primary text-xl mt-1"></i>
                <div>
                  <h5 className="font-semibold mb-1">Join the Discussion</h5>
                  <p className="text-gray-700">Share ideas, ask questions, or discuss improvements with the community.</p>
                  <a
                    href="https://github.com/CIROH-UA/ngen-datastream/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://github.com/CIROH-UA/ngen-datastream/discussions
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NRDS;

