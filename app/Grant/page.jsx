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

const Grant = () => {
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
          Your Strategic Partner in Government Grant Applications
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
              src='/assets/images/grant1.jpg'
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
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Government Grant Application Assistance––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our comprehensive services will navigate the complexities of your government grant applications</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Grant Identification</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Helping you identify relevant government grants aligned with your organisation's goals.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Application Preparation</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Crafting compelling grant applications that highlight your organisation's strengths and objectives.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Budgeting and Financial Planning</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Strategic financial planning to align your budget with grant requirements.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className='md:grid md:grid-cols-2 flex flex-col-reverse items-center bg-sky-100'>
          <div className='md:px-20 md:pl-28 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Compliance and Reporting––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Stay compliant and fulfill reporting obligations seamlessly with our assistance</p>
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Grant Compliance</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Ensuring your organisation meets all stipulated grant compliance requirements.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Reporting Assistance</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Providing support in compiling and submitting accurate and timely grant reports.</p>
              </div>
            </div>
            
          </div>
          <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/grant2.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
        </div>
      
        <div className='md:grid md:grid-cols-2 items-center bg-gray-100'>
        <div className='flex justify-center items-center'>
            <Image
              src='/assets/images/grant3.jpg'
              height='450'
              width='1000'
              ></Image>
          </div>
          <div className='md:px-20 md:pr-40 p-7'>
            <p className='text-base/relaxed font-normal text-gray-500 text-center drop-shadow-sm'>Our Services</p>
            <p className='text-2xl/relaxed md:text-2xl/relaxed md:text-3xl/relaxed font-semibold drop-shadow-sm'>Grant Strategy and Planning––</p>
            <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Optimise your grant-seeking strategy with our strategic planning services</p>
            
            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Grant Strategy Development</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Tailoring a comprehensive strategy to maximize your chances of grant success.</p>
              </div>
            </div>

            <div className='flex px-4 pt-4'>
              <div class="flex items-center justify-center w-6 h-6 bg-pink-200 rounded-full mt-1">
                <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <div className='pl-4'>
                <p className='text-base/relaxed font-medium drop-shadow-sm'>Capacity Building</p>
                <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Empowering your team with the knowledge and skills needed for successful grant applications.</p>
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
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Grant Experts</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>Our team brings extensive experience in successfully securing government grants across various industries.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Tailored Solutions</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>We understand that each organisation is unique. Our services are tailored to meet your specific needs and objectives.</p>
                </div>
              </div>

              <div className='flex px-4 pt-4'>
                <div class="flex items-center justify-center w-6 h-6 bg-emerald-300 rounded-full mt-1">
                  <svg class="w-6 h-6 text-stone-600 opacity-60 p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className='pl-4'>
                  <p className='text-base/relaxed font-medium drop-shadow-sm'>Commitment to Your Success</p>
                  <p className='text-base/relaxed font-normal text-gray-500 drop-shadow-sm'>We are dedicated to helping your organisation thrive through successful grant applications.</p>
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

export default Grant
