import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div>
        <Head>
          <title>Home Page</title>
        </Head>
        <h1 className={styles.homePageTitle}>This is Home Page</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
          delectus autem velit molestias mollitia illo accusantium eius veniam
          qui repellat! Ad impedit veritatis hic recusandae corporis ea facilis,
          dolores voluptatum. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Eveniet delectus autem velit molestias mollitia illo
          accusantium eius veniam qui repellat! Ad impedit veritatis hic
          recusandae corporis ea facilis, dolores voluptatum.
        </p>
        <Slider {...settings}>
          {[1, 2, 3, 4, 5].map((item, index) => {
            return (
              <div key={index}>
                <img src="data:image/png;base64,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" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
