import { Check } from "lucide-react";

import { Small } from "@/components/typography/Typography";
import Balancer from "react-wrap-balancer";

const CtaUniqueStrength = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              Unique Strength
            </h4>
            <p className="text-muted-foreground">WHY WE ARE UNIQUE</p>
            
          </div>
          <div className="w-full">
            <ul className="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex flex-col">
                <div className="flex text-primary">
                <Check className="mr-4 size-5" />
                Extensive Network</div>
                <Small>
                <Balancer>
                  
                    Since 2010, we have established strong connections within
                    both the government and private sectors, enabling us to
                    provide tailored solutions that meet specific organizational
                    needs and regulatory requirements.
                  
                </Balancer>
                </Small>
              </li>
              <li className="flex flex-col">
                <div className="flex text-primary">
                <Check className="mr-4 size-5" />
                Proven Track Record</div>
                <Small>
                <Balancer>
                  
                    As a company, TIMCorp has facilitated numerous successful
                    cloud transitions across public institutions and
                    enterprises, significantly enhancing operational efficiency
                    and reducing costs.
                  
                </Balancer>
                </Small>
              </li>
              <li className="flex flex-col">
                <div className="flex text-primary">
                <Check className="mr-4 size-5" />
                End to end Cloud Support</div>
                <Small>
                <Balancer>
                  
                    From initial design to deployment and ongoing management, we
                    offer continuous support for every stage of your cloud
                    journey.
                  {" "}
                </Balancer>
                </Small>
              </li>
              <li className="flex flex-col">
                <div className="flex text-primary">
                <Check className="mr-4 size-5" />
                Innovative, Future-Ready Solutions</div>
                <Small>
                <Balancer>
                  
                    We incorporate the latest AWS technologies and innovations
                    to keep your cloud environment at the forefront of the
                    industry.
                  
                </Balancer>
                </Small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaUniqueStrength;
