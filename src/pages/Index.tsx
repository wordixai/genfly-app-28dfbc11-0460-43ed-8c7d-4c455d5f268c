import Header from "@/components/Header";
import VideoSection from "@/components/VideoSection";
import MacaronRolling from "@/components/MacaronRolling";
import WhyMacaronSection from "@/components/WhyMacaronSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import TechnicalSection from "@/components/TechnicalSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full relative bg-gradient-to-br from-macaron-bg to-macaron-cream min-h-screen overflow-x-hidden">
      {/* Noise Filter SVG */}
      <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute' }}>
        <filter id="noiseFilter" x="0" y="0" width="100" height="100" filterUnits="objectBoundingBox">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      <div className="flex w-full min-h-full flex-col items-center">
        {/* Header Section */}
        <Header />
        
        {/* Video Section */}
        <VideoSection />
        
        {/* Rolling Macarons */}
        <MacaronRolling />
        
        {/* Why Choose Macaron Section */}
        <WhyMacaronSection />
        
        {/* Showcase Section */}
        <ShowcaseSection />
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Technical Section */}
        <TechnicalSection />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;