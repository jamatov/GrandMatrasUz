import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { API_PATH } from "../../constants/tools";
import Loader from "../Loader";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal'

export default function Onotomic() {
  const T = useTranslation();
  const { t } = useTranslation();
  const lan = localStorage.getItem("LANGUAGE");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalShow, setModalShow] = React.useState(false);
  const [item, setItem] = useState([]);
  const getProducts = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/main/catalog-detail/?catalog_id=${2}`)
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
        <h2>{t("anotomic1")}</h2>
        <h3>{t("anotomicTitle2")}</h3>

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
                      
                      
                      {/* <button onClick={down}>{t("anotomicBtn")}</button> */}
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
            })) : (
              <>
                <Loader/>
              </>
            )
            }
        </div>
      </div>
    </section>
  );
}
