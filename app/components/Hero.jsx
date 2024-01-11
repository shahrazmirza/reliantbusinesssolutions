'use client'
import React from 'react';
import { Container} from '@radix-ui/themes';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className='md:flex-col py-5'>
      <motion.section 
        variants={{ 
          initial: { y: 50, opacity:0 },
          animate: { y: 0, opacity: 1, transition: { duration: 0.5 }}
        }}
        initial = 'initial'
        animate='animate' 
        className='bg-gradient-to-b from-sky-50'
      >
        <Container>
          <div className='md:grid md:grid-cols-2 md:justify-center md:items-center md:gap-x-20 md:px-10 md:pt-20 md:py-16 px-7'>
            <div>
              <motion.div 
              variants={{ 
                initial: { y: -50, opacity:0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.1}}
              }}
              initial = 'initial'
              animate='animate'
              className='md:text-4xl/tight md:font-semibold md:text-gray-800 flex text-4xl/tight font-semibold text-gray-800 pt-5'
              >
                Focus on your business <br /> 
                Not bookkeeping
              </motion.div>
              <motion.p 
              variants={{ 
                initial: { y: 50, opacity:0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 }}
              }}
              initial = 'initial'
              animate='animate'
              className='text-lg/snug font-normal text-gray-500 pt-10 pb-10'
              >At Reliant, discover a wide array of personal and business accounting services catering to clients nationwide. We take pride in delivering honest advice, valuable feedback, and effective solutions to address even the most complex accounting needs.
              </motion.p>
              <motion.div 
              variants={{ 
                initial: { y: 50, opacity:0 },
                animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 }}
              }}
              initial = 'initial'
              animate='animate'
              className="justify-center text-center w-fit pb-5"
              >
                <Link
                className="px-5 text-sm font-medium leading-none border-sky-700 border-solid border-2 rounded-full text-white bg-sky-700 hover:bg-white hover:text-sky-700 h-10 flex items-center"
                href="/Contact"
                >
                  Get In Touch
                </Link>
              </motion.div>
            </div>
            <motion.div 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.4 }}
            }}
            initial = 'initial'
            animate='animate'            
            >
              <Image
                src='/assets/images/hero.png'
                height='450'
                width='450'
                ></Image>
            </motion.div>
          </div>
        </Container>
      </motion.section>
      <motion.section 
      variants={{ 
        initial: { y: 50, opacity:0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 }}
      }}
      initial = 'initial'
      animate='animate'
      className='bg-sky-100 mt-5 md:-mt-2'
      >
        <Container>
          <motion.div 
          variants={{ 
            initial: { y: 50, opacity:0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.6 }}
          }}
          initial = 'initial'
          animate='animate'
          className='grid grid-cols-2 md:flex md:justify-between px-7'
          >
            <motion.div 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.7 }}
            }}
            initial = 'initial'
            animate='animate'
            className='md:flex md:gap-3 py-5 md:p-5'
            >
              <div>
                <Image
                src='/assets/images/protect.svg'
                height='42'
                width='42'
                ></Image>
              </div>
              <div className='flex flex-col'>
                <div className='text-base font-medium'>
                  Protect Financials
                </div>
                <p className='text-sm font-medium text-gray-500'>Keep your books in order</p>
              </div>
            </motion.div>
            <motion.div 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.8 }}
            }}
            initial = 'initial'
            animate='animate'
            className='md:flex md:gap-3 pl-1 py-5 md:p-5'
            >
              <div>
                <Image
                src='/assets/images/expert.svg'
                height='42'
                width='42'
                ></Image>
              </div>
              <div className='flex flex-col'>
                <div className='text-base font-medium'>
                  Expert Advice
                </div>
                <p className='text-sm font-medium text-gray-500'>The top advisors for you</p>
              </div>
            </motion.div>
            <motion.div 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.9 }}
            }}
            initial = 'initial'
            animate='animate'
            className='md:flex md:gap-3 py-5 md:p-5'
            >
              <div>
                <Image
                src='/assets/images/best.svg'
                height='42'
                width='42'
                ></Image>
              </div>
              <div className='flex flex-col'>
                <div className='text-base font-medium'>
                  Best Prices for Value
                </div>
                <p className='text-sm font-medium text-gray-500'>Best value for your money</p>
              </div>
            </motion.div>
            <motion.div 
            variants={{ 
              initial: { y: 50, opacity:0 },
              animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 1.0 }}
            }}
            initial = 'initial'
            animate='animate'
            className='md:flex md:gap-3 pl-1 py-5 md:p-5'
            >
              <div>
                <Image
                src='/assets/images/insured.svg'
                height='42'
                width='42'
                ></Image>
              </div>
              <div className='flex flex-col'>
                <div className='text-base font-medium'>
                  Insured Business
                </div>
                <p className='text-sm font-medium text-gray-500'>Fully covered business</p>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </motion.section>
    </section>
  )
}

export default Hero
