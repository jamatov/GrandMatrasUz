import React from 'react'
import Ortopedik from '../components/Ortopedik/Ortopedik'
import ContactForm from '../components/ContactForm'
import Info from '../components/Ortopedik/Info'



export default function OrtopedikMatras() {
  return (
    <section className='OrtopedikMatras'>
      <Ortopedik/>
      <Info/>
      <ContactForm/>
    </section>
  )
}
