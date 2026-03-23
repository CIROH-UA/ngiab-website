import React, { useState } from 'react';

const ways = [
  {
    id: 'cloud',
    category: 'direct',
    label: 'Cloud (NGIAB-CloudInfra)',
    title: 'Run NGIAB in the Cloud',
    description:
      'Run NGIAB on AWS EC2 instances or other cloud compute environments. Use NGIAB 101 to set up the environment and run NGIAB in the cloud.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
    learnMoreCta: 'NGIAB 101 Training',
  },
  {
    id: 'hpc',
    category: 'direct',
    label: 'HPC (NGIAB-HPCInfra)',
    title: 'Run NGIAB on HPC',
    description:
      'Run large-scale NextGen simulations on HPC clusters. Uses singularity image to simplify environment setup. Follow the readme guide to set up the environment and run NGIAB on HPC.',
    link: 'https://github.com/CIROH-UA/ngiab-hpcinfra?tab=readme-ov-file#prerequisites',
    learnMoreCta: 'NGIAB-HPCInfra README',
  },
  {
    id: 'local-docker',
    category: 'direct',
    label: 'Local Docker',
    title: 'Run NGIAB on Your Laptop',
    description:
      'Run NextGen simulations locally on your own laptop or workstation using Docker. Good for local testing and development purpose. Use NGIAB 101 to set up the environment and run NGIAB on your local machine.',
    link: 'https://docs.ciroh.org/training-NGIAB-101/installation.html',
    learnMoreCta: 'NGIAB 101 Training',
  },
  {
    id: 'platform',
    category: 'direct',
    label: 'CIROH JupyterHub',
    title: 'Run NGIAB from CIROH JupyterHub',
    description:
      'Run NGIAB interactively in Jupyter notebooks through CIROH JupyterHub. Select the CIROH Community NextGen Hub Image in CIROH JupyterHub to set up the environment for running NGIAB. Click the link below to access the HydroShare resource with example notebooks and instructions for running NGIAB on CIROH JupyterHub. You can click on "Open with" button in the HydroShare page to open the notebooks directly in CIROH JupyterHub.',
    link: 'https://www.hydroshare.org/resource/27045581bdea4808a393330f2417379c/',
    learnMoreCta: 'Open HydroShare Resource',
  },
  {
    id: 'datastreamcli',
    category: 'workflow',
    label: 'DataStreamCLI',
    title: 'Run NGIAB using DataStreamCLI',
    description:
      'NGEN-datastream orchestration infrastructure can be deployed in AWS cloud and then a user can use a local interface (AWS CLI) to issue executions in AWS. The ngen-datastream repo contains forcingprocessor and datastreamcli executions in the datastream, but could be used for direct NGIAB executions as well.',
    link: 'https://github.com/CIROH-UA/datastreamcli?tab=readme-ov-file#run-datastreamcli',
    learnMoreCta: 'DataStreamCLI README',
  },
  {
    id: 'preprocess',
    category: 'workflow',
    label: 'NGIAB Preprocess',
    title: 'Run NGIAB using NGIAB Data Preprocess',
    description:
      'Use NGIAB Data Preprocess to generate standardized forcing files for NGIAB runs and execute NextGen with a single command. Use --run argument to automatically run NGIAB against the output foler.',
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
              'Use these options to run NGIAB in cloud, HPC, or your own laptop. Unlike workflow tools, these options do not automate data preprocessing or execution, so you must prepare inputs and run NextGen simulations manually (using guide script).'
            )}
      </div>
    </section>
  );
};

export default RunWays;

