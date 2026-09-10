import React, { useRef, useEffect } from 'react';
import 'aos/dist/aos.css';

const nrdsContributions = [
    {
        href: 'https://github.com/CIROH-UA/ngen-datastream/tree/main/docs/nrds/contribute/README.md',
        icon: 'fas fa-code-branch',
        title: 'Contribute to NRDS Configuration',
        description: 'Help improve NRDS by updating parameters, calibration values, or realization files used in daily NextGen simulations.',
    },
    {
        href: 'https://github.com/CIROH-UA/forcingprocessor/issues/new?template=forcing_contribution.yml',
        icon: 'fas fa-cloud-rain',
        title: 'Contribute Forcing Configuration',
        description: 'Submit new or updated forcing data configurations through the Forcing Processor contribution template.',
    },
    {
        href: 'https://github.com/CIROH-UA/datastreamcli/issues/new?template=metadata_request.yml',
        icon: 'fas fa-database',
        title: 'Request Metadata Update',
        description: 'Request additions or changes to DataStream CLI metadata through the metadata request template.',
    },
];

const Contribute = () => {
    return (
        <section className="bg-blue-50 py-20" id="contribute">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center mb-16" data-aos="fade-up" data-aos-duration="800">
                    <h2 className="section-heading">Contribute</h2>
                    <h3 className="section-subheading">Ways community can contribute to NGIAB</h3>
                </div>

                {/* Contribute Models Section */}
                <div className="bg-white rounded-3xl shadow-2xl p-10 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className="text-center mb-12 relative">
                        <h3 className="text-3xl font-bold text-primary mb-5">Contribute Model to NGIAB</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Submit BMI-compliant models integration request through our model integration issue form.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto relative">

                        {/* CTA Button */}
                        <div className="text-center mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                            <a href="https://github.com/CIROH-UA/NGIAB-CloudInfra/issues/new?template=model_integration_request.md" 
                               className="inline-flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                               target="_blank" 
                               rel="noopener noreferrer">
                                <span>Submit Model Integration Request</span>
                                <i className="fas fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Contribute to NRDS Section */}
                <div className="mt-12" data-aos="fade-up" data-aos-duration="800">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">Contribute to NRDS</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                            Ways to contribute forcing data, configuration, and metadata to the NextGen Research DataStream.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {nrdsContributions.map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block border border-slate-200 rounded-xl p-6 bg-white shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-white shrink-0">
                                        <i className={`${item.icon} text-lg`} />
                                    </div>
                                    <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                                <p className="text-gray-600">{item.description}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contribute;