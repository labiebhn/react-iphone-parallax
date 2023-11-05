import React from "react";
import { Parallax } from "react-scroll-parallax";
import { ImageIphoneGreen } from "../../../assets/images";
import { CardProduct } from "../../../components/cards";
import "../styles.scss";

const ProductHome = () => {
  return (
    <Parallax speed={-20} id="product-home" className="product-home">
      <div className="product-home-content">
        <Parallax translateX={["100px", "70px"]} easing={"easeOutBack"}>
          <CardProduct
            alignment="left"
            title={"iPhone 13 Pro Max"}
            description={'6.7"'}
            image={ImageIphoneGreen}
          />
        </Parallax>
        <Parallax translateX={["-100px", "-70px"]} easing={"easeOutBack"}>
          <CardProduct
            alignment="right"
            title={"iPhone 13 Pro"}
            description={'6.1"'}
            styleImage={{ width: 320 }}
            image={ImageIphoneGreen}
          />
        </Parallax>
      </div>
    </Parallax>
  );
};

export default ProductHome;
