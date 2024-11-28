import { Container, Main, Section } from '@/components/craft'
import React from 'react'
import Hero from './hero'
import Hero2 from './Hero2'
import Questions from './questions'

export default function page() {
  return (
    <div>
      <Hero/>
      <Hero2/>
      <Questions/>
    </div>
  )
}
