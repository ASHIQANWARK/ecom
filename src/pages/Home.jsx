import React from "react";
import Hero from "../pages/Hero";
import VisionMission from "../pages/VissionMission"; // Fixed filename
import WhyChooseUs from "../pages/WhyChooseUs";
import OurProcess from "../pages/OurProcess";
import FAQ from "../pages/Faq";

import ChatBot from "../pages/Chatbot"; // Import the ChatBot component
import About from "../pages/About";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <VisionMission />
      <WhyChooseUs />
      <OurProcess />
      <FAQ />
      <Team />
      <ChatBot /> {/* Chatbot Component */}
    </div>
  );
};

export default Home;
