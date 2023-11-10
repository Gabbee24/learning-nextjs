'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc';
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const LoginPage = () => {
  
    const [newUser, setNewUser] = useState({
      email: '',
      password: '',
    });
  const session = useSession();
  const router = useRouter();

  if(session.status === "loading"){
    return <p>Loading...</p>;
  }

  if (session.status === "authenticated"){
    router?.push("/dashboard");
  }

  function handleNewUser(e){
    const {name,value} = e.target
    setNewUser(prevUser => (
        {
            ...prevUser,
            [name]:value
        }
    ))
  }
  
    const handleSubmit = async (e) =>{
      e.preventDefault();
      // const {username,email,password} = newUser;
      const email = newUser.email;
      const password = newUser.password;

      signIn("credentials", {email, password});
    };
  
    // console.log(newUser);
  
  // const {data:session} = useSession();
  return (
    <div className="containerr items-center justify-center" >
      <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-y-5 items-center" >
        <input
          type="email"
          placeholder="email"
          className="rounded-md p-3 text-black"
          name="email"
          required
          onChange={handleNewUser}
          value={newUser.email}
        />
        <input
          type="password"
          placeholder="password"
          className="rounded-md p-3 text-black"
          name="password"
          required
          onChange={handleNewUser}
          value={newUser.password}
        />
        <button className="bg-yellow-500 p-3 text-black rounded-lg" type="submit" >Login</button>
      </form>
      <div className="border-2 my-5 border-t-stone-950 " >
      </div>
        <button onClick={() => signIn('google')} className='bg-yellow-500  mt-5 text-white p-2 rounded-lg px-4'> <h3 className='flex gap-1'> <span className='pt-1'><FcGoogle /></span>Login with Google </h3></button>
        <Link href="/dashboard/register" >Create an account</Link>
    </div>
  )
}

export default LoginPage