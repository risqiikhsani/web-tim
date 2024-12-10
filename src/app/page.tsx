import Transition from "@/components/animations/transition";
import Feature from "./(homepage)/_page/feature";
import Hero from "./(homepage)/_page/hero";
import Stat from "./(homepage)/_page/stat";
import Contact from "./(homepage)/_public_components/contact";
import CustomerFeedback from "./(homepage)/_public_components/customer-feedback";
import Education from "./(homepage)/_public_components/educations";
import HeroAwsPartner from "./(homepage)/_public_components/hero-aws-partner";
import HeroCloudConsulting from "./(homepage)/_public_components/hero-cloud-consulting";
import HeroCloudMigration from "./(homepage)/_public_components/hero-cloud-migration";
import HeroCloudSolutions from "./(homepage)/_public_components/hero-cloud-solutions";
import HeroEducation from "./(homepage)/_public_components/hero-education";
import Trusted from "./(homepage)/_public_components/trusted";
import CTA from "./(homepage)/_public_components/cta";

export default function page() {
  return (
    <div className="flex flex-col gap-10">
      {/* <Section className="py-0"> */}

      <HeroAwsPartner />
      <Transition direction="right">
        <Hero />
      </Transition>

      <Feature />

      <Transition direction="right">
        <HeroEducation showReadMore/>
      </Transition>

      <Transition direction="up">
        <HeroCloudConsulting showReadMore/>
      </Transition>

      <Transition direction="right">
        <HeroCloudSolutions showReadMore/>
      </Transition>

      <Transition direction="up">
        <HeroCloudMigration showReadMore/>
      </Transition>

      <Transition direction="up">
        <Education showReadMore/>
      </Transition>

      <Trusted />

      <CustomerFeedback />

      <Stat />

      <CTA/>

      {/* </Container> */}
      {/* </Section> */}
      <Contact/>
    </div>
  );
}
