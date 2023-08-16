import React from 'react'
import FadeInSection from './Fadein-section-effect'
import { Quicksand } from 'next/font/google'


const quicksand = Quicksand({
  weight: '400',
  subsets: ['latin'],
})

export default function Landingpage() {
  return (
    <div className='hero-wrapper font-Quicksand' >
      <div className="intro-wrap">  
        <FadeInSection>
          <h1 className='hero-head'>Paradox</h1>
          <h1 className='hero-head pl-8 pt-4'></h1>
        </FadeInSection>
      </div>
    </div>
  )
}