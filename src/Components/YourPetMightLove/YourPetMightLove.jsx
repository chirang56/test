import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const YourPetMightLove = () => {
  // Sample product data for demonstration purposes (replace with API or database data)
  const products = [
    { id: 1, name: "Chew Toy", description: "Durable toy for teething.", imageUrl: "https://via.placeholder.com/150", price: "$12.99" },
    { id: 2, name: "Pet Bed", description: "Soft and comfy bed for pets.", imageUrl: "https://via.placeholder.com/150", price: "$35.00" },
    { id: 3, name: "Cat Scratcher", description: "Keeps cats entertained.", imageUrl: "https://via.placeholder.com/150", price: "$18.50" },
    { id: 4, name: "Dog Leash", description: "Strong and durable leash.", imageUrl: "https://via.placeholder.com/150", price: "$10.50" },
    { id: 5, name: "Pet Shampoo", description: "Gentle and safe shampoo.", imageUrl: "https://via.placeholder.com/150", price: "$15.00" },
    { id: 6, name: "Pet Carrier", description: "Portable and comfortable.", imageUrl: "https://via.placeholder.com/150", price: "$45.00" },
    { id: 7, name: "Dog Bowl", description: "Stainless steel bowl.", imageUrl: "https://via.placeholder.com/150", price: "$8.50" },
    { id: 8, name: "Cat Tree", description: "Multi-level for fun and rest.", imageUrl: "https://via.placeholder.com/150", price: "$120.00" },
  ];

  // Ref to control the scroll position of the product container
  const scrollRef = useRef(null);

  // Scroll left and right handlers
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Adjust scroll distance as needed
      behavior: "smooth",
    });
  };

  return (
    <div className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Your Pet Might Love
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Button */}
          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 focus:outline-none z-10"
            onClick={scrollLeft}
          >
            <FaArrowLeft />
          </button>

          {/* Product Cards Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-4 p-4"
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-40 w-full object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2">
                    {product.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-lg font-bold text-orange-600">
                      {product.price}
                    </span>
                  </div>
                  <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 focus:outline-none z-10"
            onClick={scrollRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default YourPetMightLove;
