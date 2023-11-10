import styles from './page.module.css';
import Image from 'next/image';

const ContactPage = () => {
  return (
    // <div className={styles.contact} >ContactPage</div>
    <div className='containerr' >
      <p className='font-bold text-4xl mx-auto my-10' >Let's Keep in Touch</p>
      <div className="flex gap-10" >
        <div>
          <Image className='image' src='/home1.svg' alt="home" height={400} width={400} />
        </div>
        <div className="w-1/2 pt-7 " >
          <form className='flex flex-col gap-y-4' >
            <input className='p-2 rounded-md bg-transparent border-yellow-500 border-2' type='text' placeholder='name' />
            <input className='p-2 rounded-md bg-transparent border-yellow-500 border-2' type='email' placeholder='email address' />
            <textarea rows={6} className='p-2 rounded-md bg-transparent border-yellow-500 border-2' placeholder='message' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactPage