import { H1 } from '@/components/typography/Typography'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
        <H1>Not Authorized</H1>
      <Button variant="link"><Link href="/dashboard">Go bach to dashboard</Link></Button>
    </div>
  )
}
