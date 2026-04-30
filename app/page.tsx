import Hero from "@/components/sections/Hero";
import Credibility from "@/components/sections/Credibility";
import Differentials from "@/components/sections/Differentials";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import ServiceArea from "@/components/sections/ServiceArea";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import BlogPreview from "@/components/sections/BlogPreview";
import CTAFinal from "@/components/sections/CTAFinal";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd schema={faqSchema} />
      <Hero />
      <Credibility />
      <Differentials />
      <Services />
      <HowItWorks />
      <ServiceArea />
      <Testimonials />
      <FAQSection />
      <BlogPreview />
      <CTAFinal />
    </>
  );
}
