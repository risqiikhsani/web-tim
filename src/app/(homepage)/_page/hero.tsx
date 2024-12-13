import Image from "next/image";
import Balancer from "react-wrap-balancer";

// UI Components



// Assets
import { H1, H3 } from "@/components/typography/Typography";
import Placeholder from "@/images/aws.webp";

export default function Hero() {
  return (
        <div className="flex flex-col items-center text-center md:container mx-auto gap-6">
          <H1>
            <Balancer>
            Empowering Businesses with <span className="text-primary">AWS Expertise</span>
            </Balancer>
          </H1>
          <H3 className="text-muted-foreground">
            <Balancer>
            Comprehensive Solutions for Cloud Education, Consulting, Migration, and Management.
            </Balancer>
          </H3>
          <div className="overflow-hidden border-2 border-primary">
            <Image
              className="not-prose h-full w-full object-fill"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              // placeholder="blur"
            />
          </div>
        </div>

 
  );
}
