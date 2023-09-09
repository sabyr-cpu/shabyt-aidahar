import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const montserrat = Montserrat({subsets: ['cyrillic', 'latin'], style: ['normal','italic']});
export default function Introduction() {
  const backgroundImageUrl = '/background-radial-gradient.png'; // Replace with the actual image URL

  const containerStyles = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="flex flex-col items-center justify-center w-full sm:h-[100vh] bg-[#E6134C]">
      <div className="flex flex-col items-center justify-center w-full max-sm:pt-10 max-sm:pb-10 sm:h-[100vh]" style={containerStyles}>
        <h1 className={"text-white font-normal text-center max-sm:text-[30px] sm:text-[40px] md:text-[55px] lg:text-[65px] " + montserrat.className}>Что такое <b>AIDAHAR</b>?</h1>
        <p className={"ml-10 mr-10 md:max-w-[800px] lg:max-w-[1000px] text-white text-center text-[20px] sm:text-[30px] md:text-[36px] xl:text-[48px] font-normal leading-snug " + montserrat.className}>Это высокотехнологичный автономный робот, оснащенный искусственным интеллектом и специальными функциями для эффективного <b>противостояния пожарам и спасения людей.</b></p>
        <Image
          src="/aidahar_1.png"
          width={393}
          height={281}
          alt="AIDAHAR"
          className="w-[393px] h-auto"
        />
      </div>
    </div>
  )
}