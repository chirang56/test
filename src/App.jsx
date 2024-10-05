import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { Home } from "./Components/Home/Home";
import ProductSection from "./Components/ProductSection/ProductSection";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });

  return (
    <div>
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* Home Section */}
        <section id="home" className="h-screen bg-orange-100 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to PetGo Mania!</h1>
          <Home />
        </section>

        {/* Product Section */}
        <section id="product" className="py-12 bg-white">
          <ProductSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="h-screen bg-orange-100 flex items-center justify-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        </section>
      </main>

      {/* <Home/>
      <About/>
      <Menu/>
      <Contact/> */}
    </div>
  );
};

export default App;