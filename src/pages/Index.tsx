import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import TheDifference from "@/components/TheDifference";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import GetStarted from "@/components/GetStarted";  // <-- NEW
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Services />
      <WhyUs />
      <TheDifference />
      <Testimonials />
      <FAQ />
      <CTA />
      <GetStarted />  {/* <-- Added section */}
      <Footer />
    </div>
  );
};

export default Index;
