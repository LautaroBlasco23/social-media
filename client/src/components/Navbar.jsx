import React from "react";

const Navbar = () => {
    return(
        <div className="w-full bg-orange-300 text-orange-100 margin.auto">
            <ul className="w-full flex justify-between items-center py-4">
                <li className="ml-8 hover:text-orange-900 cursor-pointer">
                    <img src="favicon.png" alt="" className="h-[45px]"/>
                </li>
                <li className="flex justify-center items-center">
                    <div className="mx-24 hover:text-orange-900 cursor-pointer">
                        Search
                    </div>
                    <div className="mx-24 hover:text-orange-900 cursor-pointer">
                        My Profile
                    </div>
                </li>
                <li className="mr-8 hover:text-orange-900 cursor-pointer">Exit</li>
            </ul>
        </div>
    )
}

export default Navbar;