import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData() {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPage = async () => {
  const data = await getData();
  return (
    <div className='containerr' >
      {
        data.map(item => (
          <Link key={item.id} href={`/blog/${item._id}`} className="flex gap-10 py-10" >
            <div>
              <Image src={item.img} alt="home" height={400} width={400} />
            </div>
            <div className="w-1/2 pt-7 " >
              <h1 className="text-5xl title bg-gradient-to-b from-[#194c33] to-yellow-400  font-extrabold" >{item.title}</h1>
              <p className="w-[70%] py-3 " >{item.desc} </p>
            </div>
          </Link>

        ))
      }

    </div>
  )
}

export default BlogPage