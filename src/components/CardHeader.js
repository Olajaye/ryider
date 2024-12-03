import { IoIosArrowForward } from "react-icons/io";
const CardHeader = ({title}) => {
  return (
    <div className='container mx-auto px-4 flex space-x-10 pt-7 pb-7'>
      <h2 className='text-[#201D1D] font-poppins font-bold'>{title}</h2>
      <button className='flex space-x-2 text-green items-center font-poppins font-bold'>View All <IoIosArrowForward className='h-6 w-5'/></button>
    </div>
  )
}

export default CardHeader