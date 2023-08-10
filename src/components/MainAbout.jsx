import React from 'react'
import { useTranslation } from 'react-i18next';

export default function MainAbout() {
  const { t } = useTranslation();

  return (
    <section className='Info'>
      <div className="container">
        <h2>{t("sec1title")}</h2>
        <p>{t("sec1info")}</p>
        <br />
        <br />
        <h2>{t("sec2title")}</h2>
        <p>{t("sec2info1")}</p>
        <p>{t("sec2info2")}</p>
        <ul>
          <li>{t("sec2li1")}</li>
          <li>{t("sec2li2")}</li>
          <li>{t("sec2li3")}</li>
          <li>{t("sec2li4")}</li>
          <li>{t("sec2li5")}</li>
          <li>{t("sec2li6")}</li>
          <li>{t("sec2li7")}</li>
          <li>{t("sec2li8")}</li>
        </ul>

        <p>{t("sec2info3")}</p>

        <br />
        <br />

        <h2>{t("sec3title")}</h2>
        <p>{t("sec3info1")}</p>
        <p>{t("sec3info2")}</p>
        <p>{t("sec3info3")}</p>
        <p>{t("sec3info4")}</p>
      </div>
    </section>
  )
}
