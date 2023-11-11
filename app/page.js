import Image from "next/image";
import FramerWrap from "@/components/framerMotion/FramerWrap";

export default function Home() {
  return (
    <FramerWrap>

    <div className="containerr" >
      <div className="flex gap-10 py-10" >
        <div className="w-1/2 pt-7 " >
          <h1 className="text-4xl image title bg-gradient-to-b from-[#194c33] to-yellow-400 w-[50%] font-extrabold" >Better design for your digital products</h1>
          <p className="w-[70%] py-3 " >Turnung your idea into reality. We bring together the teams from the global tech industry</p>
          <button className="bg-[#194c33] px-3 py-2 my-3 text-white rounded-md" >See Our Works</button>
        </div>
        <div>
          <Image src='/home1.svg' alt="home" height={400} width={400} />
        </div>
      </div>
    </div>
    </FramerWrap>
  )
}
