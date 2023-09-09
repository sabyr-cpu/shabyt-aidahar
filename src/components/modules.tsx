'use client'
import { Montserrat } from 'next/font/google'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

const montserrat = Montserrat({subsets: ['cyrillic', 'latin'], style: ['normal','italic']});
export default function Modules() {
  const [hover, setHover] = useState(0) // can be 0, 1, 2
  const windowSize = useRef<[number | null, number | null]>([null, null]); // Initialize with null values

  useEffect(() => {
    // Access window.innerWidth and window.innerHeight only on the client-side
    windowSize.current = [window.innerWidth, window.innerHeight];
  }, []);
  return (
    <div className={"flex flex-col items-center justify-center w-full md:h-[100vh] bg-white " + montserrat.className}>
      <h1 className={"text-[40px] xs:text-[50px] lg:text-[60px] xl:text-[75px] text-[#E6134C] text-center mt-16 font-bold " + montserrat.className}>Модульная платформа</h1>
      <h2 className={"text-[20px] xs:text-[24px] lg:text-[28px] xl:text-[32px] text-black text-center font-bold " + montserrat.className}>AIDAHAR обладает модульной платформой что расширяет ее сценарии применения</h2>
      <div className="flex flex-col items-center pt-10 md:pt-20 w-full pb-10">
        <div className={"mb-3 transition-all " + hoverToPointerStyle(hover, windowSize)}>
          <Image src="/pointer.svg" alt="pointer" width={54*1.4} height={13*1.4} className="w-[54px] h-[13px] lg:w-[70px] lg:h-[17px]"/>
        </div>
        <div className="flex gap-2 xs:gap-5 lg:gap-10">
          <div className="cursor-pointer w-[100px] md:w-[150px] flex justify-center items-center" onMouseOver={()=>{setHover(0)}}>
            <Image alt="manipulator" src="/icon_manipulator.svg" width={150} height={150} className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]" />
          </div>
          <div className="cursor-pointer w-[100px] md:w-[150px] flex justify-center items-center" onMouseOver={()=>{setHover(1)}}>
            <Image alt="fire extinguisher" src="/icon_fireextinguisher.svg" width={150} height={150} className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]" />
          </div>
          <div className="cursor-pointer w-[100px] md:w-[150px] flex justify-center items-center" onMouseOver={()=>{setHover(2)}}>
            <Image alt="stretchers" src="/icon_stretchers.svg" width={150} height={150} className="h-[100px] w-[100px] lg:h-[150px] lg:w-[150px]" />
          </div>
        </div>
        <div className="text-2xl xs:text-3xl lg:text-4xl text-black mt-4 font-bold">{
          hover == 0 ? "Манипулятор" :
          hover == 1 ? "Огнетушитель" :
          hover == 2 ? "Носилки" :
          null
        }</div>
        <div className="text-2xl xs:text-3xl lg:text-4xl text-black mt-4 text-center md:w-[700px] xl:w-[800px]">{
          hover == 0 ? "Манипуляторный блок поможет AIDAHAR двигать препятствия и очищать путь себе и пожарным" :
          hover == 1 ? "Огнетушитель поможет AIDAHAR эффективно тушить пожары" :
          hover == 2 ? "Носилки помогут AIDAHAR выносить раненых из горящих зданий" :
          null
        }</div>
        <div className="hidden translate-x-0 translate-x-[-108px] translate-x-[108px]"></div>
        <div className="hidden translate-x-0 translate-x-[-120px] translate-x-[120px]"></div>
        <div className="hidden translate-x-0 translate-x-[-170px] translate-x-[170px]"></div>
        <div className="hidden translate-x-0 translate-x-[-190px] translate-x-[190px]"></div>
      </div>
    </div>
  )
}

function hoverToPointerStyle(hover: number, windowSize: any) {
  let translatepixels = 190
  if (windowSize.current[0] < 1024) {
    translatepixels = 170
  }
  if (windowSize.current[0] < 768) {
    translatepixels = 120
  }
  if (windowSize.current[0] < 425) {
    translatepixels = 108
  }
  if (hover === 0) {
    return `translate-x-[-${translatepixels}px]`
  } else if (hover === 1) {
    return "translate-x-0"
  } else {
    return `translate-x-[${translatepixels}px]`
  }
}