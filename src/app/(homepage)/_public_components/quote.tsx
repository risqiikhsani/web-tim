'use client';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

const testimonials = [
  {
    text: 'Every Successful entrepeneur was once a beginner with a dream.',
    name: 'Bintang Juliarso',
    role: 'CEO - TIMCorp',
    avatar: '/profile/profile_bintang_juliarso.png',
  },
  {
    text:"The cloud is a critical component of modern technology stacks, and AWS has made innovation accessible to startups and enterprises alike",
    name:"Elon Musk",
    role:'CEO - Tesla and SpaceX',
    avatar:"/profile/elonmusk.png",
  },
  {
    text: "Amazon's AWS redefined the way businesses innovate, making technology infrastructure available at scale and on demand",
    name: 'Marc Benioff ',
    role: 'CEO - Salesforce',
    avatar: '/profile/marcbenioff.jpeg',
  },
  {
    text:"Amazon has built such an impressive cloud infrastructure with AWS that powers not just themselves but many other companies",
    name:"Mark Zuckerberg",
    role: 'CEO - Meta',
    avatar:"/profile/markzuckerberg.png"
  },
  {
    text: 'AWS has been a key partner in helping us scale our global streaming platform, providing unmatched reliability and innovation.',
    name: 'Reed Hastings',
    role: 'CEO - Netflix',
    avatar: '/profile/reedhastings.webp',
  },
  {
    text: 'We would want to continue on this key partnership with AWS to meet the goals of IBS digital transformation journey',
    name: 'Jason Hiscock',
    role: 'Vice President of IT Operations - IBS Software',
    avatar: '/profile/jasonhiscock.jpg',
  },
  {
    text:"AWS gives us the power to handle millions of guests and hosts across the globe with seamless performance.",
    name:"Brian Chesky",
    role:"CEO - Airbnb",
    avatar:"/profile/brianchesky.webp"
  },
  {
    text: 'Invention comes in many forms and at many scales. The most radical and transformative of inventions are often those that empower others to unleash their creativity - to pursue their dreams.',
    name: 'Jeffrey P.Bezos',
    role: 'Co Founder and CEO - Amazon.com, Inc',
    avatar: '/profile/jeffbezos2.webp',
  },

//   {
//     id: 'testimonial-3',
//     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.',
//     name: 'Customer Name',
//     role: 'Position at Company',
//     avatar: 'https://www.shadcnblocks.com/images/block/avatar-3.webp',
//   },
];

const Quote = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', updateCurrent);
    return () => {
      api.off('select', updateCurrent);
    };
  }, [api]);

  return (
    <div className="">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {testimonials.map((testimonial,index) => (
            <CarouselItem key={index}>
              <div className="container flex flex-col items-center text-center">
                <p className="mb-8 max-w-4xl font-medium md:px-8 lg:text-3xl">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <Avatar className="mb-2 size-12 md:size-24">
                  <AvatarImage src={testimonial.avatar} />
                  <AvatarFallback>{testimonial.name}</AvatarFallback>
                </Avatar>
                <p className="mb-1 text-sm font-medium md:text-lg">
                  {testimonial.name}
                </p>
                <p className="mb-2 text-sm text-muted-foreground md:text-lg">
                  {testimonial.role}
                </p>
                <div className="mt-2 flex items-center gap-0.5">
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                  <Star className="size-5 fill-primary stroke-none" />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="container flex justify-center py-16">
        {testimonials.map((testimonial, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => {
              api?.scrollTo(index);
            }}
          >
            <div
              className={`size-2.5 rounded-full ${index === current ? 'bg-primary' : 'bg-input'}`}
            />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Quote;
