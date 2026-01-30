import React, { useRef, useEffect } from 'react';
import 'aos/dist/aos.css';

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
            </div>
        </section>
    );
};

export default Contribute;