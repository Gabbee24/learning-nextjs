'use client';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import {BsMoon} from 'react-icons/bs';
import {BsSun} from 'react-icons/bs';

const DarkModeToggle = () => {
    const {toggle,mode } = useContext(ThemeContext)
  return (
    <div onClick={toggle} className="w-fit px-2 cursor-pointer relative h-10 border-2 border-yellow-500 rounded-full flex justify-between items-center gap-3" >
        <div><BsSun/></div>
        <div><BsMoon/></div>
        <div className='w-5 h-5 bg-[#53c28b] rounded-full absolute' style={mode === 'light' ? {left:'4px'} : {right:'4px'} } />
    </div>
  )
}

export default DarkModeToggle