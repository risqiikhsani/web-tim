import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CtaOffer = ({offer}:{offer:string}) => {
  return (
    <div className="">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-16">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Call to Action
            </h3>
            <p className="text-muted-foreground lg:text-lg">
              {offer}
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outline" asChild>
                <Link href="/about">About Us</Link>
            </Button>
            <Button asChild>
                <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaOffer;
