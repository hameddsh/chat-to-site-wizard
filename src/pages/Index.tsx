
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AdminDashboard from "@/components/AdminDashboard";
import LiveEditor from "@/components/LiveEditor";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <AdminDashboard />
      <LiveEditor />
      <CTA />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
