
import { useState } from "react";

const menuItems = [
    { key: "research", label: "Research Methods" },
    { key: "capabilities", label: "Capabilities" },
    { key: "industries", label: "Industries" },
    { key: "resources", label: "Resources" },
];

function Header() {
    const [activeItem, setActiveItem] = useState(null);


    const getResearch = () => (
        <>
            <div className="flex gap-5 ">

                <div>
                    <h1>Understand Our approach to B2B research</h1>
                    <p>OVERVIEW</p>
                </div>
                <div>
                    <p>Quantitative Research</p>
                    <p>Qualitative Research</p>
                    <p>Recruitment and Fieldwork </p>
                </div>

                <div>
                    <p>Online and Offline Surveys</p>
                    <p>Focus Group Discussions</p>
                    <p>Quality Checks </p>
                </div>


            </div>

        </>
    )

    const getResources = () => (
        <>
            <div className="flex gap-5 ">

                <div>
                    <h1>Understand Our approach to B2B research</h1>
                    <p>OVERVIEW</p>
                </div>
                <div>
                    <h1>Branding and Advertising Communication</h1>
                    <p>Quantitative Research</p>
                    <p>Qualitative Research</p>
                    <p>Recruitment and Fieldwork </p>
                </div>

                <div>
                    <h1>Marketing Opportunity Research</h1>
                    <p>Online and Offline Surveys</p>
                    <p>Focus Group Discussions</p>
                    <p>Quality Checks </p>
                </div>

                <div>
                    <h1>Product Research</h1>
                    <p>Online and Offline Surveys</p>
                    <p>Focus Group Discussions</p>
                    <p>Quality Checks </p>
                </div>

                <div>
                    <h1>Customer and Segmentation</h1>
                    <p>Online and Offline Surveys</p>
                    <p>Focus Group Discussions</p>
                    <p>Quality Checks </p>
                </div>

            </div>

        </>
    )



    const getActiveData = () => {

        switch (activeItem) {
            case "research":
                return getResearch();
            case "resources":
                return getResources();
            default:
                return getResources();
        }
    }


    return (
        <div className=" bg-gray-100 relative   ">
            <nav className={`flex gap-2 justify-center items-center p-4 ${!activeItem && "bg-[#FBEEEE]"}`}>
                {menuItems.map((item) => (
                    <button
                        key={item.key}
                        onClick={() =>
                            setActiveItem(activeItem === item.key ? null : item.key)
                        }
                        className="flex items-center px-4 py-2 rounded-md bg-transparent transition-transform duration-150 hover:scale-105 text-[#565656]"
                    >
                        {/* Only underline the label text */}
                        <span className="relative group">
                            <span className="inline-block">
                                {item.label}
                            </span>
                            <span className="absolute  left-0 -bottom-0.5 h-0.5 bg-[#565656]  w-full opacity-0 group-hover:opacity-100 transition-opacity duration-100"></span>
                        </span>

                        
                        <span
                            className={`ml-2 w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-[#565656] transition-transform duration-300 ${activeItem === item.key ? "rotate-180" : ""
                                }`}
                        ></span>
                    </button>
                ))}
                <div className="flex gap-4">
                    <button className={` border-2 px-3 text-[16px]  bg-white ${activeItem ? "text-[#E8505E] border-[#E8505E]" : "text-[#3851A2] border-[#3851A2] "}  `}>Start Your Research</button>
                    <button className="bg-[#E8505E] text-[16px] py-1 px-3 text-white border-0 hover:bg-[#3851A2] transition-colors duration-300">Join a Paid Focus Group</button>

                </div>
            </nav>

            {
                activeItem &&
                <div

                    className=" h-[200px] p-6 absolute text-white text-lg w-full bg-[#E8505E] z-50 "
                >
                    {
                        getActiveData()
                    }

                </div>

            }
        </div>
    );
}

export default Header;
