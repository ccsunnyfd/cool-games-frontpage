import { GiConsoleController } from 'react-icons/gi'
import Menu from './Menu'

const index = () => {
  return (
    <header className="header">
      <nav className="fixed left-0 top-0 z-40 flex min-h-[78px] w-full items-center bg-violet-dark-hover shadow-nav">
        <div className="container w-full">
          <Menu />
        </div>
      </nav>

      <div className="container flex w-full flex-col items-center text-white md:items-start">
        <div className="mb-6 inline-block bg-green-normal px-4 py-2 text-xl font-semibold uppercase tracking-[.1em]">
          join streaming
        </div>
        <h1 className="mb-10 max-w-[600px] text-center font-right text-4xl font-normal uppercase leading-[1.2] tracking-[.09em] md:text-start md:text-5xl lg:text-[56px]">
          best online game to play
        </h1>
        <p className="max-w-[600px] text-center text-xl font-normal md:text-start">
          Live gaming with lots of other games ipsum dolor sit amet, consectetur
          adipiscing elit. Donec malesudaorlrem maxium maurius scelerisque, at
          rutrum nulla dictum. Ut ac ligula sapien.
        </p>
        <button
          type="button"
          className="mt-8 flex h-[45px] min-w-[140px] items-center border-2 border-solid border-green-normal px-4 py-3 text-base font-semibold uppercase transition duration-300 ease-in-out hover:bg-green-normal hover:text-white"
        >
          <span className="me-4">
            <GiConsoleController className="text-[22px] text-white" />
          </span>
          <span>play now</span>
        </button>
      </div>
    </header>
  )
}

export default index
