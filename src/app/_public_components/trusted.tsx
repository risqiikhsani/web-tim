'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';

const logos = [
  {
    id: 'logo-1',
    description: 'Logo 1',
    image: 'https://www.shadcnblocks.com/images/block/logos/astro.svg',
  },
  {
    id: 'logo-2',
    description: 'Logo 2',
    image: 'https://www.shadcnblocks.com/images/block/logos/figma.svg',
  },
  {
    id: 'logo-3',
    description: 'Logo 3',
    image: 'https://www.shadcnblocks.com/images/block/logos/nextjs.svg',
  },
  {
    id: 'logo-4',
    description: 'Logo 4',
    image: 'https://www.shadcnblocks.com/images/block/logos/react.png',
  },
  {
    id: 'logo-5',
    description: 'Logo 5',
    image: 'https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg',
  },
  {
    id: 'logo-6',
    description: 'Logo 6',
    image: 'https://www.shadcnblocks.com/images/block/logos/supabase.svg',
  },
  {
    id: 'logo-7',
    description: 'Logo 7',
    image: 'https://www.shadcnblocks.com/images/block/logos/tailwind.svg',
  },
  {
    id: 'logo-8',
    description: 'Logo 8',
    image: 'https://www.shadcnblocks.com/images/block/logos/vercel.svg',
  },
];

const Trusted = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-pretty max-w-2xl">
            Trusted by these companies
          </h1>
        </div>
        <div className="mt-8 sm:mt-12 md:mt-16">
          <div className="relative">
            <Carousel
              opts={{ 
                loop: true,
                dragFree: true, // Allows smoother scrolling on mobile
              }}
              plugins={[AutoScroll({ 
                playOnInit: true,
                speed: 1, // Adjust speed for better mobile experience
              })]}
            >
              <CarouselContent className="ml-0 -mx-2 sm:-mx-4 dark:invert">
                {logos.map((logo) => (
                  <CarouselItem
                    key={logo.id}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-2 sm:pl-4 pr-2 sm:pr-4"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        height={100}
                        width={100}
                        src={logo.image}
                        alt={logo.description}
                        className="h-6 sm:h-8 w-auto max-w-[120px] opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Gradient overlays - less prominent on mobile */}
            <div className="hidden sm:block absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
            <div className="hidden sm:block absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;