
import '../Footer/footer.css';
import kaaba from '../../../../assets/banner-video/kaaba-2.png';
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneAlt }  from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        {/*    <!-- Component: Five Columns Footer with Logo --> */}
        <footer className="w-full text-white">
          {/*      <!-- Main footer --> */}
          <div className="border-t border-slate-200 footer-bg pt-16 pb-12 text-sm">
            <div className="container mx-auto px-6">
              <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                <div
                  className="col-span-4 md:col-span-8 lg:col-span-4"
                  aria-labelledby="footer-header"
                >
                  <a
                    id="WindUI-5-logo"
                    aria-label="WindUI logo"
                    aria-current="page"
                    className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                    href="javascript:void(0)"
                  >
                    
                    <div className='logo'>
              <img className='w-7' src={kaaba} alt="logo" />
              </div>
              <span className='brand-name text-white text-xl font-medium'>Alharamainsoft</span>
                  </a>
                  <p>
                    Expertly made, responsive, accessible components in React and
                    HTML ready to be used on your website or app. Just copy and
                    paste them on your Tailwind CSS project.
                  </p>
                  <div className='flex mt-5'>
                    <span className='mr-3 hover:text-blue-700 cursor-pointer'><FaFacebook size="25px"/></span>
                   <span className='mr-3 hover:text-blue-700 cursor-pointer'> <FaLinkedin size="25px"/></span>
                   <span className='hover:text-blue-700 cursor-pointer'><FaInstagram size="25px"/></span>
                  </div>
                </div>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-product-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-white"
                    id="footer-product-5-logo"
                  >
                    Product
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Features
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Customers
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Why us?
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-docs-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-white"
                    id="footer-docs-5-logo"
                  >
                    Our Services
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Web Application
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Mobile Apps
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-about-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-white"
                    id="footer-about-5-logo"
                  >
                    About us
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        About us
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Leadership
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Blog
                      </a>
                    </li>
                    
                  </ul>
                </nav>
                <nav
                  className="col-span-2 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-get-in-touch-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-white"
                    id="footer-get-in-touch-5-logo"
                  >
                    Contact Information
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6 flex items-center">
                    <span><FaPhoneAlt color='blue' size='16px'/></span>
                    
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                         +88 01568-242054
                      </a>
                    </li>
                    <li className="mb-2 leading-6 flex items-center">
                    <span><FaMailBulk color='blue' size='16px'/></span>
                   
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        info@alharamainsoft.com
                      </a>
                    </li>
                    <li className="mb-2 leading-6 flex items-center">
                      <FaLocationArrow color='blue' size='16px'/>
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-blue-700 focus:text-blue-700"
                      >
                        Chattogram, Bangladesh
                      </a>
                    </li>
                   
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-center border-t border-slate-200 pt-8 mt-6'>
    <p>Copyright © 2023 - All right reserved by Alharamainsoft</p>
  </div>
          </div>
          
        </footer>
        {/*    <!-- End Five Columns Footer with Logo --> */}
      </>
    );
};

export default Footer;