import { H1, H3, P } from '@/components/typography/Typography'
import React from 'react'
import HeroAwsPartner from '../_public_components/hero-aws-partner'
import MapboxLocationViewer from '../_public_components/map'
import Contact from '../_public_components/contact'
import CTA from '../_public_components/subscribe-form'
import Image from 'next/image'
import office from '@/images/office.png'

export default function page() {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
      <H3 className="mb-4 text-center">Company Profile</H3>
      <H1 className='text-center text-primary'>PT Techno International Mandira</H1>
      <P className='text-muted-foreground'>PT TIM was established in 2010, and since 2021 we have added core business to provide cloud computing infrastructure services (consultancy, design, migration, implementation and operation support) and delivering AWS training and certification. PT TIM has become an official member of AWS Partner Network in Indonesia since 2022.</P>
      <Image width={500} height={500} alt='office' src={office} className='rounded-xl shadow-md'/>
      <HeroAwsPartner/>
      <MapboxLocationViewer latitude={-6.259741690596165} longitude={106.78175217951646}/>
      <CTA/>
      <Contact/>
    </div>
  )
}