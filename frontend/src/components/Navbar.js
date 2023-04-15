import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="relative px-4 py-4 flex justify-between items-center bg-blue-800">
        <a class="text-3xl" href="/">
          <img class="h-12 ml-4" alt="logo" src="/assets/logo.png" />
        </a>
        <a
          class="body-font font-poppins inline-block ml-auto mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-200 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
