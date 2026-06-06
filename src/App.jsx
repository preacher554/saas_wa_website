import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import OutcomeBar from "./components/OutcomeBar.jsx";
import PainPoints from "./components/PainPoints.jsx";
import FeaturePillars from "./components/FeaturePillars.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import AIFrontdeskFeature from "./components/AIFrontdeskFeature.jsx";
import LeadIntelligenceFeature from "./components/LeadIntelligenceFeature.jsx";
import HandoffFeature from "./components/HandoffFeature.jsx";
import ChatNativeFeature from "./components/ChatNativeFeature.jsx";
import DashboardPreview from "./components/DashboardPreview.jsx";
import IndustryUseCases from "./components/IndustryUseCases.jsx";
import PricingTeaser from "./components/PricingTeaser.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OutcomeBar />
        <PainPoints />
        <FeaturePillars />
        <HowItWorks />
        <AIFrontdeskFeature />
        <LeadIntelligenceFeature />
        <HandoffFeature />
        <ChatNativeFeature />
        <DashboardPreview />
        <IndustryUseCases />
        <PricingTeaser />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
