import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../context/ToogleContext";
import { IoPartlySunny } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import RyiderLogo from "../core/RyiderLogo"
const navigation = [
  {link:"/earn", nav: 'Earn'},
  {link:"/", nav: 'Shop'},
  {link: "/", nav: "Discovery"},
  {link: '/', nav: "More"},
  {link: "/", nav: "Resources"},
]
const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <header className='container mx-auto px-4 '>
      <nav className='flex items-center justify-between py-2 font-poppins'>
        
        <RyiderLogo/>

        <div className='lg:flex dark:text-white space-x-9 hidden'>
          {navigation.map((nav, index)=>(
            <div key={index}>
              <a href={nav.link}>{nav.nav}</a>
            </div>
          ))}
        </div>

        <div className="md:flex items-center hidden space-x-4">
          {isDarkMode ? 
            <div onClick={toggleTheme}>
              <IoSunnyOutline className="text-[#128C7E] h-6 w-6"/>
            </div>: 
            <div onClick={toggleTheme}>
              <IoPartlySunny className="h-6 w-6"/>
            </div>
          }

          <a href="/" className="dark:text-white text-sm text-center font-medium">Blog</a>

          <a href="/dashboard" className="flex items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg">Get Started <MdArrowOutward className="ms-3 w-6 h-6"/></a>

        </div>


        <div className="md:hidden">
          <TfiMenu className="h-7 w-7" />
        </div>

      </nav>
    </header>
  )
}

export default Navbar