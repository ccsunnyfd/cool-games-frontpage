import Image from 'next/image'
import { IoEyeSharp } from 'react-icons/io5'
import { FaRegMessage } from 'react-icons/fa6'
import Link from 'next/link'

const posts = [
  {
    id: 1,
    imgUrl: '/images/game-7.png',
    title: 'My Time At Sandrock Knives Out Update Release Date Revealed.',
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
  {
    id: 2,
    imgUrl: '/images/game-8.png',
    title: 'Tekken 8 Ling Xiaoyu Trailer Lets The Dancing Phoenix Loose',
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
  {
    id: 3,
    imgUrl: '/images/game-9.png',
    title: 'Promising Action RPG Rise of Rebellion Getting Playable Demo',
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
  {
    id: 4,
    imgUrl: '/images/game-10.png',
    title: `Total War: Warhammer 3 Chaos Dwarfs DLC Shows Zhatan's ...`,
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
  {
    id: 5,
    imgUrl: '/images/game-11.png',
    title: `Nobunaga's Ambition: Awakening Is Heading West In July`,
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
  {
    id: 6,
    imgUrl: '/images/game-12.png',
    title: 'Cyberpunk 2077 Phantom Liberty Promotion Starts in June as CD',
    date: 'March 31, 2023 7:46 AM',
    para: 'The upcoming My Time at Sandrock Knives Out update now has a release date. The update, which adds a marriage system, new story content, and lots more, is scheduled to arrive ...',
    seens: 23,
    messages: 45,
  },
]

const index = () => {
  return (
    <section id="sc-posts" className="bg-violet-dark-active py-16">
      <div className="container">
        <div className="mb-10 px-0 py-3 text-center font-poppins text-[32px] font-extrabold tracking-[.1em] text-white">
          <h3 className="relative uppercase">
            latest <span className="text-pink-normal">posts</span>
          </h3>
          <div
            id="line"
            className="relative mx-auto mt-4 h-[6px] w-[160px] bg-green-normal before:absolute 
                            before:right-[-5px] before:border-b-[3.5px] before:border-l-[6px] before:border-t-[3.5px] before:border-solid before:border-b-transparent 
                            before:border-l-green-normal before:border-t-transparent before:content-['']
                            after:absolute after:left-[-5px] after:border-b-[3.5px] after:border-r-[6px] after:border-t-[3.5px]
                            after:border-solid after:border-b-transparent after:border-r-green-normal after:border-t-transparent after:content-['']"
          ></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} id="game-post">
              <div id="game-post-img" className="relative h-[235px] w-[390px]">
                <Image
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  referrerPolicy="no-referrer"
                  src={post.imgUrl}
                  alt=""
                />
              </div>
              <div className="bg-violet-dark-hover px-7 py-4 text-white">
                <h3 className="border-b-[1px] border-b-violet-dark-hover pb-3 text-[20px] font-bold tracking-wide text-white">
                  {post.title}
                </h3>

                <div className="mt-[10px] flex items-center justify-between">
                  <span className="text-[13px] font-normal">{post.date}</span>
                  <p className="text-[13px]">
                    By:{' '}
                    <span className="font-semibold text-green-normal">
                      Joseph Allen
                    </span>{' '}
                  </p>
                </div>
                <p className="mb-6 mt-5 text-base leading-[1.4] text-white">
                  {post.para}
                </p>

                <div className="flex items-center justify-between">
                  <Link href="#" className="btn-secondary mt-0 uppercase">
                    read more
                  </Link>
                  <div className="flex items-center">
                    <span className="me-[25px] flex text-[13px] font-bold">
                      <IoEyeSharp className="me-2 text-[20px] text-green-normal" />{' '}
                      {post.seens}
                    </span>
                    <span className="flex text-[13px] font-bold">
                      <FaRegMessage className="me-2 text-[14px] text-green-normal" />{' '}
                      {post.messages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[60px] flex justify-center">
          <Link href="#" className="section-btn">
            see more blogs
          </Link>
        </div>
      </div>
    </section>
  )
}

export default index
