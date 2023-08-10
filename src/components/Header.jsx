import React from 'react'
import rectangle from '../images/header-rectangle.svg'
import headerimg from '../images/head-img.png'
import { useTranslation } from 'react-i18next'

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className='Header'>
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-6">
            <div className="header-info">
              <h2>GRAND MATRAS</h2>
              <p>{t("headerInfo")}</p>
              <a href="https://t.me/Davron19820" target='_blank'>
                <button>{t("consultation")}</button>
              </a>
            </div>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="header-img">
              <img src={rectangle} className='header-rectangle' alt="" />
              <img src={headerimg} className='header-matras' alt="" />
            </div>
          </div>

        </div>

        
      </div>
    </header>
  )
}
