import HeroCloudConsulting from '@/app/_public_components/hero-cloud-consulting'
import React from 'react'
import Feature from './feature'
import Quote from '@/app/_public_components/quote'
import CtaOffer from '@/app/_public_components/cta-offer'
import Waf from '@/app/_public_components/waf'

export default function page() {
  return (
    <div>
      <HeroCloudConsulting showReadMore={false}/>
      <Feature/>
      <Waf/>
      <Quote/>
      <CtaOffer offer="Ready to transform your business with AWS? Contact us for a consultation!"/>
    </div>
  )
}
