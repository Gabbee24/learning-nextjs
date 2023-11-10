import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image';


export default function Footer() {

  return (
    <>
      <footer className="bg-black text-white px-5  md:px-10 py-24 pb-10 overflow-hidden  z-[-2] bottom-0 static ">
        <div className="block justify-between border-b-[1px] pb-7 md:pb-5 border-yellow-500 px-2">

          <div className='pt-10 flex-col p-2 md:pt-0'>
            <div>
              <h2 className="font-black text-[25px] pb-10 tracking-wider">Gabb<span className="text-yellow-500">y</span></h2>
            </div>

            <div className="block md:flex md:flex-wrap gap-4 text-[14px]">
              <div className="px-0 md:pl-0 md:px-3 py-3 md:py-0      hover:scale-95 transition-transform ease-in-out delay-75">
                <Link href="/Management" className=" hover:border-0 pb-1 text-[#fff]/[0.7] border-b-2 border-yellow-500"><span>Leadership and Management  </span> </Link>
              </div>
              <div className="px-0 md:pl-0 md:px-3 py-3 md:py-0      hover:scale-95 transition-transform ease-in-out delay-75">
                <Link href="/Sustainability" className="hover:border-0 pb-1 text-[#fff]/[0.7] border-b-2 border-yellow-500"><span>Sustainability</span> <span className="pt-1" > </span></Link>
              </div>

              <div className="px-0 md:pl-0 md:px-3 py-3 md:py-0      hover:scale-95 transition-transform ease-in-out delay-75">
                <button className="hover:border-0 pb-1 text-[#fff]/[0.7] border-b-2 border-yellow-500"><span>Our Quality Policy</span> <span className="pt-1" > </span></button>
              </div>

              <div className="px-0 md:pl-0 md:px-3 py-3 md:py-0      hover:scale-95 transition-transform ease-in-out delay-75">
                <Link href="/Resources" className="hover:border-0 pb-1 text-[#fff]/[0.7] border-b-2 border-yellow-500">Resources</Link>
              </div>
              <div className="px-0 md:pl-0 md:px-3 py-3 md:py-0      hover:scale-95 transition-transform ease-in-out delay-75">
                <Link href="/Terms" className="hover:border-0 pb-1 text-[#fff]/[0.7] border-b-2 border-yellow-500"><span>Terms And Condition</span> <span className="pt-1" > </span></Link>
              </div>
            </div>

            <div className='block md:flex justify-between pt-8 '>

              <div className='' >
                <h2>Contacts</h2> 
                <div className='flex pt-2 gap-3 text-[#fff]/[0.8]'>
                  <ul className='list-disc block md:flex '>
                    <li className='px-0 mx-5'>atunwagabriel@gmail.com</li>
                    <li className='px-0 mx-5'>+234 806 3878 791</li>
                  </ul>
                </div>
              </div>

              <div className='pt-8 md:pt-0'>

                <h2>Socials</h2>
                <div className='flex pt-2 gap-2 '>
                  <span className="p-3 cursor-pointer rounded-full text-sm text-black bg-white">
                    <FaFacebookF />
                  </span>
                  <span className="p-3 cursor-pointer rounded-full text-sm bg-white">
                    <Image alt="twitter" src="/twitterx_svg.svg" width="15" height="15" />
                  </span>
                  <span className="p-3 cursor-pointer rounded-full text-sm text-black bg-white">
                    <AiFillInstagram />
                  </span>
                  <span className="p-3 cursor-pointer rounded-full text-sm text-black bg-white ">
                    <AiFillLinkedin />
                  </span>
                  <span className="p-3 cursor-pointer rounded-full text-sm text-black bg-white ">
                    <AiFillYoutube />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-center pt-8 text-[#D9D9D9] text-[14px] pb-5 relative z-10">© 2023 {' '} Gabb<span className="text-yellow-500">y</span>. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}