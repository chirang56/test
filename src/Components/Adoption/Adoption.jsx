import React from "react";
import PGMR from "../../assets/PGMR.png";

const adoptionData = [
  {
    id:1,
    img:PGMR,
    name:"Dog Bone",
    description:
    "Lorem ipsum dolor sit",
    aosDelay:"100",
  },
  {
    id:2,
    img:PGMR,
    name:"Cat Feat",
    description:
    "Lorem ipsum dolor sit",
    aosDelay:"300",
  },
  {
    id:3,
    img:PGMR,
    name:"Fish Bread",
    description:
    "Lorem ipsum dolor sit",
    aosDelay:"500",
  },
]
const Adoption = () => {
  return (
    <>
    <span id="adoption"></span>
    <div className="py-10">
      <div className="container">
        {/* header title */}
        <div>
          <h1 className="text-4xl font-bold font-merienda text-gray-800">
            PetGo Mania: Your Trusted Partner in Pet Care and Adoption!
          </h1>
        </div>

        {/* adoption section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-14 md:gap-5 place-items-center">
          {
            adoptionData.map((data, index) => {
              return (
                <div 
                data-aso="fade-up"
                data-aos-delay={data.aosDelay}
                key={index}
                className="rounded-2xl bg-white hover:bg-primary 
                hover:text-white shadow-xl duration-200 max-w-[300px]
                group relative" 
                >

                  {/* Image section  */} 
                  <div className="h-[125px]">
                  <img src={data.img} alt="" className="max-w-[125px] block
                  mx-auto transform-translate-y-14 group-hover:scale-105
                  group-hover:rotate-6 duration-300"/>
                  </div>

                  {/* Text content  */}
                  <div>
                    <h1 className="text-xl font-chicle text-center">{data.name}</h1>
                    <p className="text-center text-orange-800 group-hover:text-white">{data.description}</p>
                  </div>
                </div>
              );
            }
          )
          }
          <div></div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Adoption;
