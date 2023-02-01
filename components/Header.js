import Link from "next/link"
import { useRouter } from "next/router"

function Header() {

  const router = useRouter()
  const { pathname } = router


  return (
    <div className=' fixed bg-stone-800  left-0 right-0 h-8 lg:h-12 flex items-center px-2 md:px-5  justify-between   z-50  shadow-md font-bold'>
      <div className=" z-50 w-full md:max-w-5xl mx-auto flex items-center md:px-5  justify-between text-white">

        <div className=''>
          <Link href={"/"} className="cursor-pointer">
            <div className={`text-xs lg:text-xl cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/" && "text-blue-600 "}`}>
              Henry Jian
            </div>
          </Link>
        </div>

        <div className=' flex space-x-1 md:space-x-3'>

          <Link href={"/coaching"} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/coaching" && "text-blue-600 border-b border-blue-600"}`}>
              PORTFOLIO
            </div>
          </Link>

          <Link href={"/mission"} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/mission" && "text-blue-600 border-b border-blue-600"}`}>
              SKILLS
            </div>
          </Link>

          <Link href={"/resources"} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/resources" && "text-blue-600 border-b border-blue-600"}`}>
              ABOUT
            </div>
          </Link>

          <Link href={"/contact"} className="cursor-pointer">
            <div className={`text-xs px-1 lg:text-base cursor-pointer hover:text-blue-600 transform transition duration-200 hover:scale-105 ease-out ${pathname === "/contact" && "text-blue-600 border-b border-blue-600"}`}>
              CONTACT
            </div>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header