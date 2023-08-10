import React from 'react'
import AboutInfo from '../components/About'
import Faq from '../components/Faq'
import Comments from '../components/Comments'
import ContactForm from '../components/ContactForm'
import OnoInfo from '../components/Anotomic/OnoInfo'
import Info from '../components/Ortopedik/Info'
import BezInfo from '../components/Bezpurjina/BezInfo'

export default function About() {
  return (
    <section className='AboutPage'>
      {/* <AaboutTitle/> */}
      <AboutInfo/>
      {/* <Faq/> */}
      {/* <Comments/> */}
      <Info/>
      <OnoInfo/>
      <BezInfo/>
      <ContactForm/>
    </section>
  )
}
