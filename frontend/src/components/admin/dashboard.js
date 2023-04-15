import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <form class="mt-8 space-y-6">
        <div
          class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
          style={{ "padding-top": "20px" }}
        >
          <div class="max-w-md w-full space-y-8">
            <div class="mb-10">
              <div class="flex justify-center">
                {/* <img alt="" class="h-14 w-14" src="/assets/logo.png" /> */}
              </div>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Choose the type of database
              </h2>
              <br></br>

              <div
                class="grid  grid-cols-2 space-x-2 rounded-xl bg-gray-200 p-2"
                x-data="app"
              >
                <div>
                  <input
                    type="radio"
                    name="option"
                    id="1"
                    class="peer hidden"
                    checked
                  />
                  <label
                    for="1"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Schools
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    name="option"
                    id="2"
                    class="peer hidden"
                  />
                  <label
                    for="2"
                    class="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
                  >
                    Colleges
                  </label>
                </div>
              </div>
            </div>

            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <br />
      <Footer />
    </div>
  );
};

export default Dashboard;
