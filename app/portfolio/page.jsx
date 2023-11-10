import Link from "next/link"

const PortfolioPage = () => {
  return (
    <div className='containerr' >
      <p className='font-bold text-[80px]  mt-10' >Our Works</p>
      <p className='font-bold text-2xl ' >Choose a gallery</p>
      <div className="flex gap-10" >
        <Link className="itemsss hover:text-green-600 " href='/portfolio/illustrations'>
          <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  ' >Illustration</span>
        </Link>
        <Link className="itemsss hover:text-green-600" href='/portfolio/websites'>
          <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  ' >Websites</span>
        </Link>
        <Link className="itemsss hover:text-green-600" href='/portfolio/applications'>
          <span className='absolute right-[100px] font-bold text-2xl bottom-[10px]  '  >Application</span>
        </Link>
       
      </div>
    </div>
  )
}

export default PortfolioPage