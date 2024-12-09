import { ArrowRight, Check } from 'lucide-react';

import { Button } from '@/components/ui/button';

const Cta = () => {
  return (
    <section className="">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-accent p-6 md:flex-row lg:px-20 lg:py-16">
          <div className="w-full">
            <h4 className="mb-1 text-2xl font-bold md:text-3xl">
              Benefit
            </h4>
            <p className="text-muted-foreground">
              Keuntungan mengikuti program msib dengan TIMCorp
            </p>
            <Button className="mt-8 px-0 underline" variant={'link'}>
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
          <div className="w-full">
            <ul className="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Ilmu / pemahaman bidang yang di ikuti
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Penukaran 20 SKS kuliah
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Pengalaman
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Project capstone
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Sertifikat completion
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Sertifikat winner
              </li>
              <li className="flex items-center">
                <Check className="mr-4 size-5" />
                Sertifikat professional (Internasional)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;