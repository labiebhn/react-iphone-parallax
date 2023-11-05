import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ImageIphoneCamera, ImageIphoneSky } from "../../../assets/images";
import "../styles.scss";

const ProductDescriptionHome = () => {
  return (
    <Parallax speed={20} id="product-desc-home" className="product-desc-home">
      <div className="product-desc-body">
        <div className="desc-text">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            possimus autem nostrum reiciendis laborum, quidem asperiores, modi
            earum necessitatibus facilis fugiat harum qui! Magnam, asperiores?
          </h1>
        </div>
      </div>
      <div className="product-desc-footer">
        <img src={ImageIphoneCamera} />
      </div>
    </Parallax>
  );
};

export default ProductDescriptionHome;
