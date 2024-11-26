// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// UI component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";


import { featureText } from "@/const/const";


import Education from '@/images/education.png'

const FeatureRight2 = () => {
  return (
    <Section>
      <Container className="grid items-stretch md:grid-cols-2 md:gap-12">
        <div className="flex flex-col gap-6 py-8">
          <h3 className="!my-0">{featureText[3].title}</h3>
          <p className="font-light leading-[1.4] opacity-70">
            {featureText[3].description}
          </p>
          <div className="not-prose flex items-center gap-2">
            <Button className="w-fit" asChild>
              <Link href="#">Get Started</Link>
            </Button>
            <Button className="w-fit" variant="link" asChild>
              <Link href="#">Learn More {"->"}</Link>
            </Button>
          </div>
        </div>
        <div className="not-prose relative flex h-96 overflow-hidden rounded-lg">
          <Image
            src={Education}
            alt="placeholder"
            className="fill object-cover"
          />
        </div>
      </Container>
    </Section>
  );
};

export default FeatureRight2;
