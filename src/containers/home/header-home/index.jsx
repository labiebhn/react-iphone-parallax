import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { useSpring, animated, useTransition } from "react-spring";
import { VideoIphoneTeaser } from "../../../assets/videos";
import { TailSpin } from "react-loader-spinner";
import "../styles.scss";

const HeaderHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);

  const springs = {
    title: useSpring({
      from: { opacity: 1 },
      to: async (next, cancel) => {
        await next({ opacity: 0 });
        setShow(true);
      },
      config: { duration: 1800 },
      delay: 4000,
    }),
  };
  const transitions = useTransition(show, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 },
  });

  return (
    <Parallax speed={-50} id="header-home" className="header-home">
      <div className="video-teaser-container">
        <video
          className="video-teaser"
          autoPlay={true}
          muted={true}
          loop={true}
          src={VideoIphoneTeaser}
          preload={"auto"}
          onLoadedData={() => setIsLoading(false)}
        />
      </div>
      <div className="body">
        {!show && (
          <animated.h1 style={!isLoading ? springs.title : {}}>
            iPhone 13 Pro
          </animated.h1>
        )}
        {transitions(
          (styles, item) =>
            item && (
              <animated.div style={styles}>
                <h4>iPhone 13 Pro</h4>
                <h1>Oh. So. Pro.</h1>
              </animated.div>
            )
        )}
      </div>
    </Parallax>
  );
};

export default HeaderHome;
