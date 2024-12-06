import HeroCloudSolutions from '@/app/_public_components/hero-cloud-solutions'
import React from 'react'
import Feature from './feature'
import Quote from '@/app/_public_components/quote'
import CtaOffer from '@/app/_public_components/cta-offer'
import Waf from '@/app/_public_components/waf'

export default function page() {
  return (
    <div>
      <HeroCloudSolutions showReadMore={false}/>
      <Feature/>
      <Waf/>
      <Quote/>
      <CtaOffer offer='Let us design a cloud solution tailored for your business needs. Get started today!'/>
    </div>
  )
}
