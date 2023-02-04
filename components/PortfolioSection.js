import { portfolioState } from "@/recoil/atoms";
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil";

function PortfolioSection() {
  const portfolioSectionRef = useRef()
  const [windowDimensions, setWindowDimensions] = useState(null);
  const [portfolio, setPortfolio] = useRecoilState(portfolioState);


  function getWindowDimensions() {
    if (window) {
      const { innerWidth: width, innerHeight: height } = window;
      return {
        width,
        height
      };
    }
  }
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setPortfolio(portfolioSectionRef?.current?.offsetTop - 50)
  }, [portfolioSectionRef, windowDimensions])



  return (
    <section ref={portfolioSectionRef} className='  w-full h-screen text-3xl font-bold'>
      <h1 className=' pt-10 pl-12'>My Portfolio</h1>

      <div className=' grid grid-cols-5 gap-0 mx-auto mt-12  w-full  '>

        <Link target="_blank" href={"https://fbclone-henryj4152.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group overflow-hidden'>
            <img src="/fbclone-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover transition transform duration-300 hover:scale-125 " />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Facebook Clone</p>
          </div>
        </Link>

        <Link target="_blank" href={"https://insta-clone-tutorial.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group overflow-hidden'>
            <img src="/instaclone-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover transition transform duration-300 hover:scale-125" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Instagram Clone</p>
          </div>
        </Link>


        <Link target="_blank" href={"https://employee-admin-panel.vercel.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group overflow-hidden'>
            <img src="/employeradmin-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover transition transform duration-300 hover:scale-125" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Employer Admin Panel</p>
          </div>
        </Link>


        <Link target="_blank" href={"https://challenge-e4db3.web.app/"} className="relative">
          <div className=' h-[10rem] transition transform duration-300 ease-out group overflow-hidden'>
            <img src="/amazon-clone-photo.png" alt="" className=" opacity-60 hover:opacity-100 -z-10 absolute top-0 left-0 w-full h-full object-cover transition transform duration-300 hover:scale-125" />
            <p className=" text-3xl z-50 text-white opacity-100 group-hover:hidden p-1">Amazon Clone</p>
          </div>
        </Link>


      </div>
    </section>
  )
}

export default PortfolioSection