import Header from './header'
import Populars from './populars'
import GameSliders from './game-sliders'
import GamePosts from './game-posts'
import SCCategory from './sc-category'
import SCStores from './sc-stores'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center p-24">
    <>
      <Header />
      <Populars />
      <GameSliders />
      <section
        id="sc-join"
        className="relative flex min-h-[640px] items-center bg-join-image py-16 
                after:absolute after:bg-gradient-to-b after:from-black/50 after:to-black/50 after:bg-cover
                after:bg-center after:bg-no-repeat after:content-['']"
      >
        <div className="container w-full">
          <div className="mx-auto max-w-[600px] text-center text-white">
            <h2 className="text-[44px] font-bold uppercase tracking-[.09em]  [text-shadow:_0_4px_4px_0_#00000040]">
              join the{' '}
              <span className="font-right text-green-normal">community</span>
            </h2>
            <p className="py-2 text-xl font-normal">
              Join our Discord community which is in the making and made by
              gamers for gamers. All are welcome to join no matter the game you
              play, we&apos;re here to have a good.
            </p>
            <button type="button" className="section-btn mt-4">
              join discord
            </button>
          </div>
        </div>
      </section>

      <GamePosts />

      <SCCategory />

      <SCStores />
    </>
  )
}
