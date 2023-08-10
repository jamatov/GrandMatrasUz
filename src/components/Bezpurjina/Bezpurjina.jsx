import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { API_PATH } from '../../constants/tools';
import axios from 'axios';
import Loader from '../Loader';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyVerticallyCenteredModal from '../Modal/MyVerticallyCenteredModal'

export default function Bezpurjina() {
  const T = useTranslation();
  const { t } = useTranslation();
  const lan = localStorage.getItem("LANGUAGE");

  const [modalShow, setModalShow] = React.useState(false);
  
  const [item, setItem] = useState([]);
  const getProducts = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/main/catalog-detail/?catalog_id=${3}`)
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
    <section className='MoreInfo'>
      <div className="container">
        <h2>{t("bezPurjinaTitle1")}</h2>
        <h3>{t("bezPurjinaTitle2")}</h3>
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
            })) : (
              <>
                <Loader/>
              </>
            )
            }
        </div>
      </div>
    </section>
  )
}
