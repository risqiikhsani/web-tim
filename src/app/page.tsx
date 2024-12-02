import Transition from "@/components/animations/transition";
import CTA from "./_page/cta";
import Feature from "./_page/feature";
import Hero from "./_page/hero";
import Stat from "./_page/stat";
import CustomerFeedback from "./_public_components/customer-feedback";
import Education from "./_public_components/educations";
import HeroAwsPartner from "./_public_components/hero-aws-partner";
import HeroCloudConsulting from "./_public_components/hero-cloud-consulting";
import HeroCloudMigration from "./_public_components/hero-cloud-migration";
import HeroCloudSolutions from "./_public_components/hero-cloud-solutions";
import HeroEducation from "./_public_components/hero-education";
import Trusted from "./_public_components/trusted";
import BorderCool from "@/components/border-cool";
import { H1 } from "@/components/typography/Typography";
import Contact from "./_public_components/contact";

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
        <HeroEducation />
      </Transition>

      <Transition direction="left">
        <HeroCloudConsulting />
      </Transition>

      <Transition direction="right">
        <HeroCloudSolutions />
      </Transition>

      <Transition direction="left">
        <HeroCloudMigration />
      </Transition>

      <Transition direction="left">
        <Education />
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
