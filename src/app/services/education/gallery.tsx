import { H1, P } from '@/components/typography/Typography'
import Image from 'next/image'
import React from 'react'

export default function Gallery() {
  return (
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-col w-full mb-20 text-center">
      <H1>Gallery</H1>
      <P>Join us ! We provide you a professional training and no less of having fun experiences.</P>
    </div>
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap md:w-1/2 w-full">
        <div className="md:p-2 p-1 w-1/2">
          <Image width={500} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/msib_images/msib1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={500} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/msib_images/msib1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <Image width={500} height={500} alt="gallery" className="w-full h-full object-cover object-center block" src="/msib_images/msib1.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap md:w-1/2 w-full">
        <div className="md:p-2 p-1 w-full">
          <Image width={500} height={500} alt="gallery" className="w-full h-full object-cover object-center block" src="/msib_images/msib1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={500} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/msib_images/msib1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <Image width={500} height={500} alt="gallery" className="w-full object-cover h-full object-center block" src="/msib_images/msib1.jpg"/>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
