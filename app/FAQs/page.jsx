'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Scroll_to_top from '../components/Scroll_to_top'
import Footer from '../components/Footer'
import { Container } from '@radix-ui/themes'
import Accordion from '../components/Accordion';
import accordionData from '../Data/AccordionData.json';
import accordionData2 from '../Data/AccordionData2.json';
import Link from 'next/link';
import { motion } from "framer-motion";
import Whatsapp from '../components/whatsapp'

const FAQs = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className='py-5'>
        <div className='flex flex-col text-center justify-center bg-sky-50 pt-24 pb-12'>
          <p className='text-2xl/snug md:text-3xl/loose font-semibold'>
              FAQs
          </p>
          <p className='text-lg/snug font-normal text-gray-500'>
          Some of our frequently asked questions.
          </p>
          <div className="flex justify-center text-center pt-5">
            <Link
            className="px-5 text-sm font-medium leading-none border-sky-700 border-solid border rounded-full text-white bg-sky-700 hover:text-sky-700 hover:bg-white h-10 flex items-center"
            href="/Contact"
            >
              Get In Touch
            </Link>
          </div>
          
        </div>      
        <div className='pb-5'>
          <Container>
            <div className='pt-12 grid gap-4'>
              <motion.div 
              variants={{ 
                initial: { y: 50, opacity:0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 }}
              }}
              initial = 'initial'
              animate='animate'
              className='pt-5 pb-5 px-7'>
                <div>
                  {accordionData.map(({ id, title, content }) => (
                    <Accordion key={id} title={title} content={content} />
                  ))}
                </div>
                <div>
                  {accordionData2.map(({ id, title, content }) => (
                    <Accordion key={id} title={title} content={content} />
                  ))}
                </div>
              </motion.div>
              <div className='md:flex justify-center text-center py-10 px-7'>
                <p className='text-lg/snug font-normal md:text-xl/snug md:font-normal mr-1 '>
                Didn’t answer your questions?
                </p>
                <span>   </span>
                <Link className='text-lg/snug font-normal md:text-xl/snug md:font-normal text-sky-700' href="/Contact">
                Contact Us
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default FAQs
