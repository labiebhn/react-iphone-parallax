import React from "react";
import "./styles.scss";
import {
  HeaderHome,
  InfoHome,
  ProductHome,
  ProductDescriptionHome,
  ProductCameraHome,
} from "../../containers/home";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import LazyLoad from 'react-lazyload';

const Home = () => {
  return (
    <ParallaxProvider id="home" className="home">
      <LazyLoad height={500} offset={100}>
        <HeaderHome />
      </LazyLoad>
      <LazyLoad height={500} offset={100}>
        <InfoHome />
      </LazyLoad>
      <LazyLoad height={500} offset={100}>
        <ProductHome />
      </LazyLoad>
      <LazyLoad height={500} offset={100}>
        <div style={{backgroundColor: '#FFFFFF', overflow: 'hidden'}}>
          <ProductCameraHome />
        </div>
      </LazyLoad>
      <LazyLoad height={500} offset={100}>
        <div style={{backgroundColor: '#FAFAFA'}}>
          <ProductDescriptionHome />
        </div>
      </LazyLoad>
    </ParallaxProvider>
  );
};

export default Home;
