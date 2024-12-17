import { H1, H3, P } from '@/components/typography/Typography'
import React from 'react'
import HeroAwsPartner from '../_public_components/hero-aws-partner'
import Contact from '../_public_components/contact'

import Image from 'next/image'
import office from '@/images/office.png'
import CTA from '../_public_components/cta'
import HeroAwsPartner2 from '../_public_components/hero-aws-partner-2'
import GoogleMap from '../_public_components/google-map'

export default function page() {
  return (
    <div className=''>
      <H3 className="mb-4 text-center">Company Profile</H3>
      <H1 className='text-center text-primary'>PT Techno International Mandira</H1>
      <P className='text-muted-foreground'>PT TIM was established in 2010, and since 2021 we have added core business to provide cloud computing infrastructure services (consultancy, design, migration, implementation and operation support) and delivering AWS training and certification. PT TIM has become an official member of AWS Partner Network in Indonesia since 2022.</P>
      <Image width={500} height={500} alt='office' src={office} className='rounded-xl shadow-md mx-auto'/>
      <HeroAwsPartner showMasterLogo={false}/>
      <HeroAwsPartner2/>
      <GoogleMap/>
      <CTA/>
      <Contact/>
    </div>
  )
}
