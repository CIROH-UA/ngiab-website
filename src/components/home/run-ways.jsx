import React, { useState } from 'react';

const ways = [
  {
    id: 'docker',
    category: 'direct',
    label: 'Docker (NGIAB-CloudInfra)',
    title: 'Run NGIAB locally or in the Cloud with Docker',
    description:
      'Run NGIAB using Docker on your local machine or in the AWS EC2 instances. This approach uses a Docker image to simplify environment setup and ensure reproducibility. Use NGIAB CloudInfra and the NGIAB 101 training materials to get started.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
    learnMoreCta: 'NGIAB 101 Training',
  },
  {
    id: 'hpc',
    category: 'direct',
    label: 'HPC (NGIAB-HPCInfra)',
    title: 'Run NGIAB on HPC',
    description:
      'Run large-scale NextGen simulations on HPC clusters. This approach uses a Singularity image to simplify environment setup. Follow the README to configure the environment and execute NGIAB on supported HPC clusters.',
    link: 'https://github.com/CIROH-UA/ngiab-hpcinfra?tab=readme-ov-file#prerequisites',
    learnMoreCta: 'NGIAB-HPCInfra README',
  },

  {
    id: 'platform',
    category: 'direct',
    label: 'CIROH-2i2c JupyterHub',
    title: 'Run NGIAB from CIROH-2i2c JupyterHub',
    description:
      'Run NGIAB interactively in Jupyter notebooks through CIROH-2i2c JupyterHub. Select the CIROH Community NextGen Hub image to set up the environment for running NGIAB.  The linked HydroShare resource includes example notebooks and instructions. Use the “Open with” button on HydroShare to launch the notebooks directly in CIROH-2i2c JupyterHub.',
    link: 'https://www.hydroshare.org/resource/27045581bdea4808a393330f2417379c/',
    learnMoreCta: 'Open HydroShare Resource',
  },
  {
    id: 'datastreamcli',
    category: 'workflow',
    label: 'DataStreamCLI',
    title: 'Run NGIAB using DataStreamCLI',
    description:
      'DataStreamCLI is a stand alone tool that automates the complete workflow from preprocessing input data for NextGen to execution of the NextGen simulation through NextGen In a Box (NGIAB). DataStreamCLI serves as the workflow tooling for the NextGen Research DataStream. This software allows users to run NextGen in an efficient, relatively painless, and reproducible fashion while providing flexibility and integrations like forcingprocessor, hfsubset, NextGen In A Box, and TEEHR.',
    link: 'https://github.com/CIROH-UA/datastreamcli?tab=readme-ov-file#run-datastreamcli',
    learnMoreCta: 'DataStreamCLI README',
  },
  {
    id: 'preprocess',
    category: 'workflow',
    label: 'NGIAB Preprocess',
    title: 'Run NGIAB using NGIAB Data Preprocess',
    description:
      'NGIAB Data Preprocess is a tool to generate standardized forcing files for NGIAB runs and to execute NextGen with a single command. The --run argument allows users to automatically run NGIAB using the generated outputs, simplifying local or cloud-based execution workflows.',
    link: 'https://github.com/CIROH-UA/NGIAB_data_preprocess/?tab=readme-ov-file#cli-documentation',
    learnMoreCta: 'NGIAB Data Preprocess README',
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
        <p className="section-subheading  max-w-7xl mx-auto text-center text-gray-300">{groupIntro}</p>

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
            <p className="max-w-4xl text-center mx-auto text-xl text-gray-300 mb-4">
              {active.description}
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="max-w-md bg-gray-800 border border-gray-700 rounded-lg p-4 md:p-5 shadow-sm mx-auto">
              <h4 className="text-xl font-semibold text-white mb-2">
                Learn more
              </h4>
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
                {active.learnMoreCta ?? 'Open resource'}
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
              'Use these workflow tools when you want automated complete workflow from preprocessing input data to running NextGen simulations. Both datastreamcli and NGIAB preprocess run on the machine where they are installed. While they both can be run on AWS EC2 instances, neither tool alone has the ability to be interfaced with locally and perform the compute in the cloud'
            )
          : renderTabsAndContent(
              directWays,
              'Use these options to run NGIAB directly in the cloud, on HPC clusters, or on your own local machine. Unlike workflow tools, these approaches do not automate data preprocessing or orchestration. Users are responsible for preparing input data and manually running NextGen simulations  using guide script.'
            )}
      </div>
    </section>
  );
};

export default RunWays;

