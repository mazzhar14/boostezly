export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 pt-32 pb-20 bg-gradient-to-b from-white to-teal-50">
        <div className="relative">
  <         div className="absolute inset-0 bg-teal-100 blur-3xl opacity-30 rounded-full"></div>
              <h1 className="relative text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
                  We Build Modern <span className="text-[#14B8A6]">Digital Solutions</span>
              </h1>
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Boostezly LLC is a tech-focused digital agency helping businesses scale with cutting-edge websites, automation, and AI-powered solutions.
        </p>

        <div className="flex gap-4">
          <button className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-lg hover:bg-[#14B8A6] hover:text-white transition">
            Get Started
          </button>

          <button className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-lg hover:bg-[#14B8A6] hover:text-white transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#14B8A6]">
                Web Development
              </h3>
              <p className="text-gray-600">
                High-performance websites built with modern technologies like
                Next.js and React.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#14B8A6]">
                Automation
              </h3>
              <p className="text-gray-600">
                Streamline your business processes with smart automation and integrations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-[#14B8A6]">
                AI Solutions
              </h3>
              <p className="text-gray-600">
                Leverage artificial intelligence to boost productivity and innovation.
              </p>
            </div>

          </div>
        </div>
      </section>

      
      {/* About Section */}
      <section id="about" className="py-20 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            About Boostezly
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            Boostezly LLC is a modern technology agency focused on building
            high-performance websites, automation systems, and AI-driven
            solutions. We help startups and businesses grow faster
            with smart digital infrastructure.
          </p>
        </div>
      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20 px-6 scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Contact Us
          </h2>

          <p className="text-gray-600 mb-8">
            Let’s discuss how we can help grow your business.
          </p>

          <button className="bg-[#14B8A6] text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
            Email Us
          </button>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Boostezly LLC. All rights reserved.
      </footer>

    </main>
  );
}