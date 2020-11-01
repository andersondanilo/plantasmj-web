import React, { ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "../styles/HomeCarousel.module.scss";

export default function HomeCarousel(): ReactElement {
  return (
    <div className={styles.carouselContainer}>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        <div>
          <img alt="" src="/images/home-carousel/banner1.png" />
        </div>
        <div>
          <img alt="" src="/images/home-carousel/banner2.png" />
        </div>
        <div>
          <img alt="" src="/images/home-carousel/banner3.png" />
        </div>
        <div>
          <img alt="" src="/images/home-carousel/banner4.png" />
        </div>
      </Carousel>
    </div>
  );
}
