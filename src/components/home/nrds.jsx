import React from 'react';

const STATUS_DASHBOARD_URL = 'https://ciroh-community-ngen-datastream.s3.amazonaws.com/status/dashboard.html';
const SCHEDULER_DASHBOARD_URL = 'https://ciroh-community-ngen-datastream.s3.amazonaws.com/status/nrds-schedule.html';

const Nrds = () => {
  const stats = [
  { value: '20', label: 'VPUs' },
  { value: '4',    label: 'Live concurrent datastreams' },
  { value: 'Daily', label: 'Forecast cadence, mirrors NWM' },
  { value: '100%', label: 'Open source' },
  ];
  const datastreams = [
  {
    badge: 'Process-based',
    badgeColor: 'bg-blue-100 text-blue-700',
    name: 'CFE + Noah-OWP-Modular + t-route',
    description: 'Full NextGen hydrology + routing, per-VPU across CONUS',
    cadence: 'Hourly / 6-hr / 240-hr',
  },
  {
    badge: 'ML',
    badgeColor: 'bg-green-100 text-green-700',
    name: 'LSTM streamflow forecasting',
    description: 'Deep learning model within the NextGen BMI framework',
    cadence: 'NWM cadence',
  },
  {
    badge: 'Routing-only',
    badgeColor: 'bg-amber-100 text-amber-700',
    name: 't-route on NWM hydrologic output',
    description: 'Consumes NWM output directly; no NextGen hydrologic sim',
    cadence: 'NWM cadence',
  },
  {
    badge: 'Forcing',
    badgeColor: 'bg-sky-100 text-sky-700',
    name: 'Forcing processor (CONUS)',
    description: 'Gridded NWM forcings → catchment-averaged NextGen inputs for all downstream streams',
    cadence: 'Daily',
  },
];
  const resources = [
    {
      href: 'https://datastream.ciroh.org/index.html',
      icon: 'fas fa-database',
      title: 'Daily Output Data',
      description: 'Access automatically generated NextGen forcings and routed outputs. Updated daily to support research workflows and operational hydrologic modeling.',
    },
    {
      href: 'https://github.com/CIROH-UA/ngen-datastream/blob/main/docs/nrds/CONTRIBUTE.md',
      icon: 'fas fa-code-branch',
      title: 'Contribute to NextGen Configuration',
      description: 'Help improve streamflow predictions by updating parameters, calibration values, or realization files. Contributions help improve our community-driven hydrologic modeling ecosystem.',
    },
    {
      href: STATUS_DASHBOARD_URL,
      icon: 'fas fa-chart-line',
      title: 'NRDS Status Dashboard',
      description: 'Live operations dashboard for daily NRDS runs, including completion tracking by forecast setup and quick visibility into below-target days.',
    },
    {
      href: SCHEDULER_DASHBOARD_URL,
      icon: 'fas fa-chart-line',
      title: 'NRDS Scheduler Dashboard',
      description: 'Live dashboard showing the status of all scheduled NRDS runs, including upcoming runs, in-progress runs, and recent runs.',
    },
    {
      href: 'https://nrds.ciroh.org',
      icon: 'fas fa-water',
      title: 'NRDS Visualizer',
      description: 'Interactive map-based interface to explore streamflow predictions and forecast performance.',
    },
    {
      href: 'https://communityhydrofabric.s3.us-east-1.amazonaws.com/index.html',
      icon: 'fas fa-project-diagram',
      title: 'Community Hydrofabric Explorer',
      description: 'Browse and visualize the community hydrofabric geospatial data and stream network.',
    },
  ];

  return (
    <section id="nrds" className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">NextGen Research DataStream (NRDS)</h2>
          <h3 className="section-subheading max-w-4xl mx-auto">
            An archive of daily NextGen-based hydrologic simulations living entirely in AWS. NRDS democratizes forcings, outputs, and configurations so the community can iterate, validate, and operationalize better streamflow predictions.
          </h3>
        </div>

        <div className="max-w-5xl mx-auto mb-10 text-center">
          <a
            href="https://hub.ciroh.org/blog/nextgen-research-datastream-april-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-[rgb(49,125,140)] shadow-sm hover:bg-slate-50"
          >
            Read the April 2026 NRDS blog
          </a>
        </div>

        {/* Stats: NRDS at a Glance section */}
        <div className="max-w-5xl mx-auto mb-4 text-center">
          <h4 className="sm:text-3xl text-2xl font-semibold text-gray-900">NRDS at a Glance</h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto mb-10">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-slate-200 rounded-xl p-6 text-center bg-white shadow-sm"
            >
              <p className="text-4xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-600 leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 mb-5" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
          <h3 className="text-center sm:text-3xl text-2xl font-semibold mb-8">NRDS Repositories</h3>
          <p className="text-center text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Use these repositories together to fetch, orchestrate, and iterate on NRDS forcing data,
            CLI-driven workflows, and long-running NextGen simulations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Forcing Processor',
                description: 'Maps NWM forcings and channel routing data onto the NextGen Hydrofabric',
                badge: 'Data Preparation',
                image: '/assets/img/tool/forcingprocessor.png',
                repo: 'https://github.com/CIROH-UA/forcingprocessor',
                issues: 'https://github.com/CIROH-UA/forcingprocessor/issues/new',
              },
              {
                title: 'Datastream CLI',
                description: 'An all-in-one tool for running reproducible NextGen simulations with NGIAB.',
                badge: 'Workflow Automation',
                image: '/assets/img/tool/datastreamcli.png',
                repo: 'https://github.com/CIROH-UA/datastreamcli',
                issues: 'https://github.com/CIROH-UA/datastreamcli/issues/new',
              },
              {
                title: 'NGEN-DataStream',
                description: 'AWS infrastructure for ForcingProcessor and DataStreamCLI, powering NRDS - NGIAB containerized hydrologic simulations to support research-to-operations.',
                badge: 'Cloud Infrastructure',
                image: '/assets/img/tool/nrds.png',
                repo: 'https://github.com/CIROH-UA/ngen-datastream',
                issues: 'https://github.com/CIROH-UA/ngen-datastream/issues/new',
              },
            ].map((tool, idx) => (
              <div
                key={idx}
                className="tool-card group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={250 + idx * 100}
              >
                <div className="tool-image-wrapper">
                  <img
                    className="tool-image"
                    src={tool.image}
                    alt={tool.title}
                  />
                  <div className="tool-overlay"></div>
                  <div className="tool-badge">{tool.badge}</div>
                </div>
                <div className="tool-content">
                  <h4 className="tool-title">{tool.title}</h4>
                  <p className="tool-description">{tool.description}</p>
                </div>
                <div className="tool-links">
                  <a
                    href={tool.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-link"
                  >
                    <i className="fab fa-github" />
                    <span>View Source Code</span>
                  </a>
                  <a
                    href={tool.issues}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tool-link"
                  >
                    <i className="fas fa-comment-dots" />
                    <span>Feedback</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-10 mt-10">
          <div className="text-center mb-4">
            <h4 className="sm:text-3xl text-2xl font-semibold text-gray-900">Explore NRDS resources</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[rgb(49,125,140)] text-white shrink-0">
                    <i className={`${resource.icon} text-lg`} />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-[rgb(49,125,140)] transition-colors">
                    {resource.title}
                  </h4>
                </div>
                <p className="text-gray-600">{resource.description}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-10">
          <div className="text-center mb-4">
            <h4 className="sm:text-3xl text-2xl font-semibold text-gray-900">Active datastreams</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {datastreams.map((ds) => (
              <div
                key={ds.name}
                className="group border border-slate-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium w-fit ${ds.badgeColor}`}>
                    {ds.badge}
                  </span>
                  <span className="text-xs text-gray-500 border border-slate-200 rounded-full px-2 py-1">{ds.cadence}</span>
                </div>
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{ds.name}</h5>
                <p className="text-gray-600">{ds.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Nrds;