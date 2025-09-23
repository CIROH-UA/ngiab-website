const Contact = () => {
  return(
         <section className="bg-gray-900 text-white py-20" id="contact">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="text-center">
                    <h2 className="section-heading text-white">Find out more</h2>
                    <h3 className="section-subheading text-gray-300">Join our community and start your journey with NextGen In A Box</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl mx-auto">
                    {/* Resource Section */}
                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                                <i className="fas fa-book text-2xl"></i>
                            </div>
                            <h3 className="tool-title ml-4">Learning Resources</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Learn about the NGIAB platform on DocuHub
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://docs.ciroh.org/docs/products/Community%20Hydrologic%20Modeling%20Framework/ngiabOfficeHours" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Join the NextGen Community Office Hours
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-check-circle text-primary mr-3"></i>
                                <a href="https://github.com/CIROH-UA/NGIAB-CloudInfra" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Explore our NGIAB-CloudInfra GitHub repository
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us Section */}
                    <div className="bg-gray-800 rounded-lg p-8 shadow-lg transform transition duration-300 hover:scale-105">
                        <div className="flex items-center mb-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white">
                                <i className="fas fa-envelope text-2xl"></i>
                            </div>
                            <h3 className="tool-title ml-4">Get in Touch</h3>
                        </div>
                        <ul className="space-y-4">
                            <li className="flex items-center">
                                <i className="fas fa-question-circle text-primary mr-3"></i>
                                <a href="/feedback" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Feedback: ngiab.ciroh.org/feedback
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fas fa-envelope text-primary mr-3"></i>
                                <a href="mailto:ciroh-it-support@ua.edu" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Email: ciroh-it-admin@ua.edu
                                </a>
                            </li>
                            <li className="flex items-center">
                                <i className="fab fa-slack text-primary mr-3"></i>
                                <a href="https://cirohworkspace.slack.com/archives/C05GL89GWUC" className="text-gray-300 hover:text-primary transition duration-300 tool-link" target="_blank" rel="noopener noreferrer">
                                    Slack: #ngen-help-2023-2024-2025
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div> 

                <div className="mt-16 text-center">
                    <div className="inline-block bg-gray-800 rounded-lg px-8 py-6 max-w-5xl">
                        <p className="text-md text-gray-400 italic">
                            This project was supported by the Cooperative Institute for Research to Operations in Hydrology (CIROH) with funding under award NA22NWS4320003 from the NOAA Cooperative Institute Program. The statements, findings, conclusions, and recommendations are those of the author(s) and do not necessarily reflect the opinions of NOAA.
                        </p>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Contact;
