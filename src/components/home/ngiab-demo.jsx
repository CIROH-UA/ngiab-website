const Demo = () => {
  return(
  <section
  id="ngiab-demo"
  className="py-16 bg-white"
  data-aos="fade-up"
  data-aos-duration="800"
  data-aos-offset="120"
>
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div
      className="text-center mb-8"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <h2 className="section-heading">NGIAB Demo</h2>
      <h3 className="section-subheading">
        NextGen In A Box — 5 Minute Walkthrough
      </h3>
    </div>

    {/* Video */}
    <div
      className="max-w-4xl mx-auto"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg border border-gray-200 bg-black">
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/N2xZQDmq6ZE"
          title="NGIAB 5 Minute Demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {/* Caption */}
      <p
        className="text-center text-gray-700 mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        A quick overview demonstrating how to set up and run
        <span className="font-medium"> NextGen In A Box</span>.
      </p>
    </div>
  </div>
</section>
  );
};

export default Demo;
