import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="min-h-20 bg-blue-950 flex text-white justify-between items-center">
      <div>
        <h1 className="text-xl font-extrabold ml-4 ">TEETH WIZARD</h1>
      </div>
      <div className="mr-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/allTreatments" className="ml-4">
          All Treatments
        </NavLink>
        <NavLink to="/myAppoinments" className="ml-4">
          My appoinments
        </NavLink>
        <NavLink to="/profile" className="ml-4">
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
