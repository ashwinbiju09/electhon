import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EVM3 = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1 class="text-center font-bold py-5 text-3xl">
          You have casted your vote.
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-300">
            Congratulations !
          </span>
        </h1>
      </div>
      <img class="mx-auto" src="/assets/3.png" alt="Workplace" width={1000} />
      <Footer />
    </div>
  );
};

export default EVM3;
