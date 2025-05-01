import React from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
const ThirdCard = () => {
  return (
 <>
 <div className='bg-[#ECECEC] flex justify-center'>

 
 
<div className='py-5  '>
    

    <h1 className='font-[700] text-[30px] w-[991px] mb-4'>We’re a full-service B2B market research thought partner committed to strengthening your strategies with deep, subject matter expertise.</h1>
    <div className='flex gap-[20px] mb-5'>

        <div className='bg-[#EBFFD8] w-[361px] h-[376px] rounded-1 p-5 relative'>
            <h1 className='w-[212px] font-[600]'>Branding and Advertising Communication</h1>
            <p className='w-[212px]'>We help brands resonate. From brand perception and awareness to message testing and ad effectiveness, our research empowers you to communicate with clarity and impact. Backed by qualitative insights and robust tracking, we ensure your brand voice connects with the right audience.</p>
            <HiArrowLongRight className='text-[40px]' />
            <div className='absolute bottom-0 right-0'>
               <img src="images/Rectangle.png" />

            </div>

        </div> 


        <div className='relative rounded-1 p-5  bg-gradient-to-r from-[#F2EDFF] to-[#FFFFFF] w-[744px] '>

        <h1 className='w-[180px] font-[600]'>Market Opportunity Research</h1>
            <p className='w-[366px]'>Find your edge before you enter. Our market opportunity research identifies whitespace, tests feasibility, and maps competitive dynamics. Whether you're planning a launch or exploring new segments, we provide the insights to make bold, informed moves.</p>
            <HiArrowLongRight className='text-[40px]' />
            <div className='absolute top-12 right-0'>
               <img src="images/door.png" />
            </div>

        </div>


    </div>


    <div className='flex gap-[20px]'>


    <div className='relative rounded-1 p-5 flex flex-col justify-center bg-gradient-to-r from-[#DDDDDD] to-[#FFFFFF] w-[744px] '>

<h1 className='w-[180px] font-[600]'>Customer Research and Segmentation</h1>
    <p className='w-[366px]'>Know who you're talking to — and why it matters. We uncover the motivations, behaviors, and needs of your customers, then segment them meaningfully to guide strategy. Our blend of qualitative and quantitative approaches ensures depth, accuracy, and actionable clarity.</p>
    <HiArrowLongRight className='text-[40px]' />
    <div className='absolute top-4 right-0'>
       <img src="images/halfcircle.png" />
    </div>

</div>


<div className='bg-[#FFEAEB] flex flex-col justify-center w-[361px] h-[376px] rounded-1 p-5 relative'>
    <h1 className='w-[212px] font-[600]'>Product Research</h1>
    <p className=''>Build products that solve real problems. From concept testing and feature prioritization to in-use feedback, we support every phase of product development. Our insights help you align innovation with user expectations — minimizing risk and maximizing relevance.</p>
    <HiArrowLongRight className='text-[40px]' />
    <div className='absolute right-6 top-4'>
       <img src="images/largecube.png" />

    </div>
    <div className='absolute bottom-4 right-6'>
       <img src="images/smallcube.png" />

    </div>

</div> 





</div>


    

</div>
</div>
 </>
  )
}

export default ThirdCard