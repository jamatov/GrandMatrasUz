import React from 'react'
import { useTranslation } from 'react-i18next';

export default function BezInfo() {
  const { t } = useTranslation();

  return (
    <section className='Info'>
      <div className="container">
        <h2>{t("bezInfoTitle1")}</h2>
        <p>{t("bezInfoText1")}</p>
        <p className='mb70'>{t("bezInfoText2")}</p>
        <h2>{t("bezInfoTitle2")}</h2>
        <p>{t("bezInfoText3")}</p>
        <ul>
          <li>{t("bezInfoList1")}</li>
          <li>{t("bezInfoList2")}</li>
          <li>{t("bezInfoList3")}</li>
          <li>{t("bezInfoList4")}</li>
          <li>{t("bezInfoList5")}</li>
          <li>{t("bezInfoList6")}</li>
          <li>{t("bezInfoList7")}</li>
        </ul>
        {/* <h2>Prujinasiz matraslar: ishlab chiqaruvchidan matraslar</h2>
        <p>Agar ertalab bel og‘rig‘i va yomon kayfiyatda uyg‘onsangiz, yomon ob-havo yoki ortiqcha jismoniy mashqlarni ayblashga shoshilmang. Ehtimol, siz zamonaviy funksionallik va qulaylik standartlariga javob bermaydigan yomon to'shakda uxlaysiz.</p>
        <p className='mb70'> To'shak sotib olish birinchi qarashda ko'rinadigan darajada oson ish emas. Ko'pgina omillarni hisobga olish kerak, ayniqsa matraslar uzoq vaqt davomida sotib olinganligi sababli. Bizning do'konda siz ushbu muammoni hal qilishingiz mumkin - bu erda siz Toshkentda tayyor ortopedik matras sotib olishingiz va o'zingizning didingizga mos mahsulotga buyurtma berishingiz mumkin.</p>
        <h2>Prujinasiz matraslarning afzalliklari</h2>
        <p>O‘zbekistonda odamning anatomik xususiyatlarini hisobga olgan holda ko‘proq matraslar ishlab chiqarilmoqda. Ularning afzalliklari:</p>
        <ul>
          <li>uyqu vaqtida tananing to'g'ri holatini ta'minlash - bunday matraslarning shakli inson tanasining egri chiziqlarini iloji boricha takrorlaydi, har qanday holatda (oshqozon, orqa, yon tomonda) sog'lom uyquni ta'minlaydi;</li>
          <li>bir xil yuk taqsimoti - tanani charchoq va noqulaylikdan himoya qiladi; </li>
          <li>profilaktik ta'sirni ta'minlash - ortopedik to'shakda uxlash mushaklar-skelet sistemasi organlarida duruş buzilishi yoki degenerativ o'zgarishlar xavfini oldini oladi;</li>
          <li>ishonchli qo'llab-quvvatlash va qo'llab-quvvatlash - agar siz ortopedik to'shakni arzon sotib olsangiz ham, u an'anaviy mahsulotlarga qaraganda qulayroq pozitsiyani kafolatlaydi; </li>
          <li>ko'p qirrali - bu ham bolalar matraslari, ham kattalar, shu jumladan qariyalar uchun bo'lishi mumkin;</li>
          <li>terapevtik ta'sirni ta'minlash - osteoxondroz, artrit, siyatik, skolyoz, uyqusizlik, depressiya, surunkali charchoq sindromi kabi kasalliklarni kompleks tuzatish uchun tavsiya etiladi;</li>
          <li> ekologik toza - mahsulotlar chang va oqadilar ta'siriga chidamli; yaxshi shamollatish - namlikning tez bug'lanishiga va uni tashqariga olib tashlashga hissa qo'shing.</li>
        </ul> */}
      </div>
    </section>
  )
}
