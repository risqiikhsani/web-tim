import React from 'react'
import CreateForm from './create-form'
import { H1 } from '@/components/typography/Typography'

export default function page() {
  return (
    <div>
        <H1>Create News</H1>
        <CreateForm/>
    </div>
  )
}
