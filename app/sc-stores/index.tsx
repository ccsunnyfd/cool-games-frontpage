import Image from 'next/image'

const stores = [
  {
    id: 1,
    imgUrl: '/images/store-1.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
  {
    id: 2,
    imgUrl: '/images/store-2.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
  {
    id: 3,
    imgUrl: '/images/store-3.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
  {
    id: 4,
    imgUrl: '/images/store-4.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
  {
    id: 5,
    imgUrl: '/images/store-5.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
  {
    id: 6,
    imgUrl: '/images/store-6.png',
    name: 'Playstation Store',
    domain: 'store.playstation.com',
    gamesCount: 687,
  },
]

const index = () => {
  return (
    <section id="sc-stores" className="bg-violet-darker py-16">
      <div className="container">
        <div className="mb-10 px-0 py-3 text-center font-poppins text-[32px] font-extrabold tracking-[.1em] text-white">
          <h3 className="relative uppercase">
            game <span className="text-green-normal">store</span>
          </h3>
          <div className="line"></div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {stores.map((store) => (
            <div key={store.id} className="group grid grid-cols-[2fr_3fr]">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src={store.imgUrl}
                  alt=""
                />
              </div>
              <div className="flex flex-col items-start justify-center bg-white px-4 py-7 hover:bg-green-normal">
                <h3 className="mb-2 font-bold uppercase tracking-[.04em] text-violet-darker transition duration-300 ease-in-out group-hover:text-white">
                  {store.name}
                </h3>
                <ul>
                  <li className="flex text-dark transition duration-300 ease-in-out group-hover:text-white">
                    <span className="me-1 font-bold">Domain:</span>
                    <span>{store.domain}</span>
                  </li>
                  <li className="flex text-dark transition duration-300 ease-in-out group-hover:text-white">
                    <span className="me-1 font-bold">Games Count:</span>
                    <span>{store.gamesCount}</span>
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

export default index
