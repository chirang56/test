import React, {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from './Components/Navbar/Navbar';

const App = () => {
  useEffect(() => {
    AOS.init ({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
  });
  return (
    <div className="overflow-x-hidden">
      <Navbar/>
      {/* <home/>
      <About/>
      <Menu/>
      <Contact/> */}
    </div>
    );
};

export default App;

