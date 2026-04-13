import React, { useEffect, useState } from 'react';

const STATUS_DASHBOARD_URL = 'https://ciroh-community-ngen-datastream.s3.amazonaws.com/status/dashboard.html';

const Nrds = () => {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isHoverPaused, setIsHoverPaused] = useState(false);

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

  useEffect(() => {
    if (isHoverPaused) {
      return;
    }

    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % 2);
    },5000); // Rotate every 5 seconds

    return () => clearInterval(timer);
  }, [isHoverPaused]);

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
          <h4 className="text-2xl font-semibold text-gray-900">NRDS at a Glance</h4>
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

        {/* Combined Carousel: Explore Resources and Active Datastreams */}
        <div
          className="max-w-5xl mx-auto mb-10"
          onMouseEnter={() => setIsHoverPaused(true)}
          onMouseLeave={() => setIsHoverPaused(false)}
        >
          <div className="text-center mb-4">
            <h4 className="text-2xl font-semibold text-gray-900">{carouselIndex === 0 ? 'Explore NRDS resources' : 'Active datastreams'}</h4>
          </div>

          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
            >
              <div className="w-full flex-shrink-0">
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

              <div className="w-full flex-shrink-0">
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
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setCarouselIndex((prev) => (prev - 1 + 2) % 2)}
              aria-label="Show previous slide"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-600 hover:text-[rgb(49,125,140)] hover:border-[rgb(49,125,140)] transition-colors"
            >
              <i className="fas fa-chevron-left text-xs" />
            </button>


            <button
              type="button"
              onClick={() => setCarouselIndex((prev) => (prev + 1) % 2)}
              aria-label="Show next slide"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 bg-white text-slate-600 hover:text-[rgb(49,125,140)] hover:border-[rgb(49,125,140)] transition-colors"
            >
              <i className="fas fa-chevron-right text-xs" />
            </button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8 border border-slate-200 rounded-xl p-6 bg-gradient-to-r from-slate-50 to-white">
          <h4 className="text-xl font-semibold text-gray-900 mb-3">NRDS GitHub Repositories</h4>
          <ul className="flex flex-wrap gap-3 text-gray-700">
            <li>
              <a
                href="https://github.com/CIROH-UA/forcingprocessor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-[rgb(49,125,140)] hover:bg-slate-50"
              >
                <i className="fab fa-github mr-2" />
                Forcing Processor
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CIROH-UA/datastreamcli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-[rgb(49,125,140)] hover:bg-slate-50"
              >
                <i className="fab fa-github mr-2" />
                Datastream CLI
              </a>
            </li>
            <li>
              <a
                href="https://github.com/CIROH-UA/ngen-datastream"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-[rgb(49,125,140)] hover:bg-slate-50"
              >
                <i className="fab fa-github mr-2" />
                NGEN-DataStream
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Nrds;