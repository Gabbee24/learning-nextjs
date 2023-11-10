'use client';
import React from 'react';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const DashboardPage = () => {
  const [newPost, setNewPost] = useState({
    title: '',
    desc: '',
    img: '',
    content: '',
  });
  
    const session = useSession();
  
    const router = useRouter();

  function handleNewPost(e) {
    const { name, value } = e.target
    setNewPost(prevPost => (
      {
        ...prevPost,
        [name]: value
      }
    ))
  }


  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)
  // console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const {username,email,password} = newPost;
    const title = newPost.title;
    const desc = newPost.desc;
    const img = newPost.img;
    const content = newPost.content;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title, desc, img, content, username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
      // setNewPost('')
      // res.status === 201 && router.push('/dashboard/login?success=Account has been created');
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELTE",
      });
      mutate();
    } catch (err) {
      console.log(err);
    }
  };


  if (session.status === "authenticated") {

    return (
      <div className='containerr' >
        <div className='posts flex' >
          {isLoading ? "loading" : data?.map(post => (
            <div className='post flex justify-between items-center my-[50px] mx-0 ' key={post._id} >
              <div className='imageContainer w-[200px] h-[100px] ' >
                <Image className=' object-cover' width={200} height={200} src={post.img} alt='post Image' />
              </div>
              <h2 className='posttitle' >{post.title}</h2>
              <span className='delete text-red-500 cursor-pointer ' onClick={() => handleDelete(post._id)} >x</span>
            </div>
          ))}
        </div>
        <form className='new flex flex-col gap-4' onSubmit={handleSubmit} >
          <h1>Add new post</h1>
          <input
            type="text"
            placeholder="Title"
            className="rounded-md p-3 text-black"
            name="title"
            required
            onChange={handleNewPost}
            value={newPost.title}
          />
          <input
            type="text"
            placeholder="Description"
            className="rounded-md p-3 text-black"
            name="desc"
            required
            onChange={handleNewPost}
            value={newPost.desc}
          />
          <input
            type="text"
            placeholder="Image"
            className="rounded-md p-3 text-black"
            name="img"
            required
            onChange={handleNewPost}
            value={newPost.img}
          />
          <textarea
            placeholder='Content'
            className='rounded-md p-3 text-black'
            name='content'
            onChange={handleNewPost}
            value={newPost.content}
            cols="30"
            rows="10"
          />
          <button type='submit' className='bg-yellow-500  mt-5 text-white p-2 rounded-lg px-4' >Send</button>
        </form>
      </div>
    )
  }
}

export default DashboardPage