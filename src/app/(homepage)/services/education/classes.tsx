import { ArrowRight, CircleCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const classes = [
  {
    title: "Offline Class",
    description: "For anyone",
    price: "$0",
    features: [
      "Flexible time",
      "Best Price",
      "Hands on Lab",
      "Certificate ready",
      "Mentored by Professionals",
    ],
    buttonText: "Get Started",
    url:"",
    available:false,
  },
  {
    title: "Online Class",
    description: "For students",
    price: "FREE",
    features: [
      "100% Online",
      "100% Free",
      "Hands on Lab",
      "Certificate ready",
      "Mentored by Professionals",
    ],
    buttonText: "Sign Up with Kampus Merdeka",
    url:"/msib",
    available:true,
  },
];

const Classes = () => {
  return (
    <div className="my-20">
      <div className="container">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h2 className="text-pretty text-4xl font-bold lg:text-6xl">Type Classes</h2>
          <p className="text-muted-foreground lg:text-xl">
            Check out what suits you.
          </p>
          <div className="flex flex-col items-stretch gap-6 md:flex-row">
            {classes.map((plan, index) => (
              <Card
                key={index}
                className="flex w-80 flex-col justify-between text-left"
              >
                <CardHeader>
                  <CardTitle>
                    <p>{plan.title}</p>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                  <span className="text-4xl font-bold">{plan.price}</span>
                </CardHeader>
                <CardContent>
                  <Separator className="mb-6" />
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CircleCheck className="size-4" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  {plan.available ? (
                    <Button className="w-full" asChild>
                    <Link href={plan.url}>{plan.buttonText}<ArrowRight className="ml-2 size-4" /></Link>
                  </Button>
                  ):(
                    <Button className="w-full" disabled>
                    Currently unavailable<ArrowRight className="ml-2 size-4" />
                  </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
