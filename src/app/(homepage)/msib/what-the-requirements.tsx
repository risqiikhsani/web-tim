import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

const WhatTheRequirements = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              Requirements
            </h4>
            <p className="text-muted-foreground">
                Syarat / requirements untuk bergabung 
            </p>
            <Button className="mt-8 px-0 underline" variant={'link'}>
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="w-full">
            <ul className="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Laptop dan koneksi internet
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Basic bahasa inggris
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Passion dalam mempelajari teknologi
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatTheRequirements;
