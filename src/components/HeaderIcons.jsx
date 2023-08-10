import React from 'react'
import icon1 from '../images/icons/vhy5.svg'
import icon2 from '../images/icons/vhy2.svg'
import icon3 from '../images/icons/vhy6.svg'
import icon4 from '../images/icons/vhy4.svg'
import { useTranslation } from 'react-i18next'

export default function HeaderIcons() {
  const { t } = useTranslation();

  return (
    <section className='HeaderIcons'> 
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-3">
            <img className='mb-3' src={icon1} alt="" />
            <p>{t("headerIcon1")}</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-3' src={icon2} alt="" />
            <p>{t("headerIcon2")}</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-3' src={icon3} alt="" />
            <p>{t("headerIcon3")}</p>
          </div>
          <div className="col-6 col-md-3">
            <img className='mb-3' src={icon4} alt="" />
            <p>{t("headerIcon4")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
