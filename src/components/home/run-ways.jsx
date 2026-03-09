import React, { useState } from 'react';

const ways = [
  {
    id: 'cloud',
    label: 'Cloud (NGIAB-CloudInfra)',
    title: 'Run NGIAB in the Cloud',
    description:
      'Use NGIAB-CloudInfra to deploy NextGen on your cloud infrastructure with reproducible, containerized workflows.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
  },
  {
    id: 'hpc',
    label: 'HPC (NGIAB-HPCInfra)',
    title: 'Run NGIAB on HPC',
    description:
      'Run large-scale NextGen simulations on HPC clusters.',
    link: 'https://github.com/CIROH-UA/ngiab-hpcinfra?tab=readme-ov-file#prerequisites',
  },
  {
    id: 'local-docker',
    label: 'Local Docker',
    title: 'Run NGIAB on Your Laptop',
    description:
      'Run NextGen simulations locally on your own laptop or workstation using Docker.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
  },
  {
    id: 'platform',
    label: 'CIROH JupyterHub',
    title: 'Run NGIAB from CIROH JupyterHub',
    description:
      'Run NGIAB interactively in Jupyter notebooks through CIROH JupyterHub.',
    link: 'https://www.hydroshare.org/resource/27045581bdea4808a393330f2417379c/',
  },
  {
    id: 'nrds',
    label: 'DataStreamCLI',
    title: 'Run NGIAB using DataStreamCLI',
    description:
      'Use the DataStreamCLI to execute NextGen simulations with a single CLI command.',
    link: 'https://github.com/CIROH-UA/datastreamcli?tab=readme-ov-file#run-datastreamcli',
  },
];

const RunWays = () => {
  const [activeId, setActiveId] = useState(ways[0].id);
  const active = ways.find((w) => w.id === activeId) ?? ways[0];

  return (
    <section className="bg-gray-900" id="run-ways">
      <div className="py-16 px-4 mx-auto max-w-screen-xl text-center lg:py-20 lg:px-6">
        <div className="mx-auto mb-10 max-w-screen-md">
          <h2 className="section-heading text-white">
            Five ways to run NGIAB
          </h2>
          <p className="section-subheading text-gray-400">
            Choose the deployment path that matches your compute environment, from running on your laptop to running on HPC clusters.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {ways.map((way) => {
              const isActive = way.id === activeId;
              return (
                <button
                  key={way.id}
                  type="button"
                  onClick={() => setActiveId(way.id)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all duration-300 ease-in-out ${
                    isActive
                      ? 'bg-[#317D8C] text-white transform scale-105'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {way.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active tab content */}
        <div className="mt-4 grid md:grid-cols-2 gap-8 items-start text-center">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold mb-3 text-white">
              {active.title}
            </h3>
            <p className="text-xl text-gray-300 mb-4">{active.description}</p>
          </div>
          <div className="md:col-span-2">
            <div className="max-w-md mx-auto bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-5 shadow-sm text-center">
              <h4 className="text-2xl font-bold text-white mb-2">
                Learn more
              </h4>
              <p className="text-lg text-gray-300 mb-4">
                Explore documentation, examples, and source code for this way of
                running NGIAB.
              </p>
              <a
                href={active.link}
                target={active.link.startsWith('http') ? '_blank' : undefined}
                rel={
                  active.link.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="inline-flex items-center justify-center w-full px-4 py-2 text-md font-medium text-white bg-[rgb(49,125,140)] hover:bg-[rgb(39,105,118)] rounded-md transition-colors duration-200"
              >
                Open resource
                <span className="ml-2">
                  <i className="fas fa-arrow-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunWays;

