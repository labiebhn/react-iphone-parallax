import React from "react";
import { Parallax } from "react-scroll-parallax";
import "../styles.scss";

const CardProduct = ({
  alignment = "right",
  title,
  description,
  image,
  styleImage,
}) => {
  return (
    <div id="card-product" className={"card-product"}>
      {alignment === "left" && (
        <Parallax translateX={['100px', '-0px']} easing={'easeOutBack'}>
          <div className={`card-product-info ${alignment}`}>
            <h5>{title}</h5>
            <h3>{description}</h3>
          </div>
        </Parallax>
      )}
      <img
        src={image}
        className={`card-product-image ${alignment}`}
        style={styleImage}
      />
      {alignment === "right" && (
        <Parallax translateX={['-100px', '0px']} easing={'easeOutBack'}>
          <div className={`card-product-info ${alignment}`}>
            <h5>{title}</h5>
            <h3>{description}</h3>
          </div>
        </Parallax>
      )}
    </div>
  );
};

export default CardProduct;
