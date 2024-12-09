
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    name: "Tani Pintar",
    description: "Hello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello there",
    url: "www.google.com",
    image: "/images/aws1.jpg",
  },
  {
    name: "Something",
    description: "Hello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello there",
    url: "www.google.com",
    image: "/images/aws1.jpg",
  },
  {
    name: "Something",
    description: "Hello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello thereHello there",
    url: "www.google.com",
    image: "/images/aws1.jpg",
  },
];

const Page = () => {
  return (
    <section>
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Company Projects / Startups
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            List of internal projects we are working on.
          </p>
        </div>
        <div className="gap-6 lg:gap-10 container mx-auto flex flex-col">
          {data.map((a, i) => (
            <div
              key={i}
              className={`flex shadow-xl flex-col md:flex-row text-clip rounded-xl border border-border md:gap-6 lg:gap-8 ${
                i % 2 === 0 ? "md:flex-row-reverse " : ""
              }`} // Reverses the order for even indices
            >
              <div className="">
                <Image
                  width={1200}
                  height={1200}
                  src={a.image}
                  alt="Feature 1"
                  className="aspect-[16/9] size-full object-cover object-center rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center p-2 md:p-10">
                <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                  {a.name}
                </h3>
                <p className="text-muted-foreground lg:text-lg">
                  {a.description}
                </p>
                <Link href={a.url} target="_blank">
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
