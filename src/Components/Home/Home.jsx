import React from 'react';
import PGMR from "../../assets/PGMR.png";
 
export const Home = () => {
  return (
  <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex 
  justify-center items-center text-white">
    <div className="container pb-8 sm:pb-0">
      <div className="grid  grid-cols-1 sm:grid-cols-2" >
      {/* Text content section */}
      <div className="order-2 sm:order-1 flex flex-col justify-center 
      gap-6">
        <h1 className="text-5xl sm:text-6xl
        lg:text-7xl font-bold">One-Stop <span 
          className="text-orange-500 font-chicle">
          Pet Shop</span> & Adoption Hub In the Town 
        </h1>

         <div>
          <button className="bg-gradient-to-r from-primary 
          to-secondary border-2 border-primary font-chicle rounded-full px-4 
          py-2 text-yellow-300 hover:scale-105 duration-200">
            Pet & Breeds
          </button>
         </div>
      </div>

      {/* Image content section */}
      <div className="min-h-[450px] flex justify-center items-center 
      order-1 sm:order-2 relative">
        <img src={PGMR} alt="" className="w-[300px] sm:w-[450px] 
        sm:scale-110 mx-auto spin"/>

        <div className="bg-gradient-to-r from-primary to-secondary 
        absolute top-10 left-10 p-3 rounded-xl">
          <h1> Hey, Pet Lovers </h1>
        </div>
        <div className="bg-gradient-to-r from-primary to-secondary 
        absolute bottom-10 right-10 p-3 rounded-xl">
          <h1> PetGo Mania </h1>
        </div>
      </div>
      </div>
    </div>
  </div>
  );
};

export default Home;