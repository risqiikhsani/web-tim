import Transition from "@/components/animations/transition";
import CTA from "./_public_components/cta";
import Feature from "./_page/feature";
import Hero from "./_page/hero";
import Stat from "./_page/stat";
import Contact from "./_public_components/contact";
import CustomerFeedback from "./_public_components/customer-feedback";
import Education from "./_public_components/educations";
import HeroAwsPartner from "./_public_components/hero-aws-partner";
import HeroCloudConsulting from "./_public_components/hero-cloud-consulting";
import HeroCloudMigration from "./_public_components/hero-cloud-migration";
import HeroCloudSolutions from "./_public_components/hero-cloud-solutions";
import HeroEducation from "./_public_components/hero-education";
import Trusted from "./_public_components/trusted";

export default function page() {
  return (
    <div className="py-0">
      {/* <Section className="py-0"> */}

      <HeroAwsPartner />
      <Transition direction="right">
        <Hero />
      </Transition>

      <Feature />

      <Transition direction="right">
        <HeroEducation showReadMore/>
      </Transition>

      <Transition direction="left">
        <HeroCloudConsulting showReadMore/>
      </Transition>

      <Transition direction="right">
        <HeroCloudSolutions showReadMore/>
      </Transition>

      <Transition direction="left">
        <HeroCloudMigration showReadMore/>
      </Transition>

      <Transition direction="left">
        <Education showReadMore/>
      </Transition>

      <Trusted />

      <CustomerFeedback />

      <Stat />

      <CTA />

      {/* </Container> */}
      {/* </Section> */}
      <Contact/>
    </div>
  );
}
