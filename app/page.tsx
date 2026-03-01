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
     <section id="contact" className="bg-gray-50 py-20 px-6 scroll-mt-24">
       <div className="max-w-3xl mx-auto text-center"><h2 className="text-3xl font-bold mb-6"> Contact Us </h2> <p className="text-gray-600 mb-12"> Let’s discuss how we can help grow your business. </p>

        {/* ===== CONTACT FORM ===== */}

        <form action="/api/contact" method="POST"  className="space-y-6 text-left">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700"> Full Name </label>
            <input type="text" name="name" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700"> Email Address </label>
            <input type="email" name="email" required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700"> Message </label> <textarea name="message" rows={5} required className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#14B8A6]" />
          </div>

          <button type="submit" className="w-full bg-[#14B8A6] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"> Send Message </button>
        </form>
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