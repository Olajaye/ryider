// import { IoSunnyOutline } from "react-icons/io5";
// import { useTheme } from "../context/ToogleContext";
// import { IoPartlySunny } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { TfiMenu } from "react-icons/tfi";
import RyiderLogo from "../RyiderLogo";
import { useState } from "react";

const navigation = [
  {link:"/aboutus", nav: 'About Us'},
  {link:"/contactus", nav: 'Contact Us'},
  {link:"/services", nav: 'Services'},
  {link: "/faq", nav: "FAQ"},
  {link: '/blogs', nav: "Blogs"},
  // {link: "/resources", nav: "Resources"},
]
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };
  // const { isDarkMode, toggleTheme } = useTheme();

  return (
    <main className="fixed w-full z-50 backdrop-blur-md">
      <header className='container mx-auto px-4 py-2 '>
        <nav className='flex items-center justify-between py-2 font-poppins'>
          
          <RyiderLogo/>

          <div className='lg:flex space-x-9 hidden pt-3'>
            {navigation.map((nav, index)=>(
              <div key={index}>
                <a href={nav.link}>{nav.nav}</a>
              </div>
            ))}
          </div>


          <div className="lg:flex space-x-3 hidden">
            <a href="/" className="flex items-center border-[1px] border-[#128C7E] p-3 text-sm text-center font-medium text-green rounded-lg">Shop <MdArrowOutward className="ms-3 w-6 h-6 text-green"/></a>

            <a href="/dashboard" className="flex items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg">Login In</a>
          </div>

          <div className="p-3 lg:hidden">
            <TfiMenu className="h-7 w-7" onClick={handleMenuToggle}  />
          </div>
        </nav>
      </header>
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
      >
        <div className='flex flex-col space-y-4 py-4'>
          {navigation.map((nav, index) => (
            <div key={index}>
              <a href={nav.link}>{nav.nav}</a>
            </div>
          ))}
          <a href="/" className='flex items-center border-[1px] border-[#128C7E] p-3 text-sm text-center font-medium text-green rounded-lg'>
            Shop <MdArrowOutward className='ms-3 w-6 h-6 text-green'/>
          </a>
          <a href="/dashboard" className='flex items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg'>
            Login In
          </a>
        </div>
      </div>
    </main>
  )
}

export default Navbar