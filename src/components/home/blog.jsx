import React from 'react';

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="section-heading">More Blog Updates</h2>
          <h3 className="section-subheading">Stay updated with the latest news and updates about NGIAB from CIROH</h3>
        </div>
        <div className="flex justify-center mb-8">
          <a
            href="https://docs.ciroh.org/blog/tags/ngiab"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xl px-12 py-4"
          >
            Visit CIROH Blog
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;