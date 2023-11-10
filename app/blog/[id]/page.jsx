import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id){
  const res = await fetch(`http://localhost:3000/api/posts/${id}`,{
    cache:'no-store',
  });
  if(!res.ok){
    return notFound();
  }
  return res.json();
}

export async function generateMetadata({params}){
  const post = await getData(params.id)
  return{
    title:post.title,
    description:post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className='containerr' >
      <p className='font-bold text-[80px]  mt-10' >Our Works</p>
      <p  className='font-bold text-green-600 text-2xl' >{data.title}</p>
      <div className="flex gap-10 py-10" >
        <div className="w-1/2 pt-7 " >
          <h1 className="text-5xl title bg-gradient-to-b from-[#194c33] to-yellow-400  font-extrabold" >{data.title}</h1>
          <p className="w-[70%] py-3 " >{data.desc}</p>
          <button className="bg-[#194c33] px-3 py-2 my-3 text-white rounded-md" >See More</button>
        </div>
        <div>
          <Image src={data.img} alt="home" height={400} width={400} />
        </div>
      </div>
      <div className="flex gap-10 py-10" >
        <div>
          <Image src={data.img} alt="home" height={400} width={400} />
        </div>
        <div className="w-1/2 pt-7 " >
          <h1 className="text-5xl title bg-gradient-to-b from-[#194c33] to-yellow-400  font-extrabold" >Our {params.id} Portfolio</h1>
          <p className="w-[70%] py-3 " >Turnung your idea into reality. We bring together the teams from the global tech industry</p>
          <button className="bg-[#194c33] px-3 py-2 my-3 text-white rounded-md" >See More</button>
        </div>
      </div>
    </div>
  )
}

export default BlogPost