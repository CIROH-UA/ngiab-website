const NRDS = () => {
  return (
    <section
      id="nrds"
      className="relative overflow-hidden py-24 bg-gradient-to-br from-[#031426] via-[#052844] to-[#084d70] text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-10 w-72 h-72 bg-teal-500/20 blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-primary/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-300/10 blur-[150px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto" data-aos="fade-up" data-aos-duration="800">
          <p className="uppercase tracking-[0.3em] text-sm text-white/60 mb-4">NRDS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">NextGen Research DataStream</h2>
          <p className="text-lg md:text-xl text-white/80 leading-relaxed">
            An archive of daily NextGen-based hydrologic simulations living entirely in AWS.
            NRDS democratizes forcings, outputs, and configurations so the community can iterate,
            validate, and operationalize better streamflow predictions.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="https://datastream.ciroh.org/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-3 bg-white text-primary hover:bg-white/90"
            >
              Explore NRDS
            </a>
            <a
              href="https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-3 border border-white/50 bg-transparent hover:bg-white/10"
            >
              Contribute Configurations
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="150">
          {[
            {
              label: 'Daily Archive',
              value: 'Automated',
              description: 'Automated generation of NextGen forcings and simulations in AWS',
            },
            {
              label: 'Open Configuration',
              value: 'Community-led',
              description: 'Help improve streamflow predictions by updating our realization files',
            },
            {
              label: 'Cloud Native',
              value: 'AWS & S3',
              description: 'CLI tooling + IaC templates for end-to-end automation',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <p className="text-sm uppercase tracking-widest text-white/60 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold mb-2">{stat.value}</p>
              <p className="text-white/75 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <h3 className="text-center text-3xl font-semibold mb-8">NRDS Repositories</h3>
          <p className="text-center text-white/75 max-w-3xl mx-auto mb-12">
            Use these repositories together to fetch, orchestrate, and iterate on NRDS forcing data,
            CLI-driven workflows, and long-running NextGen simulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Forcing Processor',
                description: 'Transform and standardize meteorologic forcings for NextGen.',
                image: 'assets/img/tool/forcingprocessor.png',
                repo: 'https://github.com/CIROH-UA/forcingprocessor',
                issues: 'https://github.com/CIROH-UA/forcingprocessor/issues/new',
              },
              {
                title: 'Datastream CLI',
                description: 'A standalone CLI that orchestrates NRDS workflows end-to-end.',
                image: 'assets/img/tool/datastreamcli.png',
                repo: 'https://github.com/CIROH-UA/datastreamcli',
                issues: 'https://github.com/CIROH-UA/datastreamcli/issues/new',
              },
              {
                title: 'NGEN-DataStream',
                description: 'Daily NextGen simulations in AWS with community configs.',
                image: 'assets/img/tool/nrds.png',
                repo: 'https://github.com/CIROH-UA/ngen-datastream',
                issues: 'https://github.com/CIROH-UA/ngen-datastream/issues/new',
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={250 + idx * 100}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={tool.image}
                    alt={tool.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-3">{tool.title}</h4>
                  <p className="text-gray-700 mb-6">{tool.description}</p>
                  <div className="flex flex-col gap-3">
                    <a
                      href={tool.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-link text-gray-700 hover:text-primary"
                    >
                      <i className="fab fa-github" />
                      <span>View Source Code</span>
                    </a>
                    <a
                      href={tool.issues}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tool-link text-gray-700 hover:text-primary"
                    >
                      <i className="fas fa-comment-dots" />
                      <span>Feedback</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="mt-16 bg-white/10 border border-white/10 rounded-2xl p-8 backdrop-blur-sm"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <h4 className="text-2xl font-bold mb-6 text-center">Resources & Documentation</h4>
          <div className="space-y-6 text-white/80">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <i className="fas fa-database text-2xl text-teal-400 mt-1" />
              <div className="ml-3">
                <h5 className="font-semibold text-white mb-1">Daily Output Data</h5>
                <a
                  href="https://datastream.ciroh.org/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline break-all"
                >
                  https://datastream.ciroh.org/index.html
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <i className="fas fa-location-dot text-2xl text-teal-400 mt-1" />
              <div className="ml-3">
                <h5 className="font-semibold text-white mb-1">NextGen Visualizer</h5>
                <a
                  href="https://nrds.ciroh.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline break-all"
                >
                  https://nrds.ciroh.org
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <i className="fas fa-hand-holding-heart text-2xl text-teal-400 mt-1" />
              <div className="ml-1">
                <h5 className="font-semibold text-white mb-1">Contribute to NextGen Configuration</h5>
                <p>Help improve streamflow predictions by editing community configs.</p>
                <a
                  href="https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline break-all"
                >
                  https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <i className="fas fa-comments text-2xl text-teal-400 mt-1" />
              <div>
                <h5 className="font-semibold text-white mb-1">Join the Discussion</h5>
                <p>Share ideas, ask questions, or collaborate with the NRDS community.</p>
                <a
                  href="https://github.com/CIROH-UA/ngen-datastream/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:underline break-all"
                >
                  https://github.com/CIROH-UA/ngen-datastream/discussions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NRDS;
