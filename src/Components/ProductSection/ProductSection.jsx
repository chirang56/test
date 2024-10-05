import React, { useState } from 'react';

const ProductSection = () => {
  // Sample product data (replace with actual API or database data)
  const products = [
    { id: 1, name: "Chew Toy", description: "Durable chew toy perfect for teething puppies.", imageUrl: "https://via.placeholder.com/150", price: "$12.99" },
    { id: 2, name: "Pet Bed", description: "Comfortable pet bed for small to medium pets.", imageUrl: "https://via.placeholder.com/150", price: "$35.00" },
    { id: 3, name: "Cat Scratcher", description: "Sturdy cat scratcher to keep your feline entertained.", imageUrl: "https://via.placeholder.com/150", price: "$18.50" },
    { id: 4, name: "Dog Leash", description: "Strong and durable leash for dogs.", imageUrl: "https://via.placeholder.com/150", price: "$10.50" },
    { id: 5, name: "Pet Shampoo", description: "Organic pet shampoo for sensitive skin.", imageUrl: "https://via.placeholder.com/150", price: "$15.00" },
    { id: 6, name: "Pet Carrier", description: "Portable and comfortable pet carrier.", imageUrl: "https://via.placeholder.com/150", price: "$45.00" },
    { id: 7, name: "Dog Bowl", description: "Stainless steel dog bowl.", imageUrl: "https://via.placeholder.com/150", price: "$8.50" },
    { id: 8, name: "Cat Tree", description: "Multilevel cat tree for play and rest.", imageUrl: "https://via.placeholder.com/150", price: "$120.00" },
  ];

  // State to control the number of products displayed
  const [visibleCount, setVisibleCount] = useState(3);

  return (
    <div className="bg-white py-12" id="product">
      <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Our Products</h2>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
        {products.slice(0, visibleCount).map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
            <img src={product.imageUrl} alt={product.name} className="h-40 w-full object-cover rounded-t-lg" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
              <div className="mt-4">
                <span className="text-lg font-bold text-orange-600">{product.price}</span>
              </div>
              <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      {/* View More/Less Button */}
      <div className="flex justify-center mt-8 space-x-4">
        {/* View More Button  */}
        {visibleCount < products.length && (
          <button
            className="bg-orange-500 text-white py-2 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={() => setVisibleCount(visibleCount + 3)}
          >
            View More
          </button>
        )}
        {/* View Less Button */}
        {visibleCount > 3 && (
          <button
          className="bg-gray-500 text white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-300"
          onClick={() => setVisibleCount(3)}
          >
            View Less
            </button>
        )}
      </div>
    </div>
  );
};

export default ProductSection;
