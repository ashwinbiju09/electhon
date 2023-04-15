import React from "react";
import Landing from "./Landing";
import CandidateInfo from "./CandidateInfo";
import Directions from "./Directions";
import EVM from "./EVM";
import Quiz from "./Quiz";
import Report from "./Report";
import Results from "./Results";
import Slip from "./Slip";
import Login from "./Login";
import SignUp from "./SignUp";

import { Route, Routes } from "react-router-dom";

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
        <Route path="/slip" element={<Slip />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default Base;
