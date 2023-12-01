import Image from 'next/image'
import Rating from './Rating'
import { FaStar } from 'react-icons/fa'
import Link from 'next/link'

const games = [
  {
    id: 1,
    imageUrl: '/images/game-1.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 4.5,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
  {
    id: 2,
    imageUrl: '/images/game-2.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 3.5,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
  {
    id: 3,
    imageUrl: '/images/game-3.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 4,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
  {
    id: 4,
    imageUrl: '/images/game-4.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 5,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
  {
    id: 5,
    imageUrl: '/images/game-5.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 3.5,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
  {
    id: 6,
    imageUrl: '/images/game-6.png',
    ratings: 241,
    title: 'Minecraft Legends',
    desc: 'Minecraft Legends, a real-time strategy action ...',
    stars: 0.5,
    releaseDate: '07.12.2015',
    category: 'Action | Desktop',
  },
]

const index = () => {
  return (
    <section className="bg-violet-dark-active py-16">
      <div className="container">
        <div className="mb-10 px-0 py-3 text-center font-poppins text-[32px] font-extrabold tracking-[.1em] text-white">
          <h3 className="relative uppercase">
            top popular <span className="text-pink-normal">games</span>
          </h3>
          <div
            className="relative mx-auto mt-4 h-[6px] w-[160px] bg-green-normal before:absolute before:right-[-5px] 
                before:border-b-[3.5px] before:border-l-[6px] before:border-t-[3.5px] before:border-solid before:border-b-transparent before:border-l-green-normal before:border-t-transparent before:content-[''] after:absolute
                after:left-[-5px] after:border-b-[3.5px] after:border-r-[6px] after:border-t-[3.5px] after:border-solid after:border-b-transparent after:border-r-green-normal after:border-t-transparent after:content-['']"
          />
        </div>

        <div
          id="game-card-list "
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {games.map((game) => (
            <div key={game.id} id="game-card" className="flex flex-col">
              <div
                className="to-black/27 relative h-[280px] overflow-hidden 
                        bg-gradient-to-t from-black to-[92.08%]
                        after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-gradient-to-b
                        after:from-black/0 after:to-black/100 after:content-['']"
              >
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src={game.imageUrl}
                  alt=""
                  className="px-[2px] py-0"
                />

                <div className="absolute bottom-[10px] left-[18px] z-10 flex rounded-2xl bg-white px-3 py-[2px] text-[14px] font-bold">
                  {game.ratings}
                  <FaStar className="ms-2 text-[19px]" />
                </div>
              </div>
              <div className="flex-1 bg-violet-light px-[18px] py-5">
                <div className="flex flex-col flex-wrap items-start justify-between sm:flex-row">
                  <div className="py-1">
                    <h4 className="mb-[10px] font-poppins text-[18px] font-extrabold uppercase tracking-[.06em] text-white">
                      {game.title}
                    </h4>
                    <p className="text-base font-normal text-white/90">
                      {game.desc}
                    </p>
                  </div>
                  <div className="mt-2 flex py-1 sm:mt-0">
                    <Rating stars={game.stars} />
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div className="pt-3 text-[14px] text-white/60">
                    <div className="flex items-center">
                      <p className="font-semibold">Release Date: &nbsp;</p>
                      <p>{game.releaseDate}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">Updated: &nbsp;</p>
                      <p>{game.category}</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Link
                      href="#"
                      className="mt-4 inline-flex h-[34px] min-w-[108px] items-center 
                    border-[1px] border-solid border-green-normal bg-transparent
                    px-4 py-0 text-center font-semibold uppercase tracking-[.03em] text-white
                      transition duration-300 ease-in-out hover:bg-green-normal"
                    >
                      see more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[60px] flex justify-center">
          <Link href="#" className="section-btn">
            see more games
          </Link>
        </div>
      </div>
    </section>
  )
}

export default index
