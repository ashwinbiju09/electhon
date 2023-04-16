import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EVM = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 class="text-center font-bold py-5 text-3xl">
          Electronic Voting Machine
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Simulation
          </span>
        </h1>
      </div>
      <img
        class="mx-auto"
        src="/assets/1.png"
        alt="Workplace"
        useMap="#workmap"
        width={1000}
      />
      <map name="workmap">
        <area
          shape="rect"
          coords="290,172,333,250"
          alt="Phone"
          href="/output"
        />
      </map>
      <Footer />
    </div>
  );
};

export default EVM;
