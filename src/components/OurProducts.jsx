import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../constants/tools";
import { useState, useEffect } from "react";
import Loader from "./Loader";

export default function OurProducts({ changeLang }) {
  const T = useTranslation();
  const { t } = useTranslation();
  const lan = localStorage.getItem("LANGUAGE");

  const [item, setItem] = useState([]);

  const getProducts = async () => {
    await axios
      .get(API_PATH + `/${T.i18n.language}/main/catalog/`)
      .then((res) => {
        console.log(res);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getProducts();
  }, [T.i18n.language]);
  const nav = useNavigate()
  const link = (i) =>{
    if(i===0){
      nav('/ortopedik_matraslar')
    }
    if(i===1){
      nav('/anatomik_matraslar')
    }
    if(i===2){
      nav('/purjinasiz_matraslar')
    }
  }

  return (
    <section className="OurProducts">
      <div className="container">
        <h2 className="pruducts-tittle">{t("ourProducts")}</h2>

        <div className="row">
          {item.length > 0 ? (item.map((i, index) => {
              return (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <img src={i.image} alt="" />
                      <h3>{i.name}</h3>
                      <div className="d-flex">
                        <p className="skidka">{i.price} </p>
                        <span>{t("ortopedikSpan")}</span>
                      </div>
                      <p>
                        {i.new_price} <span>{t("ortopedikSpan")}</span>
                      </p>
                        <button onClick={() => link(index)}>{t("moreInfo")}</button>
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
