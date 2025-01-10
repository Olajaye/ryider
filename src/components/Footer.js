import RyiderLogo from "../core/RyiderLogo"
import { CgFacebook } from 'react-icons/cg'
import { BsTwitterX } from 'react-icons/bs'
import { FiInstagram } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 px-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-green">Services</h3>
            <a
              href='/'
              className=" hover:text-green transition-colors duration-200"
            >
              Surveys
            </a>
            <a
              href='/'
              className=" hover:text-green transition-colors duration-200"
            >
              Paying bills
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Shopping online
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Coupon Vendor Dashboard
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-green">Resources</h3>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Contact US
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              How it works
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Top Earners
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Coupon verification page
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-green">Team</h3>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              About Us
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              FAQS
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              Blog
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-green">Follow Us</h3>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              <CgFacebook />
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              <BsTwitterX />
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            >
              <FiInstagram />
            </a>
            
          </div>

          {/* Brand Column */}
          <div className="flex flex-col items-end">
            <RyiderLogo/>
            <p className="text-gray-300 mb-4">
              It's free to join. Start earning in a minutes
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-7 pt-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400">
            Copyright © 2024
          </div>
          <div className="flex gap-6">
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            > 
              Terms & Conditions
            </a>
            <a
              href='/'
              className="text-gray-300 hover:text-green transition-colors duration-200"
            > 
              Privacy Policy
           </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer