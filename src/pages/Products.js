import React from 'react'
import OurProducts from '../components/OurProducts.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Comments from '../components/Comments.jsx'
import Faq from '../components/Faq.jsx'

export default function Products() {
  return (
    <section className='Products'>
      <OurProducts/>
      <Comments/>
      <Faq/>
      <ContactForm/>
    </section>  
  )
}
