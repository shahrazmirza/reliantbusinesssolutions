'use client'
import { useEffect, useRef } from 'react';
import Accordion from './Accordion';
import accordionData from '../Data/AccordionData.json';
import accordionData2 from '../Data/AccordionData2.json';
import { Container } from '@radix-ui/themes';
import Link from 'next/link';
import { motion, useInView, useAnimation } from "framer-motion";

const Faq = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});
  const fadeControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControls.start('animate');
    }
  }, [isInView]);

  return (
    <div className='pb-5'>
      <Container>
        <div className='px-7 md:grid md:gap-4'>
          <motion.div 
          ref={ref} 
          variants={{ 
            initial: { y: 50, opacity:0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 }}
          }}
          initial = 'initial'
          animate={fadeControls}
          className='grid grid-rows-2 text-center'>
            <p className='text-2xl/snug md:text-3xl/snug font-medium'>
                Reliant Business Solutions
            </p>
            <p className='text-lg/snug md:text-xl/snug font-normal  text-gray-500 -mt-5 md:mt-4'>
              Explore responses to frequently asked questions about tax returns, small business matters, and financial planning from our team of experienced accountants.
            </p>
          </motion.div>
            
          <motion.div
          ref={ref} 
          variants={{ 
            initial: { y: 50, opacity:0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 }}
          }}
          initial = 'initial'
          animate={fadeControls}
          className='md:grid md:grid-cols-2 md:gap-5 pt-5 pb-5'
          >
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
          <div className='md:flex md:text-start text-center justify-center'>
            <p className='text-xl/snug font-normal mr-1 '>
            Didnât answer your questions?
            </p>
            <span>   </span>
            <Link className='text-xl/snug font-normal text-sky-700' href="/Contact">
            Contact Us
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Faq
