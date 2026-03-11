import React, { useState } from 'react';

const ways = [
  {
    id: 'cloud',
    category: 'direct',
    label: 'Cloud (NGIAB-CloudInfra)',
    title: 'Run NGIAB in the Cloud',
    description:
      'Deploy NGIAB to cloud infrastructure (e.g., AWS) and run NextGen directly in a scalable, containerized environment. You configure and manage model inputs yourself.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
  },
  {
    id: 'hpc',
    category: 'direct',
    label: 'HPC (NGIAB-HPCInfra)',
    title: 'Run NGIAB on HPC',
    description:
      'Run large-scale NextGen simulations on HPC clusters.',
    link: 'https://github.com/CIROH-UA/ngiab-hpcinfra?tab=readme-ov-file#prerequisites',
  },
  {
    id: 'local-docker',
    category: 'direct',
    label: 'Local Docker',
    title: 'Run NGIAB on Your Laptop',
    description:
      'Run NextGen simulations locally on your own laptop or workstation using Docker.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
  },
  {
    id: 'platform',
    category: 'direct',
    label: 'CIROH JupyterHub',
    title: 'Run NGIAB from CIROH JupyterHub',
    description:
      'Run NGIAB interactively in Jupyter notebooks through CIROH JupyterHub.',
    link: 'https://www.hydroshare.org/resource/27045581bdea4808a393330f2417379c/',
  },
  {
    id: 'datastreamcli',
    category: 'workflow',
    label: 'DataStreamCLI',
    title: 'Run NGIAB using DataStreamCLI',
    description:
      'Use the DataStreamCLI workflow tool to automatically fetch data, build NGIAB inputs, and execute NextGen with a single command.',
    link: 'https://github.com/CIROH-UA/datastreamcli?tab=readme-ov-file#run-datastreamcli',
  },
  {
    id: 'preprocess',
    category: 'workflow',
    label: 'NGIAB Preprocess',
    title: 'Run NGIAB using NGIAB Preprocess',
    description:
      'Use the NGIAB Preprocess to generate standardized forcing files for NGIAB runs and execute NextGen with a single command.',
    link: 'https://github.com/CIROH-UA/NGIAB_data_preprocess/?tab=readme-ov-file#cli-documentation',
  },
];

const RunWays = () => {
  const workflowWays = ways.filter((w) => w.category === 'workflow');
  const directWays = ways.filter((w) => w.category === 'direct');

  const [activeTop, setActiveTop] = useState('workflow'); // 'workflow' | 'direct'
  const [activeId, setActiveId] = useState(workflowWays[0]?.id ?? ways[0].id);

  const active = ways.find((w) => w.id === activeId) ?? ways[0];

  const handleTopChange = (section) => {
    setActiveTop(section);
    const group = section === 'workflow' ? workflowWays : directWays;
    if (!group.find((w) => w.id === activeId) && group[0]) {
      setActiveId(group[0].id);
    }
  };

  const renderTabsAndContent = (groupWays, groupIntro) => {
    return (
      <div className="mt-4 space-y-6">
        <p className="section-subheading  text-center text-gray-300">{groupIntro}</p>

        <div className="flex flex-wrap justify-center gap-2">
          {groupWays.map((way) => {
            const isActive = way.id === activeId;
            return (
              <button
                key={way.id}
                type="button"
                onClick={() => setActiveId(way.id)}
                className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 ease-in-out ${
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

        <div className="mt-4 grid md:grid-cols-2 gap-8 items-start text-center">
          <div className="md:col-span-2">
            <h3 className="text-3xl font-semibold mb-3 text-white">
              {active.title}
            </h3>
            <p className="section-subheading text-gray-300 mb-4">
              {active.description}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="max-w-md bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-5 shadow-sm mx-auto">
              <h4 className="text-xl font-semibold text-white mb-2">
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
                className="inline-flex items-center justify-center w-full px-4 py-2 text-lg font-medium text-white bg-[rgb(49,125,140)] hover:bg-[rgb(39,105,118)] rounded-md transition-colors duration-200"
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
    );
  };

  return (
    <section className="bg-gray-900" id="run-ways">
      <div className="py-16 px-4 mx-auto  text-left lg:py-20 lg:px-6">
        <div className="mb-6 text-center">
          <h2 className="section-heading text-white">
            Ways to run NGIAB
          </h2>
    
        </div>

        {/* Top-level tabs: workflow vs direct */}
        <div className="mb-6 flex justify-center gap-2">
          <button
            type="button"
            onClick={() => handleTopChange('workflow')}
            className={`px-4 py-2 rounded-full text-2xl font-medium transition-all duration-300 ${
              activeTop === 'workflow'
                ? 'bg-[#317D8C] text-white shadow'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Workflow tools
          </button>
          <button
            type="button"
            onClick={() => handleTopChange('direct')}
            className={`px-4 py-2 rounded-full text-2xl font-medium transition-all duration-300 ${
              activeTop === 'direct'
                ? 'bg-[#317D8C] text-white shadow'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            Run NGIAB directly
          </button>
        </div>

        {/* Second-level tabs + content */}
        {activeTop === 'workflow'
          ? renderTabsAndContent(
              workflowWays,
              'Use these workflow tools when you want automated complete workflow from preprocessing input data to running NextGen simulations.'
            )
          : renderTabsAndContent(
              directWays,
              'When you use these options, you are responsible for preparing inputs and running NextGen simulations.'
            )}
      </div>
    </section>
  );
};

export default RunWays;

