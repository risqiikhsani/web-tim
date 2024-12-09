import React from 'react'
import Services from '../_public_components/services'
import Waf from '../_public_components/waf'
import CtaOffer from '../_public_components/cta-offer'

export default function Page() {
  return (
    <div>
      <Services/>
      <Waf/>
      <CtaOffer offer='We are ready to help your business right away.'/>
    </div>
  )
}
