import Link from 'next/link'
import { PiPaperPlaneTiltFill } from 'react-icons/pi'

const index = () => {
  return (
    <footer id="footer">
      <div className="border-t-[1px] border-solid border-t-white/10 bg-violet-darker py-[78px]">
        <div className="container grid gap-6 text-center lg:grid-cols-[2fr_repeat(3,1fr)] lg:text-start">
          <div className="text-white">
            <Link
              href="#"
              className="mb-4 block whitespace-nowrap text-[32px] font-bold uppercase text-white"
            >
              cool <span className="text-green-normal">games</span>
            </Link>
            <p className="mx-auto max-w-[380px] text-base font-normal text-white/90 lg:ms-0">
              Lorem ipsum dolor sitamet consectur adipiscing Duis esollici tudin
              augue euismod. Nulla ullam dolor sitamet consectetur.
            </p>
          </div>

          <div className="text-white">
            <h5 className="mb-3 text-[20px] font-bold uppercase tracking-[.03em]">
              quick link
            </h5>
            <ul id="footer-item-links">
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Gaming
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Product
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Social Network
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h5 className="mb-3 text-[20px] font-bold uppercase tracking-[.03em]">
              supports
            </h5>
            <ul id="footer-item-links">
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Settings & Privacy
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Help & Support
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Live Actions
                </Link>
              </li>
              <li className="mx-0 my-[6px]">
                <Link
                  className="text-white opacity-70 transition duration-300 ease-in-out hover:opacity-100"
                  href="#"
                >
                  Our News
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-white">
            <h5 className="mb-3 text-[20px] font-bold uppercase tracking-[.03em]">
              newsletter
            </h5>
            <p className="mx-auto max-w-[380px] text-base font-normal text-white/90 lg:ms-0">
              Subscribe our newsletter to get our latest update & news
              consectetur
            </p>

            <form className="mx-auto mt-4 flex h-12 w-full items-stretch transition duration-300 ease-in-out">
              <div className="mx-auto flex h-12 w-full max-w-[284px] items-stretch transition duration-300 ease-in-out lg:ms-0">
                <input
                  type="text"
                  className="flex-1 bg-oxford-blue px-[22px] text-white outline-none"
                  placeholder="Your email address"
                />
                <button
                  className="inline-flex w-12 items-center justify-center bg-white text-oxford-blue transition duration-300 ease-in-out hover:scale-[1.1]"
                  type="button"
                >
                  <PiPaperPlaneTiltFill className="text-[19px] text-oxford-blue" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default index
