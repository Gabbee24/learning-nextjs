"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import FramerWrap from "@/components/framerMotion/FramerWrap";

const variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};


const PortfolioPage = () => {
  return (
    <FramerWrap>
      <div className='containerr' >
        <p className='font-bold text-[80px]  mt-10' >Our Works</p>
        <p className='font-bold text-2xl ' >Choose a gallery</p>
        <motion.div variants={variants} initial="hidden" animate="show" className="flex gap-10" >

            <motion.a variants={images} className="itemsss hover:text-green-600 " href='/portfolio/illustrations'>
              <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  ' >Illustration</span>
            </motion.a>

            <motion.a variants={images} className="itemsss hover:text-green-600" href='/portfolio/websites'>
              <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  ' >Websites</span>
            </motion.a>

            <motion.a variants={images} className="itemsss hover:text-green-600" href='/portfolio/applications'>
              <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  '  >Application</span>
            </motion.a>

        </motion.div>
      </div>
    </FramerWrap>
  )
}

export default PortfolioPage