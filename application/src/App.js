import React, { useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "./components/AdminComponent";
import Userpage from "./Userpage";

import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={[<Userpage />, <button onClick={signOut}>Sign out</button>]} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default withAuthenticator(App);
