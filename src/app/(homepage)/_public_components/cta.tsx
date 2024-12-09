import React from 'react'
import SubscribeForm from './subscribe-form'
import MessageForm from './message-form'

export default function CTA() {
  return (
    <div className='flex gap-2 justify-around items-center border-t-2 border-primary p-10 flex-col md:flex-row'>
        <SubscribeForm/>
        <MessageForm/>
    </div>
  )
}
