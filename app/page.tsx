import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic Imports for performance (Code Splitting)
const ProblemSection = dynamic(() => import("@/components/ProblemSection"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const SignupCTA = dynamic(() => import("@/components/SignupCTA"));
const FAQ = dynamic(() => import("@/components/FAQ"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full liquid-blob animate-float" />
        <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-hyper-red/20 blur-[80px] animate-pulse" />
        <div className="absolute inset-0 opacity-10 dot-grid" />
      </div>

      {/* Page Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content">
          <Hero />
          <ProblemSection />
          <HowItWorks />
          <SignupCTA />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
}
