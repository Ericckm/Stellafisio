import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Differentials from "@/components/sections/Differentials";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Credibility />
      <Differentials />
      <Services />
      <HowItWorks />
      <ServiceArea />
      <Testimonials />
      <FAQSection />
      <CTAFinal />
    </>
  );
}
