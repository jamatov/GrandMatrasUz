import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

import img1 from '../images/comment1.svg'
import img2 from '../images/comment2.jpg'
import img3 from '../images/comment3.jpg'
import img4 from '../images/woman.jpg'


import star from '../images/icons/star.svg'
import { useTranslation } from "react-i18next";

export default function Comments() {
  const { t } = useTranslation();

  return (
    <section className="Comments">
      <div className="container">
        <h2>{t("commentTittle")}</h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            736: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
         

          <SwiperSlide className="slide-block">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img src={img1} alt="" />

                  <div>
                    <p>{t("comentName1")}</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                {t("comment1")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-block">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img className="person-image" src={img2} alt="" />

                  <div>
                    <p>{t("comentName2")}</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                  {t("comment2")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-block">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img className="person-image" src={img3} alt="" />

                  <div>
                    <p>{t("comentName3")}</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                {t("comment3")}
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="slide-block">
            <div className="card">
              <div className="card-body">
                <div className="d-flex">
                  <img className="person-image" src={img4} alt="" />

                  <div>
                    <p>{t("comentName4")}</p>
                    <div className="stars">
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                      <img src={star} alt="" />
                    </div>
                  </div>
                </div>

                <p className="comment-info">
                {t("comment4")}
                </p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
}