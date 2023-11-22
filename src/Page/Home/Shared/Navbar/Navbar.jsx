import { useState } from 'react'
import '../Navbar/navbar.css'
import { FaAlignRight} from "react-icons/fa";
import logo from '../../../../assets/logo/logo-4.png'
import brand from '../../../../assets/logo/brand.png'

const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/"},
      {name:"SERVICE",link:"#service"},
      {name:"ABOUT",link:"#about"},
      {name:"PORTFOLIO",link:"#portfolio"},
      {name:"CONTACT",link:"#contact"},
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-10'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='cursor-pointer flex items-center'>
        
        <img className='h-6 md:h-7 mr-1' src={logo} alt="" /> 
        <img className='h-6 md:h-7 mr-1' src={brand} alt="" /> 
        {/* <h2 className='brand-name'>Alharamain<span className='text-gray-400'>Soft</span></h2> */}
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-2xl absolute right-8 top-4 cursor-pointer sm:block md:hidden'>
      <FaAlignRight name={open ? 'close':'menu'}></FaAlignRight>
     
      </div>

      <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Navbar