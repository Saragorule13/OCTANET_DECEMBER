import React, { useState } from 'react'
import {assets} from '../assets/assets'

const Navbar = () => {

   const [visible, setVisible] = useState(false);

  return (
    <div className='text-white flex justify-between items-center p-8'>

       
      {/* Company name*/} 
      <p className='text-white font-poppins text-2xl font-normal leading-normal'>CryptoNexus</p>

      {/*Navbar items */}
      <div className="hidden lg:block text-white text-base font-normal leading-normal border sm:p-2 rounded-xl border-[#5D6EF3] bg-transparent cursor-pointer">
  <ul className="flex gap-[40px]">
    <li className="p-1 rounded-xl hover:bg-[#5D6EF3]">Smart Contracts</li>
    <li className="p-1 rounded-xl hover:bg-[#5D6EF3]">Services</li>
    <li className="p-1 rounded-xl hover:bg-[#5D6EF3]">Solutions</li>
    <li className="p-1 rounded-xl hover:bg-[#5D6EF3]">Roadmap</li>
    <li className="p-1 rounded-xl hover:bg-[#5D6EF3]">Whitepaper</li>
  </ul>
</div>


      {/* Contact nav items */}
      <div className='hidden sm:block'>
        <ul className='flex gap-[16px] cursor-pointer'>
            <li><img className='w-5 h-5 flex-shrink-0' src={assets.github_icon} alt="github_icon" /></li>
            <li><img className='w-5 h-5 flex-shrink-0' src={assets.reddit_icon} alt="reddit_icon" /></li>
            <li><img className='w-5 h-5 flex-shrink-0' src={assets.discord_icon} alt="discord_icon" /></li>
            <li><img className='w-5 h-5 flex-shrink-0' src={assets.twitter_icon} alt="twitter_icon" /></li>
        </ul>
      </div>

      <img className="w-8 cursor-pointer sm:hidden" onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu_icon" />

      
      <div className={`fixed top-0 left-0 w-full h-full bg-white z-50 ${visible ? 'block' : 'hidden'}`}>
        
      </div>

    </div>
  )
}

export default Navbar
