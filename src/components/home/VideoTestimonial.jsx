import React from 'react';

const VideoTestimonial = () => {
  return (
    <section id="testimonial" className="py-16 bg-white" data-aos="fade-up" data-aos-duration="800" data-aos-offset="120">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <h2 className="section-heading">Community Spotlight</h2>
          <h3 className="section-subheading">Leo Lonzarich, PhD Candidate at Penn State</h3>
        </div>

        <div className="max-w-4xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
          <video
            controls
            playsInline
            className="w-full rounded-lg shadow-lg border border-gray-200"
            src="https://awi-ngiab-resources.s3.us-east-1.amazonaws.com/leo_testimonial.mp4"
          >
            Your browser does not support the video tag.
          </video>

          <p className="text-center text-gray-700 mt-4" data-aos="fade-up" data-aos-delay="300">
            A short testimonial highlighting NGIAB's ease-of-use and performance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonial;
