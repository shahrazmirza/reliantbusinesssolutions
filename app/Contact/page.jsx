import React from 'react'
import Navbar from '../components/Navbar'
import Scroll_to_top from '../components/Scroll_to_top'
import Footer from '../components/Footer'
import { Container } from '@radix-ui/themes'
import Contact_Form from '../components/Contact_Form'
import Whatsapp from '../components/Whatsapp'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className='py-5'>
        <div className='flex flex-col text-center justify-center bg-sky-50 md:pt-24 py-10 md:pb-12 px-7'>
          <p className='text-2xl/snug md:text-3xl/loose font-semibold'>
          Drop us a message
          </p>
        </div>      
        <div className='pt-5 pb-5'>
          <Container>
            <Contact_Form />
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
