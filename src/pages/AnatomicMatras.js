import React from 'react'
import Onotomic from '../components/Anotomic/Onotomic.jsx'
import OnoInfo from '../components/Anotomic/OnoInfo.jsx'
import ContactForm from '../components/ContactForm.jsx'

export default function AnatomicMatras() {
  return (
    <section className='AnatomicMatras'>
      <Onotomic/>
      <OnoInfo/>
      <ContactForm/>
    </section>
  )
}
