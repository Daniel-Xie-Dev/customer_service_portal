import React, { useEffect, useState } from "react";
import "./App.css";
import { Login } from "./Login";
import { Register } from "./Register";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminComponent from "./components/AdminComponent";
import Userpage from "./Userpage";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "@mui/material";

function App({ signOut, user }) {
  // console.log(user);

  const [userData, setUserData] = useState({});
  // console.log(process.env.REACT_APP_GET_USER);
  useEffect(() => {
    const getUser = async () => {
      await axios
        .get(process.env.REACT_APP_GET_USER + user.attributes.email)
        .then((result) => setUserData(result.data))
        .catch((error) => console.log(error));
    };

    getUser();
  }, [user]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Userpage userData={userData} />} />
          <Route path="/admin" element={<AdminComponent />} />
        </Routes>
      </BrowserRouter>
      <button className="signout_button" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default withAuthenticator(App);
