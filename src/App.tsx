import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { CeramicSection } from './components/CeramicSection';
import { GallerySection } from './components/GallerySection';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CeramicSection />
      <GallerySection />
      <TrustSection />
      <WhyChooseUsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}