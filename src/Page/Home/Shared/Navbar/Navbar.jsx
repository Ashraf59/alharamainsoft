import { useState } from 'react';
import { Link } from 'react-router-dom';
import kaaba from '../../../../assets/banner-video/kaaba-2.png';
import Banner from '../../Banner/Banner';



const Navbar = () => {
  
    const [isToggleOpen, setIsToggleOpen] = useState(false)
  return (
    <>
   
      {/*<!-- Component: Basic Navbar --> */}
      <header className="border-b-1 fixed z-20 w-full border-b border-slate-200 bg-black shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-white"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="javascript:void(0)"
            >
              <div className='logo'>
              <img className='w-7' src={kaaba} alt="logo" />
              </div>
              <span className='brand-name'>Alharamainsoft</span>
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${
                  isToggleOpen
                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                    : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                ></span>
              </div>
            </button>
            {/*      <!-- Navigation links --> */}
            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
                isToggleOpen
                  ? "visible opacity-100 backdrop-blur-sm"
                  : "invisible opacity-0"
              }`}
            >
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-700 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span><Link to="/">Home</Link></span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-current="page"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-700 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span><Link to="about">About Us</Link></span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-700 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span><Link to="services">Service</Link></span>
                </a>
              </li>
              <li role="none" className="flex items-stretch">
                <a
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-700 focus:bg-emerald-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  href="javascript:void(0)"
                >
                  <span>Contact</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/*<!-- End Basic Navbar--> */}
    </>
  )
}
;

export default Navbar;