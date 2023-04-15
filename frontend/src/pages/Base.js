import React from "react";
import Landing from "./Landing";
import CandidateInfo from "./CandidateInfo";
import EVM from "./EVM";
import Report from "./Report";
import Login from "./Login";
import { Route, Routes } from "react-router-dom";
import OTPPage from "./otp";
import Election from "./election";
import Campaign from "./campaign";
import Success from "../components/campaign/success";
import AdminLog from "./adminlog";
import Dashboard from "../components/admin/dashboard";
import InstitutionList from "../components/admin/list";
import TimeSlot from "../components/slot/slot";
import Poster from "./Poster";
import Referral from "./Referral";

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
        <Route path="/campaign" element={<Campaign />} />
        <Route path="/success" element={<Success />} />
        <Route path="/adminlog" element={<AdminLog />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list" element={<InstitutionList />} />
<<<<<<< HEAD
        <Route path="/timeslot" element={<TimeSlot />} />
=======
        <Route path="/poster" element={<Poster />} />
        <Route path="/referral" element={<Referral />} />
>>>>>>> cf5027cd352fe65a4ae9197f5df17e64f40cc1b3
      </Routes>
    </div>
  );
};

export default Base;
