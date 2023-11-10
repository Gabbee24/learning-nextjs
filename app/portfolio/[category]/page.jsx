import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound();
}

const PortfolioCategory = ({ params }) => {
  const data = getData(params.category)
  return (
    <div className='containerr' >
      <p className='font-bold text-[80px]  mt-10' >Our Works</p>
      <p className='font-bold text-green-600 text-2xl' >{params.category}</p>
      {
        data.map(item => (
          <div key={item.id} className="flex gap-10 py-10" >
            <div className="w-1/2 pt-7 " >
              <h1 className="text-5xl title bg-gradient-to-b from-[#194c33] to-yellow-400  font-extrabold" >{item.title}</h1>
              <p className="w-[70%] py-3 " >{item.desc}</p>
              <button className="bg-[#194c33] px-3 py-2 my-3 text-white rounded-md" >See More</button>
            </div>
            <div>
              <Image src={item.image} alt="home" height={400} width={400} />
            </div>
          </div>

        ))
      }
    </div>
  )
}

export default PortfolioCategory