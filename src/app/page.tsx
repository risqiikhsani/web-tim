import Transition from "@/components/animations/transition";
import Feature from "./(homepage)/_page/feature";
import Hero from "./(homepage)/_page/hero";
import Stat from "./(homepage)/_page/stat";
import Contact from "./(homepage)/_public_components/contact";
import CTA from "./(homepage)/_public_components/cta";
import CustomerFeedback from "./(homepage)/_public_components/customer-feedback";
import Education from "./(homepage)/_public_components/educations";
import HeroAwsPartner from "./(homepage)/_public_components/hero-aws-partner";
import HeroCloudConsulting from "./(homepage)/_public_components/hero-cloud-consulting";
import HeroCloudMigration from "./(homepage)/_public_components/hero-cloud-migration";
import HeroEducation from "./(homepage)/_public_components/hero-education";
import Trusted from "./(homepage)/_public_components/trusted";
import HeroAwsPartner2 from "./(homepage)/_public_components/hero-aws-partner-2";
import Partners from "./(homepage)/_public_components/partners";

export default function page() {
  return (
    <div className="flex flex-col gap-10 ">
      {/* <Section className="py-0"> */}

      <HeroAwsPartner showMasterLogo/>
      <HeroAwsPartner2/>
      <Transition direction="right">
        <Hero />
      </Transition>

      <Feature />


      <Transition direction="up">
        <HeroCloudConsulting showReadMore/>
      </Transition>

      <Transition direction="right">
        <HeroEducation showReadMore/>
      </Transition>


      <Transition direction="right">
        <HeroCloudMigration showReadMore/>
      </Transition>

      <Transition direction="up">
        <Education showReadMore/>
      </Transition>

      <Trusted />

      <Partners/>

      <CustomerFeedback />

      <Stat />

      <CTA/>

      {/* </Container> */}
      {/* </Section> */}
      <Contact/>
    </div>
  );
}
