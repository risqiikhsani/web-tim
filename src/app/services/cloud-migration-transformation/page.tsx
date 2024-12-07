import HeroCloudMigration from '@/app/_public_components/hero-cloud-migration'
import React from 'react'
import Feature from './feature'
import Quote from '@/app/_public_components/quote'
import CtaOffer from '@/app/_public_components/cta-offer'
import Waf from '@/app/_public_components/waf'
import CoolHero from '@/app/_public_components/cool-hero'

export default function page() {
  return (
    <div>
      <CoolHero title='Welcome to MergingHUB'/>
      <HeroCloudMigration showReadMore={false}/>
      <Feature/>
      <Waf/>
      <Quote/>
      <CtaOffer offer='Ready to move to AWS? Let us handle your migration with zero disruptions. Contact us now!'/>
    </div>
  )
}
