import React from "react";
import Logo from "../../assets/PetGoLogo/petgom.png";
import { FaOpencart } from "react-icons/fa";

const Menus =[
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
  },
]
export const Navbar = () => {
  return ( 
  
  <div className="bg-gradient-to-r from-secondary-to-primary/90
  text-white">
    <div className="container bg-red-500">
      <div className="flex justify-between items-center gap-4 ">

        {/* Logo section */}
        <div className="" >
          <a href="#" className="font-bold text-2xl sm:text-3xl
          flex justify-center items-center gap-2
          tracking-wider font-sans">
            <img src={Logo} alt="Logo" className="w-14"/>
            PetGo Mania
          </a>
        </div>
      
        {/* Links section */}
        <div className="flex justify-between items-center gap-4">
          <ul className="hidden sm:flex
          items-center gap-4">
            {
              Menus.map((data, index) => (
                <li key={index}>
                  <a href={data.link} className="inline-block text-xl 
                  py-4 px-4 text-white/70 hover:text-white
                  duration-200"> 
                    {data.name} 
                  </a>
                </li>
            ))}
          </ul>
          <button className="bg-primary/70 px-4 py-2 rounded-full
          hover:scale-105 duration-200 flex items-cemter gap-3">
            Cart
            <FaOpencart className="text-xl cursor-pointer"/>
          </button>
        </div>
        
      </div>
    </div>
  </div>
  );
};

export default Navbar;
