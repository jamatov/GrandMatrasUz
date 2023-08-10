import React, { useEffect, useState } from "react";
import { API_PATH } from "../../constants/tools";
import axios from "axios";
import { useTranslation } from "react-i18next";
import Loader from "../Loader";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal'

export default function Ortopedik() {
  const T = useTranslation()
  const { t } = useTranslation();

  const [modalShow, setModalShow] = React.useState(false);

  const [item, setItem] = useState([]);
  const getProducts = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/main/catalog-detail/?catalog_id=${1}`)
      .then((res) => {
        console.log(res);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const down = () => {
    window.scrollTo(0, 3850)
  }

  useEffect(() => {
    getProducts();
  }, [T.i18n.language]);

  return (
    <section className="MoreInfo">
      <div className="container">
        <h2>{t("ortopedikTitle1")}</h2>
        <h3>{t("ortopedikTitle2")}</h3>
        {t("")}
        <div className="row">
          {item.length > 0 ? (item.map((i, index) => {
              return (
                <div key={index} className="col-lg-4 col-md-6 col-12">
                  <div className="card">
                    <div className="card-body">
                      <img src={i.image} alt="" />
                      <h3>{i.name}</h3>
                      <p> {t("anotomicText1")} {i.balandligi} {t("sm")}</p>
                      <p> {t("anotomicText2")} {i.yuk} {t("kg")}</p>
                      <p> {t("anotomicText3")} {i.kafolat} {t("year")}</p>

                      <div className="d-flex">
                        <p className="skidka">{i.price} </p>
                        <span>{t("anotomicSpan")}</span>
                      </div>

                      <div className="d-flex">
                        <p>{i.new_price}</p>
                        <span>{t("anotomicSpan")}</span>
                      </div>
                      
                      <Button variant="primary" onClick={() => setModalShow(true)}>
                        {t("anotomicBtn")}
                      </Button>

                      <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      />
                    </div>
                  </div>
                </div>
              );
            })) : (<>
              <Loader/>
            </>)
            }

          {/* <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img2} alt="" />
                <h3>Komfort</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 110 kg</p>
                <p> Kafolat: 3 yil</p>

                <div className="d-flex">
                  <p className='skidka'>600 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>550 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
                <a href="#buyurtma">
                  <button>Buyurtma berish</button>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card">
              <div className="card-body">
                <img src={img3} alt="" />
                <h3>Premium</h3>
                <p> Balandligi: 25 sm</p>
                <p> Yuk: 140 kg</p>
                <p> Kafolat: 4 yil</p>

                <div className="d-flex">
                  <p className='skidka'>800 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>

                <div className="d-flex">
                  <p>750 000 </p>
                  <span>so'mdan /kv.m</span>
                </div>
                <a href="#buyurtma">
                  <button>Buyurtma berish</button>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
