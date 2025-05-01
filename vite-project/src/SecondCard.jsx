import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";

const SecondCard = () => {
  return (


    <>

      <div className='flex flex-row justify-center gap-[50px] py-20'>

        <div className='mt-30'>

          <div className="relative w-[256px] h-[304px] border-2 rounded-sm  border-black overflow-visible bg-white">
            <img
              src="/images/girl.png"
              alt="Override"
              className="absolute bottom-0 -right-10 w-[254px] h-[435px] object-cover"
            />
          </div>
        </div>

        <div className='flex flex-col mt-[30px] w-[243px]'>
          <div className="text-xl w-[229px] mb-6 font-medium p-4 rounded-sm bg-[#D5FDAD]">
            <h1 className='text-[18px] text-[#000000] font-[600]'>Unlock in-depth market insights</h1>
          </div>

          <h1 className='text-[40px] font-[600] leading-none'>Everything You Need, All in One Place</h1>
          <p className='text-[16px] font-[400] leading-none mt-2'>Harness our comprehensive solutions to unearth valuable insights that drive innovation, improve customer connections, and boost efficiency</p>


        </div>

        <div>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="relative w-[256px] h-[304px] bg-white border-2 border-black rounded-lg p-4 transition duration-300 ease-in-out group hover:bg-[#E8505E]">
              <div>

                <img src="images/noun-audience.png" alt="Icon" className="" />
                <h1 className="text-lg font-[600] mb-6 mt-0">Audience </h1>
                <p className='font-[400] text-[16px]'>Tap into a wide panel of respondents for any of your market research needs. </p>
              </div>
              <button className="absolute bottom-0 right-0 bg-[#E8505E] text-white py-2 px-4 rounded-tl-lg rounded-br-[6.5px] hover:bg-white hover:text-black  border-transparent group-hover:bg-white group-hover:text-black hover:border-red-600 transition duration-300 ease-in-out">
                <HiArrowLongRight className='text-3xl w-[50px]' />
              </button>
            </div>

            <div className="relative w-[256px] h-[304px] bg-white border-2 border-black rounded-lg p-4 transition duration-300 ease-in-out group hover:bg-[#E8505E]">
              <img src="images/Outline.png" alt="Icon" className="" />
              <h1 className="text-lg font-[600] mt-0 mb-4">Qualitative Research</h1>
              <p className='font-[400] text-[16px]'>Tap into a wide panel of respondents for any of your market research needs.  </p>
              <button className="absolute bottom-0 right-0 bg-[#E8505E] text-white py-2 px-4 rounded-tl-lg rounded-br-[6.5px]  hover:bg-white hover:text-black  border-transparent group-hover:bg-white group-hover:text-black hover:border-red-600 transition duration-300 ease-in-out">
                <HiArrowLongRight className='text-3xl w-[50px]' />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 ">

            <div className="relative w-[256px] h-[304px] bg-white border-2 border-black rounded-lg p-4 transition duration-300 ease-in-out group hover:bg-[#E8505E]">
              <img src="images/Group.png" alt="Icon" className="" />
              <h1 className="text-lg font-[600] mt-0 mb-4">Quantitative Research</h1>
              <p className='font-[400] text-[16px]'>Tap into a wide panel of respondents for any of your market research needs. </p>
              <button className="absolute bottom-0 right-0 bg-[#E8505E] text-white py-2 px-4 rounded-tl-lg rounded-br-[6.5px]  hover:bg-white hover:text-black  border-transparent group-hover:bg-white group-hover:text-black  transition duration-300 ease-in-out">
                <HiArrowLongRight className='text-3xl w-[50px]' />
              </button>
            </div>

            <div className="relative w-[256px] h-[304px] bg-white border-2 border-black rounded-lg p-4 transition duration-300 ease-in-out group hover:bg-[#E8505E]">
              <img src="images/Outline.png" alt="Icon" className="" />
              <h1 className="text-lg font-[600]  mt-0  mb-4">Quality Checks</h1>
              <p className='font-[400] text-[16px]'>Tap into a wide panel of respondents for any of your market research needs. </p>
              <button className=" text-center absolute bottom-0 right-0 bg-[#E8505E] text-white py-2 px-4 rounded-tl-lg rounded-br-[6.5px]  hover:bg-white   group-hover:bg-white group-hover:text-black transition duration-300 ease-in-out">
                <HiArrowLongRight className='text-3xl w-[50px]' />
              </button>
            </div>
          </div>
        </div>

      </div>


    </>



  )
}

export default SecondCard