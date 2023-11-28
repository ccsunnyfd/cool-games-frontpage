'use client'

import Link from 'next/link'
import { FaRss } from 'react-icons/fa'
import { FaSteamSymbol } from 'react-icons/fa'
import { PiTwitchLogoFill } from 'react-icons/pi'
import { FaYoutube } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { useState } from 'react'

const Menu = () => {
  const [showNavbar, setShowNavbar] = useState<Boolean>(false)

  return (
    <div className="lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center justify-between">
        <Link
          href="#"
          className="whitespace-nowrap text-[32px] font-bold uppercase text-white"
        >
          cool<span className="text-green-normal">games</span>
        </Link>
        <button
          type="button"
          className="text-2xl text-white lg:hidden"
          id="navbar-show-btn"
          onClick={() => setShowNavbar(true)}
        >
          <FaBars />
        </button>
      </div>

      <div
        id="navbar-collapse"
        className={`${
          !showNavbar && 'translate-x-full'
        } shadow-nav-collapse fixed right-0 top-0 h-full w-full transform bg-white px-5 pb-4 pt-[60px] text-center transition duration-300 ease-in-out sm:w-[280px] lg:relative lg:flex lg:w-full lg:translate-x-0 lg:items-center lg:justify-end lg:bg-transparent lg:p-0 lg:shadow-none`}
      >
        <button
          type="button"
          className="lg:hidden"
          id="navbar-hide-btn"
          onClick={() => setShowNavbar(false)}
        >
          <FaXmark className="text-2xl" />
        </button>

        <ul className="lg:flex">
          <li className="border-b-[1px] border-solid border-black/10 px-0 py-[10px] lg:ms-[6px]">
            <Link
              href="#"
              className="text-violet-dark-active hover:text-pink-normal xl:px-4; font-semibold uppercase tracking-[2px] transition duration-300 ease-in-out lg:px-[10px] lg:py-[1px] lg:text-white"
            >
              home
            </Link>
          </li>
          <li className="border-b-[1px] border-solid border-black/10 px-0 py-[10px] lg:ms-[6px]">
            <Link
              href="#"
              className="text-violet-dark-active hover:text-pink-normal xl:px-4; font-semibold uppercase tracking-[2px] transition duration-300 ease-in-out lg:px-[10px] lg:py-[1px] lg:text-white"
            >
              creators
            </Link>
          </li>
          <li className="border-b-[1px] border-solid border-black/10 px-0 py-[10px] lg:ms-[6px]">
            <Link
              href="#"
              className="text-violet-dark-active hover:text-pink-normal xl:px-4; font-semibold uppercase tracking-[2px] transition duration-300 ease-in-out lg:px-[10px] lg:py-[1px] lg:text-white"
            >
              stores
            </Link>
          </li>
          <li className="border-b-[1px] border-solid border-black/10 px-0 py-[10px] lg:ms-[6px]">
            <Link
              href="#"
              className="text-violet-dark-active hover:text-pink-normal xl:px-4; font-semibold uppercase tracking-[2px] transition duration-300 ease-in-out lg:px-[10px] lg:py-[1px] lg:text-white"
            >
              games
            </Link>
          </li>
        </ul>

        <ul className="mt-6 flex flex-wrap items-center justify-center lg:ms-10 lg:mt-0 lg:flex-nowrap lg:text-white xl:ms-[88px]">
          <li className="mb-3 w-full font-bold uppercase tracking-[2px] opacity-90 lg:mb-0 lg:me-8 lg:w-auto">
            connect
          </li>

          <li>
            <Link
              href="#"
              className="flex items-center justify-center px-2 py-[6px] transition duration-300 ease-in-out hover:opacity-90 lg:text-white lg:invert"
            >
              <FaRss className="text-violet-darker text-[16px]" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="lg:text-violet-dark-active flex items-center justify-center px-2 py-[6px] transition duration-300 ease-in-out hover:opacity-90 lg:invert"
            >
              <FaSteamSymbol className="text-violet-darker text-[17px]" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="lg:text-violet-dark-active flex items-center justify-center px-2 py-[6px] transition duration-300 ease-in-out hover:opacity-90 lg:invert"
            >
              <PiTwitchLogoFill className="text-violet-darker text-[17px]" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="lg:text-violet-dark-active flex items-center justify-center px-2 py-[6px] transition duration-300 ease-in-out hover:opacity-90 lg:invert"
            >
              <FaYoutube className="text-violet-darker text-[18px]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu
