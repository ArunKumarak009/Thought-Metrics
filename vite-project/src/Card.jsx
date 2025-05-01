// import React, { useState } from 'react';

// const Card = () => {
//   const buttonData = [
//     { label: 'FMCG', text: 'Details about FMCG...' },
//     { label: 'Retail and Merchandising', text: 'Details about Retail and Merchandising...' },
//     { label: 'Financial Services', text: 'Details about Financial Services...' },
//     { label: 'Investors', text: 'Details about Investors...' },
//     { label: 'Media', text: 'Details about Media...' },
//     { label: 'Technology', text: 'Details about Technology...' },
//     { label: 'Automotive', text: 'Details about Automotive...' },
//     { label: 'Advertising and Marketing', text: 'Details about Advertising and Marketing...' },
//     { label: 'Human Resources', text: 'Details about Human Resources...' },
//     { label: 'Education', text: 'Details about Education...' },
//     { label: 'Healthcare and Life Sciences', text: 'Details about Healthcare and Life Sciences...' },
//     // Add more buttons and their corresponding texts here
//   ];

//   const [displayText, setDisplayText] = useState('');
//   const [activeButton, setActiveButton] = useState(buttonData[2].label); // Initialize with 'Financial Services'

//   const handleButtonClick = (item) => {
//     setDisplayText(item.text);
//     setActiveButton(item.label);
//   };

//   return (
//     <div className="p-6 ">
//       <h1 className="text-2xl font-bold mb-4">Designed to meet your unique needs.</h1>
//       <div className="flex">
//         {/* Card */}
//         <div
//           className="border border-black rounded-lg"
//           style={{ height: '626px', width: '830px' }}
//         >
//           {/* Left side content */}
//           <div className="w-1/2 p-6">
//             {/* Your main content area - image will go here later */}
//             <p>{displayText || buttonData[2].text}</p>
//           </div>
//           {/* Empty right side of the card */}
//           <div className="w-1/2" />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col ml-4 justify-center">
//           {buttonData.map((item, index) => (
//             <button
//               key={index}
//               className={`h-9 w-68 rounded text-center font-semibold mb-2 ${
//                 activeButton === item.label
//                   ? 'bg-[#E8505E] text-white'
//                   : 'bg-gray-200 text-gray-800 hover:bg-[#E8505E]'
//               }`}
//               onClick={() => handleButtonClick(item)}
//             >
//               {item.label}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useState } from 'react';

const Card = () => {
  const Data = [
    {
      id: "1",
      label: 'FMCG',
      description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."],
      image: "images/img1.jpg"

    },
    {
      id: "2",
      image: "images/img2.jpg",
      label: 'Retail and Merchandising', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },

    {
      id: "3",
      image: "images/img3.png",
      label: 'Financial Services', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "4",
      image: "images/img4.jpg",
      label: 'Investors', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "5",
      image: "images/img5.jpg",
      label: 'Media', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "6",
      image: "images/img6.jpg",
      label: 'Technology', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "7",
      image: "images/img7.jpg",
      label: 'Automotive', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "8",
      image: "images/img8.jpg",
      label: 'Advertising and img1', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "9",
      image: "images/img9.jpg",
      label: 'Human Resources', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "10",
      image: "images/img10.jpg",
      label: 'Education', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "11",
      image: "images/img11.jpg",
      label: 'Healthcare and Life Sciences', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    {
      id: "12",
      image: "images/img1.jpg",
      label: 'Healthcare and Life Sciences', description: "In the ever-evolving world of consumer packaged goods, staying ahead of the curve is not just an option—it's a necessity. Here's how Thought Metrics can guide you to success:",
      title: "Meet Your Customers' Needs Every Time",
      unlist: ["Connect with the right people to make the right decisions even when you need to move quickly.",
        "Better understand not just what customers want and need, but why and how they make their decisions.",
        "Gain feedback at every phase of product and ad development, from concept to execution with agile testing."]
    },
    // Add more buttons and their corresponding texts here
  ];

  const [activeId, setActiveId] = useState(Data[0].id);

  // Initialize with 'Financial Services'
  let getActiveId = Data.filter(eachItem => eachItem.id === activeId)
  let activeObj = getActiveId[0]

  const handleButtonClick = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <div className='flex justify-center py-10'>

        <div className="">
          <h1 className="text-2xl font-bold mb-4">Designed to meet your unique needs.</h1>
          <div className="flex">
            
            <div className="border border-black rounded-md w-[831px] flex justify-center py-10">
              <div className='flex flex-col justify-between ' >
                <h1 className='font-[600]'>{activeObj.label}</h1>
                <div className='flex gap-8'>
                  <div className='w-[400px]'>
                    <p className='font-[600]'>{activeObj.title}</p>
                    <p>{activeObj.description}</p>
                    <div>
                      <ul className="list-disc pl-5 space-y-1">
                        {activeObj.unlist.map((item, index) => (
                          <li key={index} className="text-base text-gray-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  <img src={activeObj.image} className='w-[300px] h-[300px] rounded-sm' alt="sample" />



                </div>

                <div className='flex justify-between '>
                  <span className='rounded-full p-2 bg-[#E8505E] text-[#000000] font-bold'> {activeObj.id.length == 1 ? `0${activeObj.id}` : activeId}</span>
                  <button className='rounded-sm p-2 bg-[#E8505E] text-[#000000] font-bold'>see More</button>
                </div>

              </div>



              <div />
            </div>

            {/* Buttons */}
            <div className="flex flex-col ml-4 justify-between" > {/* Match card height */}
              {Data.map((item) => (
                <button
                  key={item.id}
                  className={`h-[40px] w-[272px] rounded-md mb-2.5 text-center font-semibold ${ // Adjusted height and rounded corners
                    activeId === item.id
                      ? 'bg-[#E8505E] text-black shadow-[0_4px_6px_-4px_#E8505E]'
                      : 'bg-gray-200 text-black hover:bg-[#E8505E]'
                    }`}
                  onClick={() => handleButtonClick(item.id)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </>


  );
};

export default Card;
