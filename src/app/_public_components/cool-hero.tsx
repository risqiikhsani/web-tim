import Image from "next/image";

import logo1 from '@/aws_services_logo/Arch_AWS-Amplify_64.svg'
import logo2 from '@/aws_services_logo/Arch_AWS-Fargate_64.svg'
import logo3 from '@/aws_services_logo/Arch_AWS-Lambda_64.svg'
import logo4 from '@/aws_services_logo/Arch_Amazon-API-Gateway_64.svg'
import logo5 from '@/aws_services_logo/Arch_Amazon-Aurora_64.svg'
import logo6 from '@/aws_services_logo/Arch_Amazon-Bedrock_64.svg'
import logo7 from '@/aws_services_logo/Arch_Amazon-CloudFront_64.svg'
import logo8 from '@/aws_services_logo/Arch_Amazon-DynamoDB_64.svg'
import logo9 from '@/aws_services_logo/Arch_Amazon-EC2_64.svg'
import logo10 from '@/aws_services_logo/Arch_Amazon-ECS-Anywhere_64.svg'
import logo11 from '@/aws_services_logo/Arch_Amazon-EKS-Cloud_64.svg'
import logo12 from '@/aws_services_logo/Arch_Amazon-RDS_64.svg'
import logo13 from '@/aws_services_logo/Arch_Amazon-Route-53_64.svg'
import logo14 from '@/aws_services_logo/Arch_Amazon-Virtual-Private-Cloud_64.svg'
import logo15 from '@/aws_services_logo/Arch_Amazon-Simple-Storage-Service_64.svg'

const integrations = [
  [
    {
      id: "integration-1",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo1}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-2",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo2}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-3",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo3}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-4",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo4}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-5",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo5}

className="rounded-md"          />
      ),
    },
  ],
  [
    {
      id: "integration-6",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo6}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-7",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo7}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-8",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo8}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-9",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo9}

className="rounded-md"          />
      ),
    },
    {
      id: "integration-10",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo10}
          className="rounded-md"
        />
      ),
    },
  ],
  [
    {
      id: "integration-11",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo11}
          className="rounded-md"
        />
      ),
    },
    {
      id: "integration-12",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo12}
          className="rounded-md"
        />
      ),
    },
    {
      id: "integration-13",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo13}
          className="rounded-md"
        />
      ),
    },
    {
      id: "integration-14",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo14}
          className="rounded-md"
        />
      ),
    },
    {
      id: "integration-15",
      icon: (
        <Image
          width={100}
          height={100}
          alt="Integration"
          src={logo15}
          className="rounded-md"
        />
      ),
    },
  ],
];

const CoolHero = ({title}:{title:string}) => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 bg-background px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl pl-2">
                  {title}
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="size-24 rounded-xl border border-background bg-background shadow-xl"
                    >
                      <div className="size-full bg-muted/20 p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoolHero;
