import React from 'react'
import { SlArrowUp } from "react-icons/sl";

const LastFooter = () => {
  return (
   <>
   <div className='bg-[#E8505E] py-10  relative'> 
   <div className=' flex justify-center  '>
    
    <div className='flex gap-10' > 
        <div>
        <div className='mb-4'>
        <img src="images/logo.png" alt = "logo" />
        </div>
        <div className='flex justify-between'>
            <span className='border-2 border-[#ffffff] h-12 w-12 rounded-full flex justify-center items-center '>
                <img src = "images/linkedin.png"  className='w-[20px] h-[20px]' />
            </span>
            <span className='border-2 border-[#ffffff] h-12 w-12 rounded-full flex justify-center items-center'>
            <img src = "images/X_logo.png"  className='w-[20px] h-[20px]' />
            </span>
            <span className='border-2 border-[#ffffff] h-12 w-12 rounded-full flex justify-center items-center'>
            <img src = "images/v_logo.png"  className='w-[20px] h-[20px]' />
            </span>
        </div>


        </div>

        <div className='text-[#FFFFFF] '>
            <h1 className='mb-3 font-[600] text-[16px]'>Research Methods</h1>
            <p>Qualitative Research</p>
            <p>Quantitative Research</p>
            <p>
            Fieldwork
            </p>
            <p>Surveys</p>
            <p>Focus Group Discussions</p>
            <p>Quality checks</p>
        </div>

        <div className='text-[#FFFFFF] w-[202px] '>
            <h1 className='mb-3 font-[600] text-[16px]'>Research Methods</h1>
            <p>Branding and Advertising  Communication</p>
            <p>Quantitative Research</p>
            <p>Consumer Research and Segmentation</p>
            <p>Business Conduct and Ethics</p>
        </div>

        <div className='text-[#FFFFFF]'>
            <h1 className='mb-3 font-[600] text-[16px]'>Research Methods</h1>
            <p>Qualitative Research</p>
            <p>Quantitative Research</p>
            <p>
            Fieldwork
            </p>
            <p>Surveys</p>
            <p>Focus Group Discussions</p>
            <p>Quality checks</p>
        </div>

        <div className='text-[#FFFFFF]'>
            <h1 className='mb-3 font-[600] text-[16px]'>Research Methods</h1>
            <p>Branding and Advertising  Communication</p>
            <p>Quantitative Research</p>
            <p>Consumer Research and Segmentation</p>
            <p>Business Conduct and Ethics</p>
        </div>

    </div>


     
   </div>
   <hr  className='w-screen border-gray-300 mt-3  '/>

   <div className='flex flex-col items-center ' >
   <p className='text-white text-sm '> &copy;  Copyright 2025. All Rights Reserved.</p>
   </div>
   <button className='absolute bottom-0 right-8 rounded-t-md bg-[#FFFFFF94]  h-[48px] w-[56px] flex justify-center items-center'>

   <SlArrowUp className='text-[#ffffff] text-[24px]' />
   </button>
   
 
    
    
    
   
   </div>
  
   
   </>
  )
}

export default LastFooter