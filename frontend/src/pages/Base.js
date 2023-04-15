import React from "react";
import Landing from "./Landing";
import CandidateInfo from "./CandidateInfo";
import EVM from "./EVM";
import Report from "./Report";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import OTPPage from "./otp";
import Election from "./election";

const Base = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="candidateinfo" element={<CandidateInfo />} />
        <Route path="/simulation" element={<EVM />} />
        <Route path="/report" element={<Report />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp" element={<OTPPage />} />
        <Route path="/election" element={<Election />} />
      </Routes>
    </div>
  );
};

export default Base;
