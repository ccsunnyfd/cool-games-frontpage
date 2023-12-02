'use client'

import { FaXbox } from 'react-icons/fa'
import { FaApple } from 'react-icons/fa'
import { PiAndroidLogoFill } from 'react-icons/pi'
import { FaWindows } from 'react-icons/fa'
import { FaPlaystation } from 'react-icons/fa'
import Image from 'next/image'
import { useState } from 'react'

const actions = [
  {
    id: 1,
    category: ['action', 'shooter'],
    gameTitle: 'Grand Theft Auto V',
    imgUrl: '/images/action-1.jpg',
  },
  {
    id: 2,
    category: ['action', 'adventure'],
    gameTitle: 'The Witcher 3: Wild Hunt',
    imgUrl: '/images/action-2.jpg',
  },
  {
    id: 3,
    category: ['action', 'strategy', 'adventure'],
    gameTitle: 'Tomb Raider (2013)',
    imgUrl: '/images/action-3.jpg',
  },
  {
    id: 4,
    category: ['shooter', 'strategy', 'arcade'],
    gameTitle: 'Counter-Strike: Global Offensive',
    imgUrl: '/images/action-4.jpg',
  },
  {
    id: 5,
    category: ['action'],
    gameTitle: 'The Elder Scrolls V: Skyrim',
    imgUrl: '/images/action-5.jpg',
  },
  {
    id: 6,
    category: ['arcade', 'adventure'],
    gameTitle: `Sid Meier's Civilization`,
    imgUrl: '/images/action-6.jpg',
  },
  {
    id: 7,
    category: ['strategy'],
    gameTitle: 'Cities: Skylines',
    imgUrl: '/images/action-7.jpg',
  },
  {
    id: 8,
    category: ['action', 'adventure'],
    gameTitle: 'Left 4 Dead 2',
    imgUrl: '/images/action-8.jpg',
  },
  {
    id: 9,
    category: ['shooter', 'arcade', 'adventure'],
    gameTitle: `Dead Men's Army`,
    imgUrl: '/images/action-9.jpg',
  },
  {
    id: 10,
    category: ['action', 'adventure'],
    gameTitle: 'Injustice: Gods Among Us Ultimate Edition',
    imgUrl: '/images/action-10.jpg',
  },
  {
    id: 11,
    category: ['strategy', 'arcade'],
    gameTitle: 'Injustice: Gods Among Us Ultimate Edition',
    imgUrl: '/images/action-11.jpg',
  },
  {
    id: 12,
    category: ['strategy'],
    gameTitle: 'Minecraft',
    imgUrl: '/images/action-12.jpg',
  },
]

export const Index = () => {
  const [selectCategory, setSelectCategory] = useState<
    'action' | 'shooter' | 'strategy' | 'arcade' | 'adventure'
  >('action')

  return (
    <section className="sc-category py-16">
      <div className="container">
        <div className="mb-10 px-0 py-3 text-center font-poppins text-[32px] font-extrabold tracking-[.1em] text-white">
          <h3 className="relative uppercase">
            game <span className="text-green-normal">category</span>
          </h3>
          <div className="line"></div>
        </div>

        <div className="button-group mx-auto flex flex-wrap items-center justify-center">
          <button
            className={`${
              selectCategory === 'action' && 'bg-green-normal'
            } active::bg-green-noraml border-[1px] border-solid border-white px-[18px] py-2 text-[18px] font-medium uppercase tracking-[.08em] text-white lg:mx-[6px]`}
            onClick={() => setSelectCategory('action')}
          >
            action
          </button>
          <button
            className={`${
              selectCategory === 'shooter' && 'bg-green-normal'
            } border-[1px] border-solid border-white px-[18px] py-2 text-[18px] font-medium uppercase tracking-[.08em] text-white lg:mx-[6px]`}
            onClick={() => setSelectCategory('shooter')}
          >
            shooter
          </button>
          <button
            className={`${
              selectCategory === 'strategy' && 'bg-green-normal'
            } border-[1px] border-solid border-white px-[18px] py-2 text-[18px] font-medium uppercase tracking-[.08em] text-white lg:mx-[6px]`}
            onClick={() => setSelectCategory('strategy')}
          >
            strategy
          </button>
          <button
            className={`${
              selectCategory === 'arcade' && 'bg-green-normal'
            } border-[1px] border-solid border-white px-[18px] py-2 text-[18px] font-medium uppercase tracking-[.08em] text-white lg:mx-[6px]`}
            onClick={() => setSelectCategory('arcade')}
          >
            arcade
          </button>
          <button
            className={`${
              selectCategory === 'adventure' && 'bg-green-normal'
            } border-[1px] border-solid border-white px-[18px] py-2 text-[18px] font-medium uppercase tracking-[.08em] text-white lg:mx-[6px]`}
            onClick={() => setSelectCategory('adventure')}
          >
            adventure
          </button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {actions.map((action) => (
            <div
              key={action.id}
              className={`${
                action.category.includes(selectCategory) ? 'block' : 'hidden'
              } relative h-[370px] overflow-hidden
               shadow-category-item after:absolute after:left-0
               after:top-0 after:h-full after:w-full after:bg-gradient-to-b 
               after:from-black/[0.02] after:to-black/[0.92]`}
            >
              <div className="relative h-full w-full">
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src={action.imgUrl}
                  alt=""
                />
              </div>
              <div className="absolute bottom-0 left-4 right-4 z-10 mb-6 border-b-[1px] border-solid border-white">
                <div className="flex gap-2">
                  {action.category.map((c) => (
                    <div
                      key={c}
                      className="mb-[6px] inline-block bg-green-normal px-[6px] py-[2px] text-xs uppercase tracking-widest text-white"
                    >
                      {c}
                    </div>
                  ))}
                </div>
                <h3 className="mb-2 text-[18px] font-medium uppercase tracking-[.03em] text-white">
                  {action.gameTitle}
                </h3>
                <ul className="mb-[14px] flex">
                  <li className="me-3">
                    <FaPlaystation className="text-[12px] text-white" />
                  </li>
                  <li className="me-3">
                    <FaXbox className="text-[12px] text-white" />
                  </li>
                  <li className="me-3">
                    <FaApple className="text-[12px] text-white" />
                  </li>
                  <li className="me-3">
                    <FaWindows className="text-[12px] text-white" />
                  </li>
                  <li className="me-3">
                    <PiAndroidLogoFill className="text-[12px] text-white" />
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Index
