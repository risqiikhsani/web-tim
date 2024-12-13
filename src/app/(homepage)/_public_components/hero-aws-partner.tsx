// React and Next.js imports
import Image from "next/image";
import Link from "next/link";

// Third-party library imports

// Local component imports
import { Button } from "@/components/ui/button";

// Asset imports
import BorderGradient from "@/components/border-gradient";
import { H1, H3 } from "@/components/typography/Typography";
import Logo from "@/logo/timcorp.png";

import partner1 from "@/logo/partner1.png";
import partner2 from "@/logo/partner2.png";
import partner3 from "@/logo/partner3.png";

const HeroAwsPartner = ({
  showMasterLogo = true,
}: {
  showMasterLogo: boolean;
}) => {
  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="flex flex-col items-center text-center gap-6">
        {showMasterLogo && (
          <Image
            src={Logo}
            width={172}
            height={72}
            alt="Company Logo"
            className="not-prose mb-6 md:mb-8"
          />
        )}
        <H1 className="">
          Unlock the Power of the{" "}
          <span className="text-primary">AWS Cloud</span>
        </H1>
        <H3 className="text-muted-foreground">
          Your Trusted Partner in{" "}
          <span className="text-primary">AWS Cloud Solutions</span> and{" "}
          <span className="text-primary">Education</span>.
        </H3>
      </div>

      <div className="flex flex-col items-center text-center bg-[url('/backgrounds/subtle-prism-cyan.svg')] rounded-md p-10">
        <div className="flex md:flex-row flex-col gap-2 justify-center items-center">
          <div className="animate-in slide-in-from-top duration-1000">
            <BorderGradient>
              <Image
                src={partner1}
                width={600}
                height={600}
                alt="Company Logo"
                className="not-prose dark:invert rounded-lg "
              />
            </BorderGradient>
          </div>
          <div className="animate-in slide-in-from-left duration-1000">
            <BorderGradient>
              <Image
                src={partner2}
                width={600}
                height={600}
                alt="Company Logo"
                className="not-prose dark:invert rounded-lg "
              />
            </BorderGradient>
          </div>
          <div className="animate-in slide-in-from-left duration-1000">
            <BorderGradient>
              <Image
                src={partner3}
                width={600}
                height={600}
                alt="Company Logo"
                className="not-prose dark:invert rounded-lg "
              />
            </BorderGradient>
          </div>
        </div>
        <div className="not-prose mt-6 flex flex-col md:flex-row gap-2 md:mt-12">
          {/* <Button asChild>
            <Link href="/">
              <Camera className="mr-2" />
              Learn more about AWS 
            </Link>
          </Button> */}
          <Button asChild>
            <Link
              href="https://aws.amazon.com/partners/work-with-partners/"
              target="_blank"
            >
              {" "}
              Learn more about AWS Partner. -{">"}
            </Link>
          </Button>
          <Button asChild>
            <Link
              href="https://partners.amazonaws.com/partners/0018W00001wu6XoQAI/PT%20TECHNO%20INTERNATIONAL%20MANDIRA%20(TIMCorp)"
              target="_blank"
            >
              {" "}
              AWS Partner page. -{">"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroAwsPartner;
