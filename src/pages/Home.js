import React from 'react'
import Header from '../components/Header'
import HeaderIcons from '../components/HeaderIcons'
import About from '../components/About'
import OurProducts from '../components/OurProducts'
import WeInNumbers from '../components/WeInNumbers'
import ContactForm from '../components/ContactForm'
import Faq from '../components/Faq'
import NegaBiz from '../components/NegaBiz'
import Comments from '../components/Comments'

export default function Home() {
  return (
    <div className='Home'>
      <Header/>
      <HeaderIcons/>
      <About/>
      <NegaBiz/>
      <OurProducts/>
      <WeInNumbers/>
      <Faq/>
      <Comments/>
      {/* <Maslahatlar/> */}
      <ContactForm/>
    </div>
  )
}
