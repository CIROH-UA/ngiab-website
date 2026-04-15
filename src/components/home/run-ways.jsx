import { useState } from 'react';

const runWaysTabs = [
   {
    id: 'local-cloud',
    label: 'Local and Cloud',
    title: 'Run NGIAB locally or in the cloud',
    description:
      'Use the NGIAB-CloudInfra or DataStreamCLI workflows to run NextGen in no time. Both can be run locally or in the cloud, such as via AWS EC2. Follow the NGIAB 101 training for CloudInfra or the README for DataStreamCLI to get started.',
    resources: [
      {
        cta: 'NGIAB 101 Training',
        link: 'https://ngiab.ciroh.org/training-NGIAB-101/installation.html',
      },
      {
        cta: 'DataStreamCLI README',
        link: 'https://hub.ciroh.org/docs/products/research-datastream/datastreamcli/',
      },
    ],
  },
  {
    id: 'jupyterhub',
    label: 'CIROH-2i2c JupyterHub',
    title: 'Run NextGen with Community NextGen Hub image (CCNH)',
    description:
      'Run NextGen interactively in Jupyter notebooks through CIROH-2i2c JupyterHub. Select the CIROH Community NextGen Hub image to set up the environment for running NextGen. The linked HydroShare resource includes example notebooks and instructions. Use the “Open with” button on HydroShare to launch the notebooks directly into CIROH-2i2c JupyterHub.',
    resources: [
      {
         cta: 'NextGen on CIROH-2i2c JupyterHub Tutorial',
         link: 'https://hub.ciroh.org/docs/products/ngiab/distributions/nextgen-2i2c/',
      },
      {
        cta: 'CCNH Notebooks and Scripts on HydroShare',
        link: 'https://www.hydroshare.org/resource/27045581bdea4808a393330f2417379c/',
      },
    ],
  },
  {
    id: 'hpc',
    label: 'HPC',
    title: 'Run NGIAB on HPC',
    description:
      'Run large-scale NextGen simulations on HPC clusters. This approach uses a Singularity image to simplify environment setup. Follow the README to configure the environment and execute NGIAB on supported HPC clusters. Use HPC environments for larger NextGen simulations while following NGIAB onboarding guidance for setup and execution practices.',
    resources: [
      {
        cta: 'NGIAB-HPCInfra README',
        link: 'https://hub.ciroh.org/docs/products/ngiab/distributions/ngiab-singularity/',
      },
    ],
  },
];

const RunWays = () => {
  const [activeId, setActiveId] = useState(runWaysTabs[0].id);
  const active = runWaysTabs.find((way) => way.id === activeId) ?? runWaysTabs[0];

  return (
    <section className="bg-gray-900" id="run-ways">
      <div className="py-16 px-4 mx-auto  text-left lg:py-20 lg:px-6">
        <div className="mb-6 text-center">
          <h2 className="section-heading text-white">
            Ways to run NGIAB
          </h2>
    
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-2">
          {runWaysTabs.map((way) => {
            const isActive = way.id === activeId;
            return (
              <button
                key={way.id}
                type="button"
                role="tab"
                onClick={() => setActiveId(way.id)}
                className={`px-4 py-2 rounded-full text-2xl font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#317D8C] text-white shadow'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {way.label}
              </button>
            );
          })}
        </div>

        <div className="mt-4 space-y-6">
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
                <div className="space-y-3">
                  {active.resources.map((resource) => (
                    <a
                      key={resource.cta}
                      href={resource.link}
                      target={resource.link.startsWith('http') ? '_blank' : undefined}
                      rel={resource.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center justify-center w-full px-4 py-2 text-lg font-medium text-white bg-[rgb(49,125,140)] hover:bg-[rgb(39,105,118)] rounded-md transition-colors duration-200"
                    >
                      {resource.cta}
                      <span className="ml-2">
                        <i className="fas fa-arrow-right" />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunWays;

