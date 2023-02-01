import Link from "next/link"

function PortfolioSection() {
  return (
    <section className='  w-full h-screen text-3xl font-bold'>
      <h1 className=' pt-10 pl-12'>My Portfolio</h1>

      <div className=' grid grid-cols-5 gap-0 mx-auto mt-12  w-full  '>

        <Link target="_blank" href={"https://fbclone-henryj4152.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group group'>
            <img src="/fbclone-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Facebook Clone</p>
          </div>
        </Link>

        <Link target="_blank" href={"https://insta-clone-tutorial.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group group '>
            <img src="/instaclone-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Instagram Clone</p>
          </div>
        </Link>


        <Link target="_blank" href={"https://employee-admin-panel.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group group '>
            <img src="/employeradmin-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Employer Admin Panel</p>
          </div>
        </Link>


      </div>
    </section>
  )
}

export default PortfolioSection