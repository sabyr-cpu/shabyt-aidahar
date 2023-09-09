import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full h-[123px] bg-[#E6134C]">
      <Link href="/">
        <span className="flex items-center justify-center w-[233px] h-[83px]">
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={233}
            height={83}
            className="w-[233px] h-[83px]"
          />
        </span>
      </Link>
    </header>
  )
}

