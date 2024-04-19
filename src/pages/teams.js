// TeamsPage.js
import React from "react";
import Navigation from "../components/navigation";
import { Experience } from "../components/experiance/experiance";

const Teams = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="w-screen h-screen">
        <Experience />
      </div>
    </div>
  );
};

export default Teams;
