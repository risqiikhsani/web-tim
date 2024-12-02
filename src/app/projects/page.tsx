import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <section className="py-32">
      <div className="container flex flex-col gap-16 lg:px-16">
        <div className="lg:max-w-sm">
          <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
            Company Projects
          </h2>
          <p className="mb-8 text-muted-foreground lg:text-lg">
            List of internal projects we're working on.
          </p>
          <a
            href="#"
            className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
          >
            Book a demo{" "}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          <div className="flex flex-col text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                width={1000}
                height={1000}
                src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                alt="Feature 1"
                className="aspect-[16/9] size-full object-cover object-center"
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Feature 1
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                imperdiet magna nec massa consectetur, id interdum ante congue.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse text-clip rounded-xl border border-border md:col-span-2 md:grid md:grid-cols-2 md:gap-6 lg:gap-8">
            <div className="flex flex-col justify-center px-6 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
              <h3 className="mb-3 text-lg font-semibold md:mb-4 md:text-2xl lg:mb-6">
                Feature 2
              </h3>
              <p className="text-muted-foreground lg:text-lg">
                Nam vitae molestie arcu. Quisque eu libero orci. Aliquam
                imperdiet magna nec massa consectetur, id interdum ante congue.
              </p>
            </div>
            <div className="md:min-h-96 lg:min-h-[28rem] xl:min-h-[32rem]">
              <Image
                width={1000}
                height={1000}
                src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
                alt="Feature 2"
                className="aspect-[16/9] size-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;