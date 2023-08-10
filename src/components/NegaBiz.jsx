import React from 'react'
import vhy1 from '../images/icons/vhy1.svg'
import vhy2 from '../images/icons/vhy2.svg'
import vhy3 from '../images/icons/vhy3.svg'
import vhy4 from '../images/icons/vhy4.svg'
import vhy5 from '../images/icons/vhy5.svg'
import vhy6 from '../images/icons/vhy6.svg'
import { useTranslation } from 'react-i18next'


export default function NegaBiz() {
  const { t } = useTranslation();

  return (
    <section className='NegaBiz'>
      <div className="container">
        <h2>{t("whyTittle")}</h2>
        <div className="row">

         <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy3} alt="" />
              <h3>{t("why1tittle")}</h3>
              <p>{t("why1info")}</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy5} alt="" />
              <h3>{t("why2tittle")}</h3>
              <p>{t("why2info")}</p>


            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy6} alt="" />
              <h3>{t("why3tittle")}</h3>
              <p>{t("why3info")}</p>


            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy1} alt="" />
              <h3>{t("why4tittle")}</h3>
              <p>{t("why4info")}</p>


            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy4} alt="" />
              <h3>{t("why5tittle")}</h3>
              <p>{t("why5info")}</p>


            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card-body">
              <img src={vhy2} alt="" />
              <h3>{t("why6tittle")}</h3>
              <p>{t("why6info")}</p>


            </div>
          </div>

          

          

          
          
        </div>
      </div>
    </section>
  )
}
