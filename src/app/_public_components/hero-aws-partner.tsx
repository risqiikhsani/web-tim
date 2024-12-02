// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports

// Local component imports
import { Container } from "@/components/craft";
import { Button } from "@/components/ui/button";

// Asset imports
import { H1, H3 } from "@/components/typography/Typography";
import Logo2 from "@/logo/awspartner.png";
import Logo3 from "@/logo/awspartner2.png";
import Logo from "@/logo/timcorp.png";

const HeroAwsPartner = () => {
  return (
    <div>
      <Container className="flex flex-col items-center text-center">
        <Image
          src={Logo}
          width={172}
          height={72}
          alt="Company Logo"
          className="not-prose mb-6 md:mb-8"
        />
        <H1 className="animate-ping-soft">
          Unlock the Power of the{" "}
          <span className="text-orange-500 ">AWS Cloud</span>
        </H1>
        <H3 className="text-muted-foreground mt-2">
          Your Trusted Partner in{" "}
          <span className="text-primary">AWS Cloud Solutions</span> and{" "}
          <span className="text-primary">Education</span>.
        </H3>
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
        <div className="not-prose mt-6 flex flex-col md:flex-row gap-2 md:mt-12">
          {/* <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Learn more about AWS 
            </Link>
          </Button> */}
          <Button asChild>
            <Link href="https://aws.amazon.com/partners/work-with-partners/" target="_blank">
              {" "}
              Learn more about AWS Partner. -{">"}
            </Link>
          </Button>
          <Button  asChild>
            <Link href="https://partners.amazonaws.com/partners/0018W00001wu6XoQAI/PT%20TECHNO%20INTERNATIONAL%20MANDIRA%20(TIMCorp)" target="_blank">
              {" "}
              AWS Partner page. -{">"}
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroAwsPartner;
