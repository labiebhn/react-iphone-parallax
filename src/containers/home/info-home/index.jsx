import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { ImageIphoneBlue } from "../../../assets/images";
import "../styles.scss";
import { entries } from "./config";

const InfoHome = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    console.log("ACTIVE: ", active);
  }, [active]);

  const handleProgressChange = (index, value) => {
    let rounded = Math.round(value * 10) / 10 + 0.2;
    console.log(index, rounded);
    if (rounded === 0.5) {
      setActive(index);
    }
  };

  return (
    <Parallax id="info-home" className="info-home" speed={25}>
      <div className="info-description">
        {entries?.map((item, index) => {
          return (
            <Parallax
              key={index?.toString()}
              onProgressChange={(val) => handleProgressChange(item?.id, val)}
            >
              <h1 className={active === item?.id ? "active" : ""}>
                {item?.title}
              </h1>
            </Parallax>
          );
        })}
      </div>
      <div className="info-banner">
        <Parallax speed={70}>
          <img src={ImageIphoneBlue} />
        </Parallax>
      </div>
    </Parallax>
  );
};

export default InfoHome;
