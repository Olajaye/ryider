// import { IoSunnyOutline } from "react-icons/io5";
// import { useTheme } from "../context/ToogleContext";
// import { IoPartlySunny } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import RyiderLogo from "../core/RyiderLogo"
const navigation = [
  {link:"/", nav: 'About Us'},
  {link:"/", nav: 'Contact Us'},
  {link: "/", nav: "Service"},
  {link: '/', nav: "Blog"},
  {link: "/", nav: "Resources"},
]
const Navbar = () => {
  // const { isDarkMode, toggleTheme } = useTheme();

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

        {/* <div className="md:flex items-center hidden space-x-4">
          {isDarkMode ? 
            <div onClick={toggleTheme}>
              <IoSunnyOutline className="text-[#128C7E] h-6 w-6"/>
            </div>: 
            <div onClick={toggleTheme}>
              <IoPartlySunny className="h-6 w-6"/>
            </div>
          }
        </div> */}

        <div className="md:flex space-x-3 hidden">

          <a href="/" className="flex items-center border-[1px] border-[#128C7E] p-3 text-sm text-center font-medium text-green rounded-lg">Shop <MdArrowOutward className="ms-3 w-6 h-6 text-green"/></a>

          <a href="/login" className="flex items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg">Login In</a>
        </div>

        <div className="md:hidden">
          <TfiMenu className="h-7 w-7" />
        </div>

      </nav>
    </header>
  )
}

export default Navbar