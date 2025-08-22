import React from 'react'
import { Brain } from 'lucide-react';
import { Sun } from 'lucide-react';
const Navbar = () => {
  return (
    <div className='nav flex items-center justify-between h-[90px] bg-zinc-900' style={{padding:"0px 150px"}}>
   <div className="logo flex items-center gap-[10px]">
     <Brain size={30} color='oklch(77.7% 0.152 181.912)' />
     <span className='text-2xl font-bold text-white ml-2'>CodeIQ</span>
   </div>
  <div className="icons icons items-center gap-[20px]">
    <i className='cursor-pointer transitiona-all hover:text-[#43D5C2]'>  <Sun /></i>
  </div>
    </div>
  )
}

export default Navbar
