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
      <h2 className="section-heading">NGIAB End-to-End Workflow</h2>
      <h3 className="section-subheading">
        Demo Videos
      </h3>
    </div>

    {/* Videos */}
    <div
      className="max-w-6xl mx-auto"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/l3XoBFHCPtk"
              title="NGIAB Data Preparation Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-gray-700 font-medium">NGIAB Data Preprocessing</p>
        </div>
        <div>
          <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/1KvxVhrGX1M"
              title="NGIAB Local Run Guide Script Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-gray-700 font-medium">Running NGIAB Locally Using the Guide Script</p>
        </div>
      </div>
      {/* Caption */}
      <p
        className="text-center text-gray-700 mt-4"
        data-aos="fade-up"
        data-aos-delay="300"
      >
      </p>
    </div>
  </div>
</section>
  );
};

export default Demo;
