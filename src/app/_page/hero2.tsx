// React and Next.js imports
import Link from "next/link";
import Image from "next/image";

// Third-party library imports
import Balancer from "react-wrap-balancer";
import { Camera } from "lucide-react";

// Local component imports
import { Section, Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import Logo from "@/logo/timcorp.png";
import Logo2 from "@/logo/awspartner.png";
import Logo3 from "@/logo/awspartner2.png";

const Hero2 = () => {
  return (
    <Section>
      <Container className="flex flex-col items-center text-center">
      <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 md:mb-8"
        />
        <h1 className="!mb-0">
          <Balancer>Unlock the Power of the <span className="text-orange-500 ">AWS Cloud</span></Balancer>
        </h1>
        <h3 className="text-muted-foreground">
          <Balancer>
            Your Trusted Partner in <span className="text-primary">AWS Cloud Solutions</span> and <span className="text-primary">Education</span>.
          </Balancer>
        </h3>
      </Container>
        
      <Container className="flex flex-col items-center text-center bg-[url('/images/subtle-prism.svg')] dark:invert rounded-md">
        


        <div className="flex md:flex-row flex-col gap-2 justify-center items-center">
        <Image
          src={Logo2}
          width={200}
          height={200}
          alt="Company Logo"
          className="not-prose dark:invert rounded-lg animate-in slide-in-from-top duration-1000"
        />
        <Image
          src={Logo3}
          width={300}
          height={200}
          alt="Company Logo"
          className="not-prose dark:invert rounded-lg animate-in slide-in-from-left duration-1000"
        />
        </div>
        <div className="not-prose mt-6 flex gap-2 md:mt-12">
          {/* <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Learn more about AWS 
            </Link>
          </Button> */}
          <Button variant={"outline"} asChild>
            <Link href="https://aws.amazon.com/partners/work-with-partners/"> Learn more about AWS Partner. -{">"}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
};

export default Hero2;
