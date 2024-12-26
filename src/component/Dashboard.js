import React from "react";
import { useDispatch } from "react-redux";
import { logoOutUser } from "../redux/loginAction";

export default function Dashboard() {
  const dispatch = useDispatch();
  return (
    <>
      <div>Comming soon...</div>
      <button type="button" onClick={() => dispatch(logoOutUser())}>
        Logout
      </button>
    </>
  );
}
