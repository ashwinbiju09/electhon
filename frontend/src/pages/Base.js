import React from "react";
import Landing from "./Landing";
import CandidateInfo from "./CandidateInfo";
import Directions from "./Directions";
import EVM from "./EVM";
import Quiz from "./Quiz";
import Report from "./Report";
import Results from "./Results";
import Slip from "./Slip";
// import Login from "./Login";
import LoginPage from "./Login";
import SignUp from "./SignUp";

import { Route, Routes } from "react-router-dom";
import OTPPage from "./otp";
import Election from "./election";

const Base = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="candidateinfo" element={<CandidateInfo />} />
        <Route path="/directions" element={<Directions />} />
        <Route path="/simulation" element={<EVM />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/report" element={<Report />} />
        <Route path="/results" element={<Results />} />
<<<<<<< HEAD
=======
        <Route path="/slip" element={<Slip />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/election" element={<Election />} />
>>>>>>> 2c3bf140a4e9b9cd2bfd16f2e6c2d1d953a8ed36
      </Routes>
    </div>
  );
};

export default Base;
