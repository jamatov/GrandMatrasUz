import React from 'react'
import img1 from '../images/about1.jpg'
// import img2 from '../images/about2.jpg'
import { useTranslation } from 'react-i18next'


export default function About() {
  const {t} = useTranslation();
  return (
    <section className='About' id='about'>
      <div className="container">
        <div className="row body1">
          <div className="col-md-6">
            <img src={img1} alt="" />
          </div>
          <div className="col-md-6 body-info">
            <h3>{t("aboutTitle")}</h3>
            <p>{t("aboutText")}</p>
          </div>
        </div>

        {/* <div className="row body1 column-reverse">
          <div className="col-md-6 body-info">
            <h3>Biz sizga qulay matrasni taqdim etamiz</h3>
            <p>Matraslar o'zlarining dastlabki kunlaridanoq uzoq yo'lni bosib o'tdilar. 19-asrda asosiy somon bilan to'ldirilgan qoplardan tortib, ichki matraslarni ishlab chiqishgacha, keyinchalik xotira ko'pik, lateks va gibrid dizayndagi yutuqlarga qadar, matras texnologiyasi sezilarli darajada rivojlandi. Sifat salomatlik va farovonlik uchun juda muhimdir. Yaxshi matras to'g'ri yordam va qulaylikni ta'minlash orqali uyqu sifatini yaxshilashga katta hissa qo'shishi mumkin. Bu bel og'rig'ini engillashtirishga yordam beradi, chayqalish va burilishni kamaytiradi va tinchroq uyquga yordam beradi. To'shakning o'rtacha ishlash muddati turi va sifatiga qarab o'zgaradi. Odatda, matras 7 yildan 10 yilgacha xizmat qilishi mumkin. Biroq, bunga foydalanish, texnik xizmat ko'rsatish va shaxsiy imtiyozlar kabi omillar ta'sir qilishi mumkin.</p>
          </div>

          <div className="col-md-6">
            <img src={img2} alt="" />
          </div>
        </div> */}
      </div>
    </section>
  )
}
