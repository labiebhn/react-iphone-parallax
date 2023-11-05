import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ImageIphoneCamera, ImageIphoneSky } from "../../../assets/images";
import "../styles.scss";

const ProductCameraHome = () => {
  return (
    <Parallax
      speed={20}
      id="product-camera-home"
      className="product-camera-home"
    >
      <img src={ImageIphoneSky} />
    </Parallax>
  );
};

export default ProductCameraHome;
