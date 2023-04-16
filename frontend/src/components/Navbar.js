import React from "react";
import Slot from "./Slot";

const Navbar = (props) => {
  return (
    <div>
      <nav class="relative px-4 py-4 flex justify-between items-center bg-blue-800">
        <a class="text-3xl" href="/">
          <img class="h-12 ml-4" alt="logo" src="/assets/logo.png" />
        </a>
        <div class="md:text-2xl sm:text-xl ml-2 font-poppins font-semibold text-white">
          Democratic desk
        </div>
        <a
          class="body-font z-50 font-poppins inline-block ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="/login"
        >
          Login
        </a>
      </nav>
      {props.slot && <Slot />}
    </div>
  );
};
export default Navbar;
