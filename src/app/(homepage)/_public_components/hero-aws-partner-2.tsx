import { Small } from "@/components/typography/Typography";
import { Badge } from "@/components/ui/badge";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Balancer from "react-wrap-balancer";

const HeroAwsPartner2 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container">
        <div className="absolute inset-x-0 top-0 z-10 flex size-full items-center justify-center opacity-100">
          <Image src="/backgrounds/vanishing-stripes.svg" fill alt="logo" className="dark:invert" />
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-6 text-center">
            <div className="flex gap-2">
            <Image
              width={100}
              height={100}
              src="/logo/timcorp.png"
              alt="logo"
              className=""
            />
            <Image
              width={100}
              height={100}
              src="/logo/awspartner.png"
              alt="logo"
              className=""
            />
            <Image
              width={100}
              height={100}
              src="/logo/awspartner3.png"
              alt="logo"
              className=""
            />
            </div>
            <Badge variant="outline">About</Badge>
            <div>
              <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
                Trusted AWS Partner: TIMCorp Leading Indonesia’s Cloud Evolution
              </h1>
              <Balancer>
              <Small>
                As an official <span className="font-bold text-primary">Amazon Partner Network (APN)</span> member, <span className="font-bold text-primary">TIM</span> is a
                trusted provider of AWS solutions across various industries,
                specializing in the education and government sectors in
                Indonesia. Our expertise, backed by AWS certification as
                Solutions Architects, ensures that every cloud deployment aligns
                with Amazon’s Well-Architected Framework, prioritizing security,
                scalability, and efficiency. We offer tailored AWS training
                programs, including Skillbuilder, to empower your team with
                essential skills and certification opportunities, ensuring they
                are fully equipped to manage and optimize cloud environments.
                From design to deployment and ongoing support, TIMCloud
                MergingHUB delivers innovative, future-ready cloud strategies,
                helping your organization unlock AWS’s full potential with
                confidence and reliability.
              </Small>
              </Balancer>
            </div>
            {/* <div className="mt-4 flex justify-center gap-2">
              <Button>Get Started</Button>
              <Button variant="outline">
                Learn more <ExternalLink className="ml-2 h-4" />
              </Button>
            </div> */}

              <div className="flex gap-2">
                <li className="font-medium hover:text-primary">
                  <Link
                    href="https://www.instagram.com/timcorp.academy/"
                    target="_blank"
                  >
                    <FaInstagram className="size-10" />
                  </Link>
                </li>
                <li className="font-medium hover:text-primary">
                  <Link href="mailto:hello@mytimcorp.com" target="_blank">
                    <Mail className="size-10" />
                  </Link>
                </li>
                {/* <li className="font-medium hover:text-primary">
              <Link href="#">
                <FaFacebook className="size-10" />
              </Link>
            </li>
            <li className="font-medium hover:text-primary">
              <Link href="#">
                <FaTwitter className="size-10" />
              </Link>
            </li> */}
                <li className="font-medium hover:text-primary">
                  <Link
                    href="https://www.linkedin.com/company/timcorpacademy/"
                    target="_blank"
                  >
                    <FaLinkedin className="size-10" />
                  </Link>
                </li>
              </div>
            </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroAwsPartner2;
