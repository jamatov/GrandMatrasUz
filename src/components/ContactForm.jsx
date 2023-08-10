import React from 'react'
import axios from 'axios';
import { useState } from 'react'
import toast from 'react-hot-toast';
import img from '../images/contactform.jpg'
import { useTranslation } from 'react-i18next';

export default function ContactForm() {
  const BOT_TOKEN = "6267287333:AAF3hOipdQ7YdZ_UlY_KSadco0tUxeR8KS8";
  const CHAT_ID = "-1001912820174"

  function formValidationChacking(name, number) {
    let isBoolean = false;

    if (!name) {
      setError(p => ({ ...p, name: [true, 'F.I.O. kiritilmadi!'] }))
      isBoolean = true

    } else if (name?.length < 6) {
      setError(p => ({ ...p, name: [true, "Bunchalik qisqa F.I.O. bo'lmaydi"] }))
      isBoolean = true
    }

    if (!number) {
      setError(p => ({ ...p, phone: [true, 'Telefon raqam kiritilmadi!'] }))
      isBoolean = true
    }
    return isBoolean;
  }

  const sendForm = (e) => {
    e.preventDefault()
    let name = e.target[0].value
    let number = e.target[1].value

    if (formValidationChacking(name, number)) return
    setDisbl(true)

    let text = `<b>Ismi:</b> ${name} \n<b>Telefon raqami:</b> ${number} \n`

    axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text
    }, {
      headers: {
        "Content-Type": 'multipart/form-data',
      }
    })
      .then((res) => {
        toast.success("Habar yuborildi 🙂")
        e.target.reset()
        setDisbl(false)
      })
      .catch((err) => {
        toast.error("Habar yuborilmadi! Qaytadan urinib ko'ring 😞")
        setDisbl(false)
      })

    let style = {}
    if (inputValue === '') {
      style = {
        border: '2px solid red'
      }
    }
    else {
      style = {
        border: '2px solid green'
      }
    }
    setStyled(style)
  }

  const [styled, setStyled] = useState({ border: '1px solid red', borderRadius: '2px' })
  const [inputValue, setValue] = useState('')
  const [disbl, setDisbl] = useState(false)
  const [error, setError] = useState({
    name: [false, ""],
    phone: [false, ""],
  })

  const {t} = useTranslation()

  return (
    <section className='ContactForm' id='buyurtma'>
      <div className="container">
        <div className="contactform-body">
          <form className='contact-form row' onSubmit={sendForm} action="">
            <h3>{t("contactTittle")}</h3>
              <input className='col-12 col-md-8 mb-3' type="text" placeholder={t("contactName")} />
              {/* {error.name[0] && <p style={{ color: 'red' }}>{error.name[1]}</p>} */}
              <i class='bx bx-phone-call'></i>
              <input autocomplete="off"   className='col-12 col-md-8 mb-3' maxlength="13" minlength="4" type="tel" data-intl-tel-input-id="1" placeholder={t("contactNumber")} 
                onChange={(e) => {
                  e.target.setCustomValidity("");
                  if (!e.target.validity.valid) {
                    e.target.setCustomValidity(
                      "Raqamni noto'g'ri kiritdingiz! Misol: +998977770777"
                    );
                  }
                  setError(p => ({ ...p, phone: [false, ''] }))
                }} pattern="[+]{1}[0-9]{3}[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}"
              />
            <button>{t("send")}</button>
              {/* {error.phone[0] && <p style={{ color: 'red' }}>{error.phone[1]}</p>} */}
          </form>

          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}
