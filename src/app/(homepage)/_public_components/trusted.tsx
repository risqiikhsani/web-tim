'use client';

import AutoScroll from 'embla-carousel-auto-scroll';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { H1 } from '@/components/typography/Typography';

const logos = [
  {
    name:"aha",
    image: '/consumers/aha.png',
  },
  {
    name:"airlangga",
    image: '/consumers/airlangga.png',
  },
  {
    name:"del",
    image: '/consumers/del.png',
  },
  {
    name:"gunadarma",
    image: '/consumers/gunadarma.png',
  },
  {
    name:"indosat",
    image: '/consumers/indosat.png',
  },
  {
    name:"ksw",
    image: '/consumers/ksw.png',
  },
  {
    name:"ombudsman",
    image: '/consumers/ombudsman.png',
  },
  {
    name:"pnj",
    image: '/consumers/pnj.jpg',
  },
  {
    name:"pnl",
    image: '/consumers/pnl.png',
  },
  {
    name:"sbpm",
    image: '/consumers/sbpm.png',
  },
  {
    name:"siwijaya",
    image: '/consumers/siwijaya.png',
  },
  {
    name:"sttnf",
    image: '/consumers/sttnf.png',
  },
  {
    name:"telkomakses",
    image: '/consumers/telkomakses.webp',
  },
  {
    name:"telkomsel",
    image: '/consumers/telkomsel.jpg',
  },
  {
    name:"udayana",
    image: '/consumers/udayana.png',
  },
  {
    name:"ugm",
    image: '/consumers/ugm.png',
  },
  {
    name:"umy",
    image: '/consumers/umy.png',
  },
  {
    name:"unesa",
    image: '/consumers/unesa.jpg',
  },
];

const Trusted = () => {
  return (
    <section className="py-10">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <H1 className="capitalize">
            Company worked with us
          </H1>
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
                {logos.map((logo,index) => (
                  <CarouselItem
                    key={index}
                    className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 pl-2 sm:pl-4 pr-2 sm:pr-4"
                  >
                    <div className="flex items-center justify-center">
                      <Image
                        height={400}
                        width={400}
                        src={logo.image}
                        alt={logo.name}
                        className="w-auto max-w-[120px]  transition-opacity"
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