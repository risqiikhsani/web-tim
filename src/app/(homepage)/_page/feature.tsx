// React and Next.js
// Layout Components
import { Container, Section } from "@/components/craft";
import { featureText } from "@/const/const";
import Balancer from "react-wrap-balancer";

const Feature = () => {
  return (
    <Section className="border-b">
      <Container className="not-prose bg-[url('/images/w1.svg')]">
        <div className="flex flex-col gap-6">
          <h3 className="text-4xl">
            <Balancer>
              Grow together with{" "}
              <span className="text-orange-600">TIMCorp</span>
            </Balancer>
          </h3>
          <h4 className="text-2xl font-light ">
            <Balancer>
              From Cloud Education to Enterprise Solutions: We’ve Got You
              Covered.
            </Balancer>
          </h4>

          <div className="mt-6 grid gap-6 md:mt-12 md:grid-cols-3">
            {featureText.map(({ title, description }, index) => (
              <div
                className="flex flex-col gap-4 border-solid border-2 border-primary p-4 shadow-2xl rounded-xl bg-white dark:bg-black"
                key={index}
              >

                <span className="flex gap-2 justify-start items-center">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                {/* <Coins className="h-6 w-6 text-sky-500" /> */}
                <h4 className="text-xl text-primary">{title}</h4>
                </span>

                <p className="text-base opacity-75">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Feature;
