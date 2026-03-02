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
      {/* ================= ULTRA PREMIUM ABOUT SECTION ================= */}
<section id="about" className="relative py-28 px-6 bg-white overflow-hidden scroll-mt-24">

  {/* Teal Glow Background */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2
                  w-[700px] h-[700px]
                  bg-[#14B8A6]/10
                  blur-3xl rounded-full" />

  <div className="relative max-w-6xl mx-auto">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        About Boostezly LLC
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto">
        Boostezly LLC, founded in 2004, is a full-service digital growth agency helping businesses scale through smart technology and data-driven marketing strategies.
      </p>
    </div>

    {/* Cards */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        { title: "Digital Marketing (Google Ads & Meta Ads)", icon: "📊" },
        { title: "Traffic Acquisition (Ads)", icon: "🚀" },
        { title: "AI Chatbot Development", icon: "🤖" },
        { title: "Shopify Store Setup & Optimization", icon: "🛒" },
        { title: "Live Chat Assistant Integration", icon: "💬" },
        { title: "Conversion Optimization", icon: "📈" },
        { title: "Lead Generation Systems", icon: "🎯" },
        { title: "Website Design & Development", icon: "💻" },
        { title: "E-commerce Solutions", icon: "⚙️" }
      ].map((item, index) => (
        <FadeIn key={index}>
          <div
            className="p-8 bg-white border border-gray-200 rounded-2xl
                       shadow-sm hover:shadow-2xl
                       hover:-translate-y-3
                       transition-all duration-500"
          >
            <div className="text-3xl mb-4">{item.icon}</div>
            <h4 className="text-lg font-semibold text-[#14B8A6]">
              {item.title}
            </h4>
          </div>
        </FadeIn>
      ))}

    </div>

    {/* Bottom Description */}
    <div className="mt-20 text-center max-w-4xl mx-auto">
      <p className="text-gray-700 text-lg leading-relaxed">
        With over two decades of experience, Boostezly LLC combines marketing expertise with advanced AI-driven tools to help businesses increase visibility, automate operations, and maximize revenue.
      </p>

      <div className="mt-10 p-8 bg-gray-50 rounded-2xl border border-gray-200">
        <h4 className="text-xl font-semibold text-[#14B8A6] mb-3">
          Our Mission
        </h4>
        <p className="text-gray-700 text-lg">
          To help businesses grow faster using smart digital solutions.
        </p>
      </div>
    </div>

  </div>

</section>
{/* ================= END ABOUT SECTION ================= */}


      {/* Contact Section */}

      {/* ================= CARD STYLE CONTACT SECTION ================= */}
<section id="contact" className="py-24 px-4 sm:px-6 bg-gray-100 scroll-mt-24">

  <div className="max-w-6xl mx-auto">

    {/* ===== TOP INFO ROW ===== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

      {/* LEFT INFO */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900">
          We Are Available 24/7
        </h2>

        <p className="text-gray-600">
          Our combined expertise ensures your project is delivered to the highest standards.
        </p>

        <div className="pt-6 space-y-4">
          <div>
            <h4 className="text-[#14B8A6] font-semibold">Address</h4>
            <p className="text-gray-700">
              Boostezly LLC <br /> PO BOX - 152 <br /> Monroeville <br /> PA-15146 <br /> United States.
            </p>
          </div>

          <div>
            <h4 className="text-[#14B8A6] font-semibold">Email</h4>
            <p className="text-gray-700">info@boostezlyai.com</p>
          </div>

          <div>
            <h4 className="text-[#14B8A6] font-semibold"> Toll-Free </h4>
            <p className="text-gray-700">888-322-2201</p>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div>
        <img
          src="/office-image.jpg"
          alt="Office"
          className="rounded-2xl shadow-xl w-full object-cover"
        />
      </div>

    </div>

    {/* ===== FORM CARD ===== */}
    <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200">

      <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">
        Get In Touch
      </h3>

      <form
        action="/api/contact"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >

        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="w-full px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full md:col-span-2 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={5}
          required
          className="w-full md:col-span-2 px-5 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#14B8A6] resize-none"
        />

        {/* CENTER BUTTON */}
        <div className="md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            className="bg-[#14B8A6] text-white px-10 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Submit
          </button>
        </div>

      </form>

    </div>

  </div>
</section>
{/* ================= END SECTION ================= */}    




      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Boostezly LLC. All rights reserved.
      </footer>

    </main>
  );
}