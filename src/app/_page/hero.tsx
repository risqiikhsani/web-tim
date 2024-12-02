import Image from "next/image";
import Balancer from "react-wrap-balancer";

// UI Components

// Custom Components
import { Container, Section } from "@/components/craft";

// Assets
import { H1 } from "@/components/typography/Typography";
import Placeholder from "@/images/aws.webp";

export default function Hero() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-center text-center">
          {/* <Button
            asChild
            className="not-prose mb-6 flex w-fit"
            size="sm"
            variant="outline"
          >
            <Link href="https://9d8.dev">
              Lorem ipsum dolor sit amet <ArrowRight className="ml-2 w-4" />
            </Link>
          </Button> */}
          <H1>
            <Balancer>
            Empowering Businesses with <span className="text-orange-400">AWS Expertise</span>
            </Balancer>
          </H1>
          <h3 className="text-muted-foreground">
            <Balancer>
            Comprehensive Solutions for Cloud Education, Consulting, Migration, and Management.
            </Balancer>
          </h3>
          <div className="my-8 h-96 w-full overflow-hidden rounded-lg border-2 border-primary md:h-[480px] md:rounded-xl">
            <Image
              className="not-prose h-full w-full object-cover object-bottom"
              src={Placeholder}
              width={1920}
              height={1080}
              alt="hero image"
              // placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
