import { useEffect, useState } from "react";
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
import UsageMeterPreview from "./components/UsageMeterPreview.jsx";
import FAQ from "./components/FAQ.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import LoginDemo from "./components/LoginDemo.jsx";
import DemoDashboard from "./components/DemoDashboard.jsx";

const DEMO_SESSION_KEY = "nusaai_demo_session";

function getRouteFromHash() {
  const hash = window.location.hash.replace("#", "");
  if (hash === "/login") return "login";
  if (hash === "/app") return "app";
  return "landing";
}

function LandingPage() {
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
        <UsageMeterPreview />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [route, setRoute] = useState(getRouteFromHash);
  const [isDemoSession, setIsDemoSession] = useState(() => localStorage.getItem(DEMO_SESSION_KEY) === "true");

  useEffect(() => {
    const handleHashChange = () => setRoute(getRouteFromHash());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const enterDemo = () => {
    localStorage.setItem(DEMO_SESSION_KEY, "true");
    setIsDemoSession(true);
    window.location.hash = "/app";
  };

  const exitDemo = () => {
    localStorage.removeItem(DEMO_SESSION_KEY);
    setIsDemoSession(false);
    window.location.hash = "/login";
  };

  if (route === "login") {
    return <LoginDemo onEnterDemo={enterDemo} />;
  }

  if (route === "app") {
    return isDemoSession ? <DemoDashboard onLogout={exitDemo} /> : <LoginDemo onEnterDemo={enterDemo} />;
  }

  return <LandingPage />;
}
