import ServicesPremium from "./components/ServicesPremium"
import ParallaxSection from "./components/ParallaxSection";
import FadeIn from "./components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">

     

        {/* Hero Section with Custom Background */}
        <section id="home" className="relative flex items-center justify-center text-center min-h-screen overflow-hidden"
>
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{backgroundImage: "url('/hero-bg.jpg')",}}/>

        {/* Soft Gradient Overlay (More Premium Look) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/80" />

        {/* Content */}
        <div className="relative z-10 px-6"><h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-gray-900"> We Build Modern{" "}<span className="text-[#14B8A6]">Digital Solutions</span></h1> <p className="text-lg max-w-2xl mx-auto mb-8 text-gray-700"> Boostezly LLC is a tech-focused digital agency helping businesses scale with cutting-edge websites, automation, and AI-powered solutions.</p>
          <div className="flex gap-4 justify-center">
          <button className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-lg hover:bg-[#14B8A6] hover:text-white transition"> Get Started </button>
          <button className="border border-[#14B8A6] text-[#14B8A6] px-6 py-3 rounded-lg hover:bg-[#14B8A6] hover:text-white transition"> Learn More </button> </div>
        </div>
        </section>

      {/* Services Section */}
      {/* Premium Services */}
      <ServicesPremium />


      <section
        className="relative h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center text-white" style={{ backgroundImage: "url('/parallax-bg.jpg')" }}>
  
        {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60"></div>

         {/* Content */}
          <div className="relative z-10 text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6"> We Build Experiences That Scale </h2> <p className="max-w-2xl mx-auto text-lg text-gray-200"> Modern design. Smart automation. Powerful technology. </p>
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
      {/* ================= CONTACT SECTION ================= */}
     
<section id="contact" className="py-24 px-6 bg-gray-50 scroll-mt-24">

  <div className="max-w-6xl mx-auto">

    {/* ===== TOP HEADING ===== */}
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">
        We Are Available 24/7
      </h2>
      <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
        Our combined expertise ensures your project is delivered to the highest standards.
      </p>
    </div>

    {/* ===== INFO + IMAGE ===== */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

      {/* Company Info */}
      <div className="space-y-8">
        <div>
          <h4 className="text-[#14B8A6] font-semibold mb-2">Address</h4>
          <p className="text-gray-700"> Boostezly LLC <br /> PO BOX -152 <br /> Monroeville <br /> PA-15146 <br /> United States.</p>
        </div>

        <div>
          <h4 className="text-[#14B8A6] font-semibold mb-2">Email</h4>
          <p className="text-gray-700">info@boostezly.com</p>
        </div>

        <div>
          <h4 className="text-[#14B8A6] font-semibold mb-2">Phone</h4>
          <p className="text-gray-700">408-770-4607</p>
        </div>
      </div>

      {/* Image */}
      <div>
        <img
          src="/office-image.jpg"
          alt="Office"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>
    </div>

    {/* ===== WHITE CARD FORM ===== */}
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-200 p-12">

      <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
        Get In Touch
      </h3>

      <form
        action="/api/contact"
        method="POST"
        className="grid md:grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="md:col-span-2 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="md:col-span-2 px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] transition resize-none"
        />

        {/* CENTERED BUTTON */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#14B8A6] text-white px-10 py-3 rounded-full hover:shadow-lg hover:scale-[1.03] transition-all duration-300 font-semibold"
          >
            Submit
          </button>
        </div>

      </form>

    </div>

  </div>
</section>
{/* ================= END CONTACT SECTION ================= */}


      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Boostezly LLC. All rights reserved.
      </footer>

    </main>
  );
}