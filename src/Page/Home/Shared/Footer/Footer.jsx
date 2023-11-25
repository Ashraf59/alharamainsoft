
import '../Footer/footer.css';
import logo from '../../../../assets/logo/footer-logo-2.png'
import brand from '../../../../assets/logo/footer-logo.png'
import {FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhoneAlt }  from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
        {/*    <!-- Component: Five Columns Footer with Logo --> */}
        <footer className="w-full text-white bg-black mt" id='contact'>
          {/*      <!-- Main footer --> */}
          <div className="border-t border-slate-200 bg-black pt-16 pb-12 text-sm">
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
                 
                    <div className='cursor-pointer flex items-center'>
        
        <img className='h-6 md:h-7 mr-1' src={logo} alt="" /> 
        <img className='h-6 md:h-7 mr-1' src={brand} alt="" /> 
        {/* <h2 className='brand-name'>Alharamain<span className='text-gray-400'>Soft</span></h2> */}
      </div>
                  </a>
                  <p className='text-gray-200'>
                  Specializing in web development, Android & iOS apps, digital marketing, and UI/UX design, we bring over 7 years of collective experience to a global stage. Our commitment to international clients is unwavering, ensuring bespoke solutions that transcend borders.
                  </p>
                  <div className='flex mt-5'>
                  <Link className='mr-3' to="https://www.facebook.com/alharamainsoft/" target='_blank'>
                  <span className='hover:text-gray-400 cursor-pointer'><FaFacebook size="25px"/></span>
                  </Link>
                   <Link className='mr-3' to="https://www.linkedin.com/company/alharamainsoft/?viewAsMember=true" target='_blank'>
                   <span className='hover:text-gray-400 cursor-pointer'> <FaLinkedin size="25px"/></span>
                   </Link>
                   <span className='hover:text-gray-400 cursor-pointer'><FaInstagram size="25px"/></span>
                  </div>
                </div>
                <nav
                  className="col-span-2 w-[100px] md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-product-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-gray-200"
                    id="footer-product-5-logo"
                  >
                    Product
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Features
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Customers
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Why us?
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Pricing
                      </a>
                    </li>
                  </ul>
                </nav>
                <nav
                  className="col-span-2 -ml-12 sm:ml-0 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-docs-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-gray-200"
                    id="footer-docs-5-logo"
                  >
                    Our Services
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Web Application
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Mobile Apps
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        UI/UX Design
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Digital Marketing
                      </a>
                    </li>
                    
                  </ul>
                </nav>
                <nav
                  className="col-span-1 w-[100px] md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-about-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-gray-200"
                    id="footer-about-5-logo"
                  >
                    About us
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        About us
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Careers
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Leadership
                      </a>
                    </li>
                    <li className="mb-2 leading-6">
                      <a
                        href="javascript:void(0)"
                        className="font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Blog
                      </a>
                    </li>
                    
                  </ul>
                </nav>
                <nav
                  className="col-span-2 w-[220px] pl-8 sm:pl-0 md:col-span-4 lg:col-span-2"
                  aria-labelledby="footer-get-in-touch-5-logo"
                >
                  <h3
                    className="mb-6 text-xl font-medium text-gray-200"
                    id="footer-get-in-touch-5-logo"
                  >
                    Contact Information
                  </h3>
                  <ul>
                    <li className="mb-2 leading-6 flex items-center">
                    <span><FaPhoneAlt className='text-gray-200' size='16px'/></span>
                    
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                         +88 01568-242054
                      </a>
                    </li>
                    <li className="mb-2 leading-6 flex items-center">
                    <span><FaMailBulk className='text-gray-200' size='16px'/></span>
                   
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        alharamainsoft@gmail.com
                      </a>
                    </li>
                    <li className="mb-2 leading-6 flex items-center">
                      <FaLocationArrow className='text-gray-200' size='16px'/>
                      <a
                        href="javascript:void(0)"
                        className="ml-2 font-semibold transition-colors duration-300 hover:text-gray-400 text-gray-200"
                      >
                        Chattogram, Bangladesh
                      </a>
                    </li>
                   
                  </ul>
                </nav>
              </div>
            </div>
            <div className='text-center border-t border-slate-200 pt-8 mt-6 text-gray-300'>
    <p>Copyright © 2023 - All right reserved by AlharamainSoft</p>
  </div>
          </div>
          
        </footer>
        {/*    <!-- End Five Columns Footer with Logo --> */}
      </>
    );
};

export default Footer;