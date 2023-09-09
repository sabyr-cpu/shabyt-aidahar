'use client'

import Image from 'next/image'
import TitleSlide from '../components/titleslide'
import Introduction from '../components/introduction'
import Characteristics from '../components/characteristics'
import Modules from '../components/modules'
import Footer from '../components/footer'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Shabyt Robotics</title>
        <meta name="description" content="Shabyt Robotics official web-site" />
      </Head>
      <TitleSlide />
      <Introduction />
      <Characteristics />
      <Modules />
      <Footer />
    </>
  )
}
