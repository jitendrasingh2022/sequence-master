import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginContainer from "../containers/LoginContainer";
import SignupContainer from "../containers/SignupContainer";
import Dashboard from "../component/Dashboard";
import ClientManagement from "../component/ClientManagement";
import AddClient from "../component/AddClient";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/login" element={<LoginContainer />} />
          <Route path="/signup" element={<SignupContainer />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clientManagement" element={<ClientManagement />} />
          <Route path="/addclient" element={<AddClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
