'use client'
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useState } from "react"

const RegisterPage = () => {
  const [err, setErr] = useState(false);

  const router = useRouter();

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
});

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
    const username = newUser.username;
    const email = newUser.email;
    const password = newUser.password;

    try{
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,email,password
        }),
      });

      res.status === 201 && router.push('/dashboard/login?success=Account has been created');
    }catch (err){
      setErr(true);
    }
  };

  console.log(newUser);

  return (
    <div className="containerr" >
      <div className="flex flex-col my-auto " >
      <form onSubmit={handleSubmit} className="flex-col flex justify-center gap-y-5 items-center" >
        <input
          type="text"
          placeholder="username"
          className="rounded-md p-3 text-black"
          name="username"
          required
          onChange={handleNewUser}
          value={newUser.username}
        />
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
        <button className="bg-yellow-500 p-3 text-black rounded-lg" type="submit" >Register</button>
      </form>
      <div className="text-white" >
      {err && "Something went wrong!"}
      </div>
      <Link className="mx-auto py-3" href='/dashboard/login' > <span className="text-yellow-500" >Login</span> with an existing account</Link>
      </div>
    </div>
  )
}

export default RegisterPage