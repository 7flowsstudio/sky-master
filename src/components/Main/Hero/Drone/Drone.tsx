import React from "react";
import s from "./Drone.module.css";

const Drone = () => {
  return (
    <div className={s.heroDroneWrapper}>
      <div className={s.droneImg}>
        <div className={`${s.adWrap} ${s.lazyLoaded}`}></div>
      </div>
    </div>
  );
};

export default Drone;
