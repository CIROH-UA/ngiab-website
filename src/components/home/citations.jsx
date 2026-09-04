import React, { useState } from 'react';

const papers = [
   {
    citation:
      'Ogden, F. L., K. Jennings, E. P. Clark, et al. 2026. "The NextGen Water Resources Modeling Framework: Community Innovation at the Intersection of Hydrologic, Data and Computer Sciences." JAWRA Journal of the American Water Resources Association 62, no. 1: e70089. https://doi.org/10.1111/1752-1688.70089.',
    link: 'https://doi.org/10.1111/1752-1688.70089',
  },
  {
    citation:
      'Patel, Arpita, et al. "NextGen In A Box (NGIAB): Open-Source containerization of the NextGen framework to enable community-driven hydrology modeling." Environmental Modelling & Software (2025): 106666.',
    link: 'https://www.sciencedirect.com/science/article/pii/S1364815225003500',
  },
  {
    citation:
      'Nassar, A., Tarboton, D., Baig, F., Cunningham, J., Patel, A., Halgren, J., Lee, B., Salehabadi, H., Castronova, A., and Garousi-Nejad, I. "Accelerating community research applications of the NextGen water modeling framework through CUAHSI HydroShare linked with CIROH-2i2c JupyterHub." Environmental Modelling & Software.',
    link: 'https://www.sciencedirect.com/science/article/pii/S1364815226001787',
  },
];

const Citations = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex((current) => (current === index ? null : current)), 2000);
    } catch (error) {
      console.error('Failed to copy citation:', error);
    }
  };

  return (
    <section className="bg-gray-50 py-20" id="citations">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="section-heading">Journal Papers</h2>
          <h3 className="section-subheading max-w-3xl mx-auto">
            If you use tools from the Community NextGen Ecosystem in your research, please cite the relevant papers below.
          </h3>
        </div>

        <div className="space-y-5">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm"
            >
              <p className="text-gray-700 leading-relaxed mb-4">{paper.citation}</p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleCopy(paper.citation, index)}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-slate-50 transition-colors duration-200"
                >
                  <i className={`fas ${copiedIndex === index ? 'fa-check' : 'fa-copy'}`} />
                  {copiedIndex === index ? 'Copied!' : 'Copy Citation'}
                </button>
                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary text-white px-4 py-2 text-sm font-medium hover:bg-primary-light transition-colors duration-200"
                  >
                    View Paper
                    <i className="fas fa-arrow-up-right-from-square text-xs" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Citations;
