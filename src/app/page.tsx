'use client'

import Image from 'next/image'
import TitleSlide from '../components/titleslide'
import Introduction from '../components/introduction'
import Characteristics from '../components/characteristics'
import Modules from '../components/modules'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <TitleSlide />
      <Introduction />
      <Characteristics />
      <Modules />
      <Footer />
    </>
  )
}
