import React, { useState } from 'react';
import { Menu,X } from '@mui/icons-material'
import { GrClose } from "react-icons/gr";

const Nav = () => {
    let Links =[
        {name:"HOME",link:"/"},
        {name:"About",link:"/"},
        {name:"Papers",link:"/"},
        {name:"Poster Paper Presentation",link:"/"},
        {name:"Special Sessions",link:"/"},
        {name:"Workshops",link:"/"},
        {name:"Registration",link:"/"},
        {name:"Sponsorships",link:"/"},
        {name:"Publications",link:"/"},
        {name:"Committee",link:"/"},
        {name:"Awards",link:"/"},
        {name:"Conference Venue",link:"/"},
        {name:"Downloads",link:"/"},
        {name:"Previous Conferences",link:"/"},
      ];
      let [open, setOpen] =useState(false);

    return (
        <div className=' sm:h-8 w-full fixed top-0 left-0 fixed z-10'>
           <div className='shadow-lg  h-16 md:h-24 md:flex items-center justify-between bg-white py-4 md:px-10 px-7 left-0'>
            
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ? <GrClose/> : <Menu />
                }
            </div>
            {/* linke items */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-990px]'}`}>
                {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
                
            </ul>
            
           </div>
        </div>
    );
};


export default Nav