'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Scroll_to_top from '../components/Scroll_to_top'
import Footer from '../components/Footer'
import { Container } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import Whatsapp from '../components/Whatsapp'

const Accounting = () => {
  return (
    <div>
      <Navbar />
      <Scroll_to_top />
      <Whatsapp />
      <div className='py-5'>
        <div className='flex flex-col text-center justify-center bg-sky-50 md:pt-24 py-10 md:pb-12 px-7'>
          <p className='text-2xl/snug md:text-3xl/loose font-semibold'>
          Welcome to Reliant Business Solutions
          </p>
          <p className='text-lg/snug font-normal text-gray-500'>
          Your Trusted Partner for Business Startup Accounting and Bookkeeping
          </p>
        </div>      
      <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <motion.div 
        variants={{ 
          initial: { x: 150, opacity:0 },
          animate: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 }}
        }}
        initial = 'initial'
        animate='animate'
        className='flex justify-center items-center'>
            <Image
              src='/assets/images/accounting1.jpg'
              height='450'
              width='1000'
              ></Image>
          </motion.div>
          <motion.div 
          variants={{ 
            initial: { y: 50, opacity:0 },
            animate: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0 }}
          }}
          initial = 'initial'
          animate='animate'
          className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Business Startup Accountingââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our specialised business startup accounting services are here to help you</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Entity Setup</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Expert assistance in choosing the right business structure for your needs.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Financial Planning</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Tailored financial strategies to set your business on the path to success.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Tax Registration</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Seamless registration for all necessary tax obligations.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Comprehensive Bookkeepingââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our bookkeeping services will keep your financial records in order</p>
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Transaction Recording</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Accurate and timely recording of financial transactions.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Bank Reconciliation</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Ensuring your bank statements align with your financial records.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Financial Reporting</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Customised reports to help you make informed business decisions.</p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/accounting2.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
        </div>
      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/accounting3.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Ongoing Supportââ</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We're more than just numbers. Reliant Business Solutions offers ongoing support to help your business thrive</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Financial Analysis</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Regular analysis of your financial data to identify trends and opportunities.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Tax Compliance</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Ensuring your business meets all tax obligations, leaving you free to focus on growth.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Business Advisory</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Expert advice to guide your business through every stage of growth.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className='flex flex-col text-center justify-center bg-sky-50 py-12'>
          <p className='text-2xl/snug font-semibold md:text-3xl/snug font-semibold'>
          Why Choose Reliant Business Solutions?
          </p>
        </div>
        <Container>
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center'>
            <div className='md:p-10 px-7 pb-10'>
              
              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Startup Specialists</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We specialise in assisting startups, providing the expertise needed to navigate the initial challenges.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Personalised Approach</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Your business is unique, and so are our services. We tailor our solutions to meet your specific needs.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Reliability</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Trust in our team of professionals to deliver accurate, timely, and confidential services.</p>
                </div>
              </div>
              
              <div className="justify-center text-center pt-5 w-fit">
                <Link
                className="px-5 text-sm font-medium leading-none border-pink-200 border-solid border-2 rounded-full text-stone-600 bg-pink-200 hover:bg-white h-10 flex items-center"
                href="/Contact"
                >
                  Get In Touch
                </Link>
            </div>
            </div>
            <div className='flex justify-center items-center px-7'>
              <Image
                src='/assets/images/service.jpg'
                height='450'
                width='1000'
                ></Image>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Accounting
