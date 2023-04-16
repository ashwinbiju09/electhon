import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const DetailForm = () => {
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
                <img alt="" class="h-14 w-14" src="/assets/logo.png" />
              </div>
              <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Register your Institution
              </h2>
              <p class="text-center text-sm text-gray-600 mt-5">
                <a
                  class="font-medium text-blue-600 hover:text-blue-500"
                  href="/login"
                ></a>
              </p>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Name
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Name of the Institution"
                  value=""
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Address
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Address"
                  value=""
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Institution
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="School / College"
                  value=""
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Email
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Email"
                  value=""
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Mobile
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Mobile number"
                  value=""
                />
              </div>
            </div>
            <div class="-space-y-px">
              <div class="my-5">
                <label for="voter-id" class="sr-only">
                  Url
                </label>
                <input
                  id="voter-id"
                  name="voterid"
                  type="string"
                  required=""
                  class="rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-smundefined"
                  placeholder="Google sheet URL"
                  value=""
                />
              </div>
            </div>
            <p class="text-sky-900">
              Note : Sheet could contains the following columns as mandatory:
              Student name , Roll no, Date Of Birth , Aadhar number.
            </p>
            <div>
              <a
                href="/success"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-10"
              >
                Submit
              </a>
            </div>
          </div>
        </div>
      </form>
      <br />
      <Footer />
    </div>
  );
};

export default DetailForm;
