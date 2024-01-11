'use client'
import React from 'react'
import Navbar from '../components/Navbar'
import Scroll_to_top from '../components/Scroll_to_top'
import Footer from '../components/Footer'
import { Container, Section } from '@radix-ui/themes'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import Whatsapp from '../components/Whatsapp'

const Planning = () => {
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
          Your Trusted Partner for Strategic Financial Planning
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
              src='/assets/images/planning1.jpg'
              height='600'
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
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Strategic Financial Planning––</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our financial planning services will navigate the financial landscape for your business success</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Business Financial Assessment</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>In-depth analysis of your current financial position and future goals.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Customised Financial Strategies</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Tailored plans to optimise your financial resources and enhance profitability.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Risk Management</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Identification and mitigation of potential financial risks to safeguard your business.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Retirement Planning for Business Owners––</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our retirement planning services will offer securing your financial future</p>
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Personalised Retirement Plans</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Customised strategies to ensure a comfortable retirement for business owners.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Superannuation Guidance</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Expert advice on managing and maximising superannuation benefits.</p>
              </div>
            </div>
            
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/planning2.jpg'
              height='600'
              width='1000'
              ></Image>
          </div>
        </div>
      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/planning3.jpg'
              height='600'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center md:drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold md:drop-shadow-sm'>Succession Planning––</p>
            <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our succession planning services will plan for your business's future</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Business Transition Strategies</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Smooth and effective plans for passing on or selling your business.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Estate Planning</p>
                <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Ensuring your business assets are passed on seamlessly.</p>
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
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Industry Expertise</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>Our team brings extensive experience in financial planning for businesses across various industries.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Personalised Service</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We understand that every business is unique. Our solutions are tailored to meet your specific needs.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium md:drop-shadow-sm'>Commitment to Success</p>
                  <p className='text-base/relaxed font-normal text-gray-500 md:drop-shadow-sm'>We are dedicated to the success and financial well-being of your business.</p>
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

export default Planning
