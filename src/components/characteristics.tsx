import { Montserrat } from 'next/font/google'
import Image from 'next/image'

const montserrat = Montserrat({subsets: ['cyrillic', 'latin'], style: ['normal','italic']});
export default function Characteristics() {
  return (
    <div className="flex flex-col items-center justify-center w-full md:h-[100vh] bg-white">
      <h1 className={"text-[35px] xs:text-[40px] md:text-[65px] xl:text-[75px] text-[#E6134C] text-center mt-8 xs:mt-16 font-bold " + montserrat.className}>Характеристики</h1>
      <div className="flex flex-col items-center justify-center w-full md:h-[100vh]">
        <div className="hidden h-[300px] md:flex text-black flex-row justify-center w-full gap-4">
          <div className="flex flex-col justify-between max-w-[200px] min-[840px]:max-w-[300px] xl:max-w-[400px]">
            <div className={"font-normal h-[80px] flex justify-end items-center text-[24px] xl:text-[30px] " + montserrat.className}>
              <span className="text-right">
                Материал: <b>сталь</b>
              </span>
            </div>
            <div className={"font-normal h-[80px] flex justify-end items-center text-[24px] xl:text-[30px] " + montserrat.className}>
              <span className="text-right">
                Грузоподъемность: <b>до 250 кг</b>
              </span>
            </div>
            <div className={"font-normal h-[80px] flex justify-end items-center text-[24px] xl:text-[30px] " + montserrat.className}>
              <span className="text-right">
                Максимальная скорость: <b>12 км/ч</b>
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex gap-6">
              <Image src='icon_gear.svg' width={100} height={100} alt='Gear' className="h-[80px] w-[80px]" />
              <Image src='icon_weight.svg' width={100} height={100} alt='Weight' className="h-[80px] w-[80px]" />
            </div>
            <div className="flex gap-6">
              <Image src='icon_truck.svg' width={100} height={100} alt='Truck' className="h-[80px] w-[80px]" />
              <Image src='icon_temperature.svg' width={100} height={100} alt='Temperature' className="h-[80px] w-[80px]" />
            </div>
            <div className="flex gap-6">
              <Image src='icon_speed.svg' width={100} height={100} alt='Speed' className="h-[80px] w-[80px]" />
              <Image src='icon_clock.svg' width={100} height={100} alt='Clock' className="h-[80px] w-[80px]" />
            </div>
          </div>
          <div className="flex flex-col justify-between max-w-[200px] min-[840px]:max-w-[300px] xl:max-w-[400px]">
            <div className={"font-normal text-[24px] xl:text-[30px] h-[80px] flex justify-start items-center " + montserrat.className}>
              <span>
                Вес: <b>55 кг</b>
              </span>
            </div>
            <div className={"font-normal text-[24px] xl:text-[30px] h-[80px] flex justify-start items-center " + montserrat.className}>
              <span>
                Операционная температура: <b>600-700˚C</b>
              </span>
            </div>
            <div className={"font-normal text-[24px] xl:text-[30px] h-[80px] flex justify-start items-center " + montserrat.className}>
              <span>
                Операционная время: <b>7 часов</b>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:hidden gap-5 items-center text-black">
          <Image src='icon_gear.svg' width={100} height={100} alt='Gear' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center flex justify-center items-center text-[24px] xl:text-[30px] " + montserrat.className}>
            <span className="">
              Материал: <b>сталь</b>
            </span>
          </div>
          <Image src='icon_truck.svg' width={100} height={100} alt='Truck' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center flex justify-center items-center text-[24px] xl:text-[30px] " + montserrat.className}>
            <span className="">
              Грузоподъемность: <b>до 250 кг</b>
            </span>
          </div>
          <Image src='icon_speed.svg' width={100} height={100} alt='Speed' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center flex justify-center items-center text-[24px] xl:text-[30px] " + montserrat.className}>
            <span className="">
              Максимальная скорость: <b>12 км/ч</b>
            </span>
          </div>
          <Image src='icon_weight.svg' width={100} height={100} alt='Weight' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center text-[24px] xl:text-[30px] flex justify-start items-center " + montserrat.className}>
            <span>
              Вес: <b>55 кг</b>
            </span>
          </div>
          <Image src='icon_temperature.svg' width={100} height={100} alt='Temperature' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center text-[24px] xl:text-[30px] flex justify-start items-center " + montserrat.className}>
            <span>
              Операционная температура: <b>600-700˚C</b>
            </span>
          </div>
          <Image src='icon_clock.svg' width={100} height={100} alt='Clock' className="h-[80px] w-[80px]" />
          <div className={"font-normal text-center text-[24px] xl:text-[30px] flex justify-start items-center " + montserrat.className}>
            <span>
              Операционная время: <b>7 часов</b>
            </span>
          </div>
          
        </div>
      </div>
    </div>
  )
}