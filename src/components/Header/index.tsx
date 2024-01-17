'use client'

import { useState } from 'react'
import { Menu } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { NavBar } from './Nav'

export function Header() {
  const [isOpenHeader, setIsOpenHeader] = useState(false)

  return (
    <header className="fixed w-full top-0 bg-gray-850  text-neutral-50 z-50">
      <div className="relative max-w-[1116px] mx-auto py-1 px-4 flex justify-between items-center h-20 border-b border-gray-500 lg:border-none">
        <h1 className="text-2xl">
          Viniciussls<span className="text-4xl text-blue-550">.</span>
        </h1>

        <NavBar />

        <button className="hidden lg:block bg-transparent p-2 rounded-lg border border-blue-550 font-medium text-xs w-28 hover:bg-blue-550 transition-colors duration-500 ">
          Contact Me
        </button>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpenHeader((state) => !state)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <div
          className={twMerge(
            'lg:hidden w-screen bg-gray-850 h-screen top-0 right-0 -z-10 pt-2 pb-10',
            `${isOpenHeader ? 'fixed' : 'hidden'}`,
          )}
        >
          <div className="w-full h-full flex justify-around items-center flex-col">
            <NavBar variant="mobile" />
            <button className="bg-transparent p-2 rounded-lg border border-blue-550 font-medium text-xs w-28 hover:bg-blue-550 transition-colors duration-500">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
