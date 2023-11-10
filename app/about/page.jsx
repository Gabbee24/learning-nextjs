import Image from "next/image"

const AboutPage = () => {
  return (
    <div className='containerr' >
      <div>

        <div className="flex py-10 justify-center" >
          <Image className="image" src='/undraw1.svg' alt="undrw" width={900} height={900} />
        </div>
        <div className="bg-green-300 p-3 rounded-md text-white max-w-fit     mt-[-6rem]  mx-32 px-16" >
          <h1 className="text-3xl font-bold" >Digital Storytellers</h1>
          <p className="bg-gray-400 font-bold text-lg" >Handcrafting award winning digital eperience</p>
        </div>
      </div>

      <div className="flex gap-4 my-12" >
        <div>
          <p className="font-bold text-3xl mb-4">Who are we?</p>
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p>
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p>
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p>
        </div>
        <div>
          <p  className="font-bold text-3xl mb-4">What we do?</p>
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p>
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p> 
          <p className=" text-lg" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sequi officia, magnam molestiae a delectus exercitationem sit quidem sunt, repellendus impedit. Molestias, ipsum sequi quod omnis debitis saepe mollitia facere.</p>
          <button className="bg-[#194c33] px-3 py-2 my-3 text-white rounded-md" >Contact</button>
        </div>
      </div>
    </div>
  )
}

export default AboutPage