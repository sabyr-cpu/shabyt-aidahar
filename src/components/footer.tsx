import Image from 'next/image'
import Link from 'next/link'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({subsets: ['cyrillic', 'latin'], style: ['normal','italic']});

export default function Footer() {
  return (
    <div className="">
      <div className="hidden lg:grid grid-cols-2 gap-2 p-[24px] bg-[#E6134C] h-[280px]">
        <div className="flex flex-row-reverse">
          <div className="">
            <Image src='/logo-white.svg' width={349} height={120} alt='Logo' />
            <div className={"text-[18px] mt-4 font-bold text-right " + montserrat.className}>shabytrobotics@gmail.com</div>
          </div>
        </div>
        <div className="flex flex-col pt-10 gap-8">
          <Link href="https://www.youtube.com/@shabytrobotics" className="">
            <Image src='/icon_youtube.svg' width={37} height={29.5} alt='Youtube' className='inline m-2'/>
            @shabytrobotics
          </Link>
          <Link href="https://instagram.com/shabytrobotics" className="">
            <Image src='/icon_instagram.svg' width={37} height={29.5} alt='Youtube' className='inline m-2'/>
            @shabytrobotics
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:hidden gap-2 bg-[#E6134C] h-[280px]">
        <Image src='/logo-white.svg' width={349} height={120} alt='Logo' className="w-[265px] h-[94px] md:w-[349px] md:h-[120px]" />
        <div className={"text-[18px] font-bold " + montserrat.className}>shabytrobotics@gmail.com</div>
        <Link href="https://www.youtube.com/@shabytrobotics" className="">
          <Image src='/icon_youtube.svg' width={37} height={29.5} alt='Youtube' className='inline m-2'/>
          @shabytrobotics
        </Link>
        <Link href="https://instagram.com/shabytrobotics" className="">
          <Image src='/icon_instagram.svg' width={37} height={29.5} alt='Youtube' className='inline m-2'/>
          @shabytrobotics
        </Link>
      </div>
    </div>
  )
}