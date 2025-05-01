
import { HiArrowLongRight } from "react-icons/hi2";

const FooterCard = () => {
    return (
        <>
            <div className='bg-[#EAFFD6]  py-20 flex justify-center'>

                <div className=''>
                    <h1 className='font-[600] text-[32px] mb-10'>Fresh Ideas to Help You Reach New Heights.</h1>

                    <div className='flex gap-10'>
                        <div className=' items-start rounded-sm '>
                            <img src="images/children.png" className='w-[256px] rounded-tr-sm rounded-tl-sm' />
                            <div className='p-4 relative border-1 rounded-bl-sm rounded-br-sm border-t-0 border-[#000000]'>
                                <button className='bg-[#BBFDF5] border-0 rounded-md px-2 py-1 w-[90px] text-center'> Blog</button>
                                <p className='w-[200px] text-[16px] font-[400] leading-none mb-[8px] mt-[5px]'>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>
                                <button className='bg-[#E8505E] absolute bottom-0 right-0 border-none rounded-tl-md rounded-br-sm text-[#ffffff] px-4 py-0'>
                                    <HiArrowLongRight className='text-[30px]' />
                                </button>
                            </div>

                        </div>
                        <div className=' items-start rounded-sm '>
                            <img src="images/graph.png" className='w-[256px] h-[170px] rounded-tr-sm rounded-tl-sm' />
                            <div className='p-4 relative border-1 rounded-bl-sm rounded-br-sm border-t-0 border-[#000000]'>
                                <button className='bg-[#BBFDF5] border-0 rounded-md px-2 py-1 w-[90px] text-center'> Blog</button>
                                <p className='w-[200px] text-[16px] font-[400] leading-none mb-[8px] mt-[5px]'>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>
                                <button className='bg-[#E8505E] absolute bottom-0 right-0 border-none rounded-tl-md rounded-br-sm text-[#ffffff] px-4 py-0'>
                                    <HiArrowLongRight className='text-[30px]' />
                                </button>
                            </div>

                        </div>
                        <div className=' items-start rounded-sm '>
                            <img src="images/friends.png" className='w-[256px] rounded-tr-sm rounded-tl-sm' />
                            <div className='p-4 relative border-1 rounded-bl-sm rounded-br-sm border-t-0 border-[#000000]'>
                                <button className='bg-[#BBFDF5] border-0 rounded-md px-2 py-1 w-[90px] text-center'> Blog</button>
                                <p className='w-[200px] text-[16px] font-[400] leading-none mb-[8px] mt-[5px]'>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>
                                <button className='bg-[#E8505E] absolute bottom-0 right-0 border-none rounded-tl-md rounded-br-sm text-[#ffffff] px-4 py-0'>
                                    <HiArrowLongRight className='text-[30px]' />
                                </button>
                            </div>

                        </div>
                        <div className=' items-start rounded-sm '>
                            <img src="images/laptop.png" className='w-[256px] rounded-tr-sm rounded-tl-sm' />
                            <div className='p-4 relative border-1 rounded-bl-sm rounded-br-sm border-t-0 border-[#000000]'>
                                <button className='bg-[#BBFDF5] border-0 rounded-md px-2 py-1 w-[90px] text-center'> Blog</button>
                                <p className='w-[200px] text-[16px] font-[400] leading-none mb-[8px] mt-[5px]'>Gain feedback at every phase of product and ad development, from concept to execution with agile testing.</p>
                                <button className='bg-[#E8505E] absolute bottom-0 right-0 border-none rounded-tl-md rounded-br-sm text-[#ffffff] px-4 py-0'>
                                    <HiArrowLongRight className='text-[30px]' />
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>



        </>
    )
}

export default FooterCard