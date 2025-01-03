import React from 'react'
import './Hero.css'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <>
    <div className='relative flex flex-col items-center text-white mt-[50px]'>
      <p className='text-[32px] text-gradient text-center font-bold sm:text-[50px] leading-tight'>A Fast Blockchain. <br /> Scalable AI</p>
      <p className='text-[10px] sm:text-[15px] font-light font-normal w-[300px] sm:w-[700px] text-center leading-normal mt-2'>Our technology performing fast blockchain (120K TPS) and it has guaranteed AI-based data security. Proof of Stake, its consensus algorithm enables unlimited speeds.</p>
     <div className='flex gap-5 mt-5'>
     <button className='rounded-[100px] border-[2px] border-[#FF3BFF] inline-flex h-[40px] sm:h-[60px] px-[30px] justify-center items-center gap-[10px] shrink-0'>Get Started</button>
     <button className='rounded-[100px] border-[2px] border-white inline-flex h-[40px] sm:h-[60px] px-[30px] justify-center items-center gap-[10px] shrink-0'>Ecosystems</button>
     </div>
    </div>
    <img src={assets.banner} className='absolute bottom-0 left-0 h-[200px] sm:h-[200px] sm:w-[2000px]' alt="" />
    </>
  )
}

export default Hero
