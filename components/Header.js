import { aboutState, contactState, portfolioState, skillsState } from "@/recoil/atoms";
import Link from "next/link"
import { useRouter } from "next/router"
import { useRecoilState } from "recoil";

function Header() {

  const router = useRouter()
  const { pathname } = router

  const [portfolio] = useRecoilState(portfolioState);
  const [skills] = useRecoilState(skillsState);
  const [contact] = useRecoilState(contactState);

  // console.log(portfolio);
  const handleScroll = (dist) => {

    // console.log(dist)

    window.scrollTo({
      top: dist,
      behavior: 'smooth',
    });
  }



  return (
    <div className=' fixed bg-stone-800  left-0 right-0 h-8 lg:h-12 flex items-center px-2 md:px-5  justify-between   z-50  shadow-md font-bold'>
      <div className=" z-50 w-full md:max-w-5xl mx-auto flex items-center md:px-5  justify-between text-white">

        <div className=''>
          <div onClick={() => handleScroll(0)} className="cursor-pointer">
            <div className={`text-xs lg:text-xl cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/" && "text-blue-600 "}`}>
              Henry Jian
            </div>
          </div>
        </div>

        <div className=' flex space-x-1 md:space-x-3'>

          <div onClick={() => handleScroll(portfolio)} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/coaching" && "text-blue-600 border-b border-blue-600"}`}>
              PORTFOLIO
            </div>
          </div>

          <div onClick={() => handleScroll(skills)} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/mission" && "text-blue-600 border-b border-blue-600"}`}>
              SKILLS
            </div>
          </div>

          {/* <div onClick={() => handleScroll(about)} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/resources" && "text-blue-600 border-b border-blue-600"}`}>
              ABOUT
            </div>
          </div> */}

          <div onClick={() => handleScroll(contact)} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/contact" && "text-blue-600 border-b border-blue-600"}`}>
              CONTACT
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Header