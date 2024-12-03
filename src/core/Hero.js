import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <main className='container mx-auto px-4 pt-7'>
      <div className='h-[500px] w-full bg-heroBg bg-no-repeat bg-cover flex justify-center items-center rounded-lg'>
        <div className='flex items-center flex-col text-center font-poppins'>
          <h1 className='text-white font-poppins font-bold md:text-5xl'>
            Earn <span className='text-green'>Money</span> from Everyday Tasks with <span className='text-green'>Ryider</span>
          </h1>
          <h6 className='max-w-[55%] mt-5 text-white'>Turn your online activities into real earnings. Complete tasks, get paid, and make the most of your time!"</h6>
          <div className="flex space-x-7 items-center mt-5">
            <p className="text-white">Learn More</p>
            <button className="flex items-center bg-[#128C7E] p-3 text-sm text-center font-medium text-white rounded-lg">
              Get Started <MdArrowOutward className="ms-3 w-6 h-6"/>
            </button>
          </div>
        </div>
      </div> 
    </main>
  )
}

export default Hero