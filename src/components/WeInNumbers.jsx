import React from 'react'
import { useTranslation } from 'react-i18next';

export default function WeInNumbers() {
  const { t } = useTranslation();

  return (
    <main className='WeInNumbers'>
      <div className="container">
        <h2>{t("numbersTittle")}</h2>
        <div className="numbers-body ">
          <div className='col-4'>
            <h3>{t("numbersTittle1")}</h3>
            <p>{t("numbersTittle1info")}</p>
          </div>

          <div className='col-4'>
            <h3>{t("numbersTittle2")}</h3>
            <p>{t("numbersTittle2info")}</p>
          </div>

          <div className='col-4'>
            <h3>{t("numbersTittle3")}</h3>
            <p>{t("numbersTittle3info")}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
