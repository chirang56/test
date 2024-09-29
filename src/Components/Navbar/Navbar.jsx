import React from "react";
import Logo from "../../assets/PetGoLogo/petgom.png";


export const Navbar = () => {
  return ( 
  
  <div className="bg-gradient-to-r from-secondary-to-primary/90
  text-white">
    <div className="container bg-red-500">
      <div className="flex">
        {/* Logo section */}
        <div className="" >
          <a href="#" className="font-bold text-2xl sm:text-3xl
          flex justify-center items-center gap-2
          tracking-wider font-cursive">
            <img src={Logo} alt="Logo" className="w-14"/>
            PetGo-Mania
          </a>
        </div>
      
        {/* Links section */}
      </div>
    </div>
  </div>
  );
};

export default Navbar;
