import React from "react";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { IconContext } from "react-icons";

const Icons = () => {
  return (
    <IconContext.Provider value={{ color: "blue", size: "4rem" }}>
      <div>
        <FaReact />
        <MdAlarm />
      </div>
    </IconContext.Provider>
  );
};

export default Icons;
