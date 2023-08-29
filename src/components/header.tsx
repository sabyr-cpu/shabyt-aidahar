import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="flex items-center justify-center w-full h-24 bg-gray-900">
      <Link href="/">
        <span className="flex items-center justify-center w-24 h-24">
          <Image
            src="/logo-white.svg"
            alt="Logo"
            width={24}
            height={24}
            className="w-24 h-24"
          />
        </span>
      </Link>
    </header>
  )
}

